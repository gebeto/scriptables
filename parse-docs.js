let methods = [...document.querySelectorAll('.md-clipboard+code')].map(i => {
    let row = '\t' + i.textContent.trim();
    if (row.match(/\)$/)) {
        row = row.replace(/\)$/, '): void;');
    } else {
        row = row + ";";
    }
    return row;
}).join('\n');
let title = document.querySelector('h1').textContent.trim().replace('¶', '');
copy(`class ${title} \{\n${methods}\}`)