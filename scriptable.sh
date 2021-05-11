# /bin/bash


function show_commands() {
	echo "Available commands: '$1'"
	printf '\r\n'
	printf '    '
	printf '%s\n    ' "${commands[@]}"
	printf '\r\n'
}


function import() {
    ln ~/Library/Mobile\ Documents/iCloud\~dk\~simonbs\~Scriptable/Documents/"$1.js" "widgets/$1.js"
}


function list() {
    ls ~/Library/Mobile\ Documents/iCloud\~dk\~simonbs\~Scriptable/Documents
}


commands=(list import)


if [[ $# -gt 0 ]] && [[ "${commands[@]}" =~ "$1" ]]; then
	$1 "${@:2}";
else
	show_commands "$commands"
fi
