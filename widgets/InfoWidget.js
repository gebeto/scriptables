// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
///<reference path="../index.d.ts" />

const ww = new ListWidget()
ww.setPadding(0,0,0,0);


const color = {
  shadow: Color.dynamic(
    new Color("#000000", 0.01),
    new Color("#FFFFFF", 0.04),
  ),
  cardBackground: Color.dynamic(
    new Color("#555555", 0.1),
    new Color("#FFFFFF", 0.1),
  ),
  cardBackgroundSmall: Color.dynamic(
    new Color("#555555", 0.1),
    new Color("#FFFFFF", 0.12),
  ),
  caption: Color.dynamic(
    new Color("#000000", 0.6),
    new Color("#FFFFFF", 0.6),
  ),
  white: Color.dynamic(
    new Color("#000000", 0.8),
    Color.white(),
  ),
  black: Color.dynamic(
    Color.white(),
    new Color("#000000", 0.8),
  ),
}

function addSFIcon(stack, name, size) {
  const sfIcon = SFSymbol.named(name);
  sfIcon.applyFont(Font.boldRoundedSystemFont(size));
  const sfImage = stack.addImage(sfIcon.image);
  sfImage.tintColor = color.white;
  sfImage.imageOpacity = 0.8;
  sfImage.imageSize = new Size(size, size);
  return sfImage;
}


const stackRoot = ww.addStack();
// stackRoot.borderColor = new Color("#FFFFFF");
// stackRoot.borderWidth = 6;
stackRoot.setPadding(10, 10, 10, 10);
stackRoot.cornerRadius = 20;
// stackRoot.size = new Size(136, 136);
stackRoot.layoutVertically();

const stackTopRoot = stackRoot.addStack();
stackTopRoot.centerAlignContent();
const stackTopLeft = stackTopRoot.addStack();
stackTopRoot.addSpacer();
// const stackTopCenter = stackTopRoot.addStack();
// stackTopCenter.backgroundColor = Color.dynamic(
//   new Color("#555555", 0.1),
//   new Color("#FFFFFF", 0.1),
// );
// stackTopCenter.size = new Size(2, 38);
// stackTopCenter.cornerRadius = 1;
// stackTopRoot.addSpacer();
const stackTopRight = stackTopRoot.addStack();

stackTopRoot.layoutHorizontally();
stackTopRoot.cornerRadius = 14;
stackTopRoot.borderWidth = 2;
stackTopRoot.borderColor = color.shadow;
stackTopRoot.backgroundColor = color.cardBackground;
stackTopRoot.setPadding(8, 12, 8, 8);

stackTopLeft.centerAlignContent();
stackTopLeft.layoutVertically();
stackTopLeft.topAlignContent();

// stackTopRight.borderColor = Color.red();
// stackTopRight.borderWidth = 1;
stackTopRight.layoutVertically();
stackTopRight.bottomAlignContent();
addSFIcon(stackTopRight, "figure.walk.diamond.fill", 36);

const titleText = stackTopLeft.addText("128");
// const titleText = stackTopLeft.addText(`${Device.screenScale()}`);
titleText.font = Font.boldRoundedSystemFont(36);

const captionText = stackTopLeft.addText("Steps");
captionText.font = Font.regularRoundedSystemFont(12);
captionText.textColor = color.caption;

stackRoot.addSpacer();

function createFlexibleBlock(root) {
  const stack = root.addStack();
  stack.centerAlignContent()
  stack.backgroundColor = color.cardBackgroundSmall;
  stack.borderWidth = 2;
  stack.borderColor = color.shadow;
  stack.cornerRadius = 14;
  stack.addSpacer();
  const stackCenter = stack.addStack();
  stackCenter.layoutVertically()
  stackCenter.addSpacer();
  const stackResult = stackCenter.addStack()
  stackCenter.addSpacer();
  stack.addSpacer();
  return stackResult;
}

const stackBottom = stackRoot.addStack();
const stackBottomLeft = createFlexibleBlock(stackBottom);
addSFIcon(stackBottomLeft, "video.fill", 28)
stackBottom.addSpacer();
const stackBottomRight = createFlexibleBlock(stackBottom);
const i = addSFIcon(stackBottomRight, "camera.fill", 28)
stackBottomRight.url = "camera://photo";


// ww.presentSmall();
ww.presentMedium();