class Image {
    size: Size;
    static fromFile(filePath: string): Image;
    static fromData(data: Data): Image;
}


class Color {
    hex: string;
    red: number;
    green: number;
    blue: number;
    alpha: number;
    constructor(hex: string, alpha: number);
    static black(): Color;
    static darkGray(): Color;
    static lightGray(): Color;
    static white(): Color;
    static gray(): Color;
    static red(): Color;
    static green(): Color;
    static blue(): Color;
    static cyan(): Color;
    static yellow(): Color;
    static magenta(): Color;
    static orange(): Color;
    static purple(): Color;
    static brown(): Color;
    static clear(): Color;
    static dynamic(lightColor: Color, darkColor: Color): Color;
}


class Font {
    constructor(name: string, size: number);
    static largeTitle(): Font;
    static title1(): Font;
    static title2(): Font;
    static title3(): Font;
    static headline(): Font;
    static subheadline(): Font;
    static body(): Font;
    static callout(): Font;
    static footnote(): Font;
    static caption1(): Font;
    static caption2(): Font;
    static systemFont(size: number): Font;
    static ultraLightSystemFont(size: number): Font;
    static thinSystemFont(size: number): Font;
    static lightSystemFont(size: number): Font;
    static regularSystemFont(size: number): Font;
    static mediumSystemFont(size: number): Font;
    static semiboldSystemFont(size: number): Font;
    static boldSystemFont(size: number): Font;
    static heavySystemFont(size: number): Font;
    static blackSystemFont(size: number): Font;
    static italicSystemFont(size: number): Font;
    static ultraLightMonospacedSystemFont(size: number): Font;
    static thinMonospacedSystemFont(size: number): Font;
    static lightMonospacedSystemFont(size: number): Font;
    static regularMonospacedSystemFont(size: number): Font;
    static mediumMonospacedSystemFont(size: number): Font;
    static semiboldMonospacedSystemFont(size: number): Font;
    static boldMonospacedSystemFont(size: number): Font;
    static heavyMonospacedSystemFont(size: number): Font;
    static blackMonospacedSystemFont(size: number): Font;
    static ultraLightRoundedSystemFont(size: number): Font;
    static thinRoundedSystemFont(size: number): Font;
    static lightRoundedSystemFont(size: number): Font;
    static regularRoundedSystemFont(size: number): Font;
    static mediumRoundedSystemFont(size: number): Font;
    static semiboldRoundedSystemFont(size: number): Font;
    static boldRoundedSystemFont(size: number): Font;
    static heavyRoundedSystemFont(size: number): Font;
    static blackRoundedSystemFont(size: number): Font;
}


class Point {
    x: number;
    y: number;
	constructor(x: number, y: number);
}


class Size {
    width: number;
    height: number;
	constructor(width: number, height: number): void;
}


class LinearGradient {
    colors: Color[];
    locations: number[];
    startPoint: Point;
    endPoint: Point;
}


class Device {
    static name(): string;
    static systemName(): string;
    static systemVersion(): string;
    static model(): string;
    static isPhone(): bool;
    static isPad(): bool;
    static screenSize(): Size;
    static screenResolution(): Size;
    static screenScale(): number;
    static screenBrightness(): number;
    static isInPortrait(): bool;
    static isInPortraitUpsideDown(): bool;
    static isInLandscapeLeft(): bool;
    static isInLandscapeRight(): bool;
    static isFaceUp(): bool;
    static isFaceDown(): bool;
    static batteryLevel(): number;
    static isDischarging(): bool;
    static isCharging(): bool;
    static isFullyCharged(): bool;
    static preferredLanguages(): [string];
    static locale(): string;
    static language(): string;
    static isUsingDarkAppearance(): bool;
    static volume(): number;
    static setScreenBrightness(percentage: number): void;
}


declare namespace args {
    const length: number;
    const all: any[];
    const plainTexts: string[];
    const urls: string[];
    const fileURLs: string[];
    const images: Image[];
    const queryParameters: { string: string };
    const siriShortcutArguments: { string: string };
    const shortcutParameter: any;
    const widgetParameter: any;
    const notification: Notification;
}


class Script {
    static name(): string
    static complete(): void;
    static setShortcutOutput(value: any): void;
    static setWidget(widget: any): void;
}


class Alert {
    title: string;
    message: string;
    addAction(title: string): void;
    addDestructiveAction(title: string): void;
    addCancelAction(title: string): void;
    addTextField(placeholder: string, text: string): void;
    addSecureTextField(placeholder: string, text: string): void;
    textFieldValue(index: number): string;
    present(): Promise<number>;
    presentAlert(): Promise<number>;
    presentSheet(): Promise<number>;
}


class Notification {
    identifier: string;
    title: string;
    subtitle: string;
    body: string;
    preferredContentHeight: number;
    badge: number;
    threadIdentifier: string;
    userInfo: { string: any };
    sound: string;
    openURL: string;
    deliveryDate: Date;
    nextTriggerDate: Date;
    scriptName: string;
    actions: { title: string, url: string }[];
    schedule(): Promise;
    remove(): Promise;
    setTriggerDate(date: Date): void;
    setDailyTrigger(hour: number, minute: number, repeats: boolean): void;
    setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats: boolean): void;
    addAction(title: string, url: string, destructive: boolean): void;
	static current(): Notification;
	static allPending(): Promise<Notification[]>;
	static allDelivered(): Promise<Notification[]>;
	static removeAllPending(): Promise;
	static removeAllDelivered(): Promise;
	static removePending(identifiers: string[]): Promise;
	static removeDelivered(identifiers: string[]): Promise;
	static resetCurrent(): void;
}


class Calendar {
    identifier: string;
    title: string;
    isSubscribed: boolean;
    allowsContentModifications: boolean;
    color: Color;
    supportsAvailability(availability: string): boolean;
    save(): void;
    remove(): void;
    static forReminders(): Promise<Calendar[]>;
    static forEvents(): Promise<Calendar[]>;
    static forRemindersByTitle(title: string): Promise<Calendar>;
    static forEventsByTitle(title: string): Promise<Calendar>;
    static createForReminders(title: string): Promise<Calendar>;
    static findOrCreateForReminders(title: string): Promise<Calendar>;
    static defaultForReminders(): Promise<Calendar>;
    static defaultForEvents(): Promise<Calendar>;
    static presentPicker(allowMultiple: boolean): Promise<Calendar[]>;
}


// System

class Keychain {
    static contains(key: string): boolean;
    static set(key: string, value: string): void;
    static get(key: string): string;
    static remove(key: string): void;
}


class SFSymbol {
    image: Image;
    static named(symbolName: string): SFSymbol;
    applyFont(font: Font): void;
    applyUltraLightWeight(): void;
    applyThinWeight(): void;
    applyLightWeight(): void;
    applyRegularWeight(): void;
    applyMediumWeight(): void;
    applySemiboldWeight(): void;
    applyBoldWeight(): void;
    applyHeavyWeight(): void;
    applyBlackWeight(): void;
}


// WIDGETS
class WidgetDate {
    date: Date;
    textColor: Color;
    font: Font;
    textOpacity: number;
    lineLimit: number;
    minimumScaleFactor: number;
    shadowColor: Color;
    shadowRadius: number;
    shadowOffset: Point;
    url: string;
    leftAlignText(): void;
    centerAlignText(): void;
    rightAlignText(): void;
    applyTimeStyle(): void;
    applyDateStyle(): void;
    applyRelativeStyle(): void;
    applyOffsetStyle(): void;
    applyTimerStyle(): void;
}

class WidgetImage {
    image: Image;
    resizable: boolean;
    imageSize: Size;
    imageOpacity: number;
    cornerRadius: number;
    borderWidth: number;
    borderColor: Color;
    containerRelativeShape: boolean;
    tintColor: Color;
    url: string;
    leftAlignImage(): void;
    centerAlignImage(): void;
    rightAlignImage(): void;
    applyFittingContentMode(): void;
    applyFillingContentMode(): void;
}

class WidgetSpacer {
    length: number;
}

class WidgetStack {
    backgroundColor: Color;
    backgroundImage: Image;
    backgroundGradient: LinearGradient;
    spacing: number;
    size: Size;
    cornerRadius: number;
    borderWidth: number;
    borderColor: Color;
    url: string;
    addText(text: string): WidgetText;
    addDate(date: Date): WidgetDate;
    addImage(image: Image): WidgetImage;
    addSpacer(length: number): WidgetSpacer;
    addStack(): WidgetStack;
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;
    useDefaultPadding(): void;
    topAlignContent(): void;
    centerAlignContent(): void;
    bottomAlignContent(): void;
    layoutHorizontally(): void;
    layoutVertically(): void;
}

class WidgetText {
    text: string;
    textColor: Color;
    font: Font;
    textOpacity: number;
    lineLimit: number;
    minimumScaleFactor: number;
    shadowColor: Color;
    shadowRadius: number;
    shadowOffset: Point;
    url: string;
    leftAlignText(): void;
    centerAlignText(): void;
    rightAlignText(): void;
}

class ListWidget {
    backgroundColor: Color;
    backgroundImage: Image;
    backgroundGradient: LinearGradient;
    spacing: number;
    url: string;
    refreshAfterDate: Date;
    addText(text: string): WidgetText;
    addDate(date: Date): WidgetDate;
    addImage(image: Image): WidgetImage;
    addSpacer(length: number): WidgetSpacer;
    addStack(): WidgetStack;
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;
    useDefaultPadding(): void;
    presentSmall(): Promise;
    presentMedium(): Promise;
    presentLarge(): Promise;
}