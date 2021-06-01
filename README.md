# Scriptable Development Environment

This project includes
 - Scriptable types generated from documentation page
 - **RUN SCRIPT** hotkey: <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>B</kbd>, it will run current script in Scriptable
 - Folder with all your Scriptable apps


## Getting started

How to start to develop scriptable apps with VSCode:

1. Download [Scirptable for MacOS](https://scriptable.app/mac-beta/)
2. Enable iCloud sync for Scriptable
3. Download [VSCode](https://code.visualstudio.com/)
4. Clone this repository
  ```sh
  git clone https://github.com/gebeto/scriptables
  ```
5. Run command to initialize your sources folder link
  ```sh
  ./scriptable.sh init
  ```
6. Done! Open VSCode in the repo(`code .`) and start to build your apps fast and easy!

 > Folder `sources` is your scriptable folder link, you can edit files there and it will be updated in scriptable app.


## Initialize your local env

```sh
$ ./scriptable.sh init
```


## Import your script for git integration

```sh
$ ./scriptable.sh import ScriptName
```


## ERRORS
If scriptable typing are not loaded for you, need to add `///<reference path="../index.d.ts" />` on top of the your script (like shown below).
Where **path** is a relative path to the `index.d.ts` file.

```diff
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;
+ ///<reference path="../index.d.ts" />

...
```


## Thanks
 - [schl3ck](https://github.com/schl3ck) for Scriptable types definition: [ios-scriptable-types](https://github.com/schl3ck/ios-scriptable-types)
