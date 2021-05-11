// reference
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: magic;

const a = new Alert();
a.addAction("Hello world");
a.addCancelAction("Cancel");
a.addSecureTextField("Password", "OK")
a.present();