// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: magic;

const DEBUG = false;

/**
 * Draw border around stack for debugging
 * @param {WidgetStack} stack 
 */
function debugLayout(stack) {
  if (DEBUG) {
    stack.borderColor = Color.red();
    stack.borderWidth = 1;
  }
}


/**
 * Create ToDoWidget
 * @param {ListWidget} lw 
 * @param {{id: any, done: boolean, title: string}[]} items 
 * @returns void
 */
function createToDoWidget(lw, items) {
  const rootStack = lw.addStack();
  rootStack.layoutVertically();
  rootStack.topAlignContent();
  // rootStack.size = new Size(250, 170);
  debugLayout(rootStack);
  rootStack.setPadding(0, 0, 0, 2)
  
  const titleStack = rootStack.addStack();
  titleStack.layoutHorizontally();
  // titleStack.spacing = 2;
  debugLayout(titleStack);
  
  const title = titleStack.addText("Todoist");
  title.centerAlignText();
  title.font = Font.boldSystemFont(24);
  
  titleStack.addSpacer();
  
  const sfAddIcon_ = SFSymbol.named("plus.circle.fill");
  sfAddIcon_.applyFont(Font.regularSystemFont(26));
  const sfAddIcon = sfAddIcon_.image;
  const addIcon = titleStack.addImage(sfAddIcon);
  addIcon.imageSize = new Size(26, 26);
  addIcon.tintColor = Color.blue();
  addIcon.url = "todoist://addtask";
  
  rootStack.addSpacer(8);
  
  const listStack = rootStack.addStack();
  listStack.layoutVertically();
  listStack.spacing = 3;
  debugLayout(listStack);
  
  rootStack.addSpacer()
  
  const footer = rootStack.addStack()
  footer.layoutHorizontally()
  const d = new DateFormatter()
  d.useMediumDateStyle()
  d.useMediumTimeStyle()
  const refreshDate = footer.addText(d.string(new Date()))
  refreshDate.font = Font.blackMonospacedSystemFont(9)
  refreshDate.textOpacity = 0.2
  
  items.map(item => {
    const row = listStack.addStack();
    row.layoutHorizontally();
    row.centerAlignContent();
    const sfIcon = SFSymbol.named(item.done ? "checkmark.circle.fill" : "circle");
    //sfIcon.applyHeavyWeight();
    sfIcon.applyFont(Font.blackMonospacedSystemFont(12));
    const icon = row.addImage(sfIcon.image);
    if (item.done) {
      icon.tintColor = Color.green();
    } else {
      icon.tintColor = Color.dynamic(Color.black(), Color.white())
      // icon.tintColor = Color.blue();
      // icon.tintColor = Color.red();
      icon.imageOpacity = 0.5;
    }
    icon.imageSize = new Size(12, 12);
    row.addSpacer(4);
    const title = row.addText(item.title);
    title.url = `todoist://task?id=${item.id}`;
    title.font = Font.regularSystemFont(12);
  });
  
  return;
}


/**
 * Get all tasks for widget
 * @returns {Promise<any[]>} Todoist Tasks;
 */
async function getTasks(token) {
  const req = new Request("https://api.todoist.com/rest/v1/tasks");
  req.headers = {
    Authorization: `Bearer ${token}`
  }
  
  const res = await req.loadJSON()
  const tasks = res.map(i => ({
    id: i.id,
    done: i.completed,
    title: i.content,
  }));
  
  return tasks;
}


async function getToken() {
  const key = 'TODOIST_TOKEN';
  if (!Keychain.contains(key) || !Keychain.get(key)) {
    const keyAlert = new Alert();
    keyAlert.title = "Todoist Access Key"
    const saveAction = keyAlert.addAction("Save") || 0;
    keyAlert.addCancelAction("Cancel");
    keyAlert.addTextField("API Access Token");
    await keyAlert.present();
    const value = keyAlert.textFieldValue(saveAction);
    Keychain.set(key, value);
  }
  return Keychain.get(key);
}

const token = await getToken();
console.log(token);
const tasks = await getTasks(args.queryParameters.token || token);
const nextRunDate = new Date();
nextRunDate.setDate(nextRunDate.getDate() + 1);
nextRunDate.setHours(0);
nextRunDate.setMinutes(0);
nextRunDate.setSeconds(0);
nextRunDate.setMilliseconds(0);

const lw = new ListWidget();
lw.refreshAfterDate = nextRunDate
createToDoWidget(lw, tasks, nextRunDate);
Script.setWidget(lw);
lw.presentMedium();