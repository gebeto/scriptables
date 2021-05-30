#!/bin/bash


function show_commands() {
	echo "Available commands: '$1'"
	printf '\r\n'
	printf '    '
	printf '%s\n    ' "${commands[@]}"
	printf '\r\n'
}


function upgradeTypes() {
	curl https://raw.githubusercontent.com/schl3ck/ios-scriptable-types/master/dist/scriptable.d.ts -o index.d.ts
}


function init() {
	ln -s ~/Library/Mobile\ Documents/iCloud~dk~simonbs~Scriptable/Documents/ sources
}


function import() {
	ln ~/Library/Mobile\ Documents/iCloud~dk~simonbs~Scriptable/Documents/"$1.js" "widgets/$1.js"
}


function importModule() {
	ln ~/Library/Mobile\ Documents/iCloud~dk~simonbs~Scriptable/Documents/modules/"$1.js" "modules/$1.js"
}


function list() {
	ls ~/Library/Mobile\ Documents/iCloud~dk~simonbs~Scriptable/Documents/
}


commands=(init list import importModule upgradeTypes)


if [[ $# -gt 0 ]] && [[ "${commands[@]}" =~ "$1" ]]; then
	$1 "${@:2}";
else
	show_commands "$commands"
fi
