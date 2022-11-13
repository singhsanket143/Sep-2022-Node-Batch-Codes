import {readFile, writeFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf8' });
console.log(typeof contents);
const data = {
    title: 'my title',
    body: 'my data'
}

for(const [key, value] of Object.entries(data)) {
    contents = contents.replace(`[${key}]`, value);
}

await writeFile(new URL('./index.html', import.meta.url), contents);
