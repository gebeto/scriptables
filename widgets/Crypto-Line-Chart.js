// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: download;
///<reference path="../index.d.ts" />

const data_ = [[1], [1.9], [4], [2.8], [5], [2.4]];
const crypto = args.widgetParameter || "btc";
const req = new Request("https://api.kuna.io/v3/book/" + crypto + "uah");
const dd = await req.loadJSON();
const data = dd.slice(0, 30);
data.reverse();

const lw = new ListWidget();

const chart = importModule("modules/LineChart").drawChart({
  data: data,
  width: 300,
  height: 300,
  chartHeight: 140,
  spacing: 50,
});
lw.backgroundImage = chart.getImage();
const text = lw.addText(crypto.toUpperCase());
text.url = "https://github.com";
text.leftAlignText();
text.font = Font.boldMonospacedSystemFont(24);
text.textColor = Color.black();
const dateText = lw.addDate(new Date());
dateText.applyTimeStyle();
dateText.font = Font.boldMonospacedSystemFont(8);
dateText.textColor = Color.black();
dateText.textOpacity = 0.3;
lw.addSpacer();
Script.setWidget(lw);
lw.presentSmall();
