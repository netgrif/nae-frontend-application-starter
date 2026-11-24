import * as fs from "node:fs";
import * as path from "node:path";


const dist = path.join('dist', 'template-frontend');

if (fs.existsSync(path.join(dist, '3rdpartylicenses.txt'))) {
    console.log('Fix third party licenses file');
    fs.renameSync(path.join(dist, '3rdpartylicenses.txt'), path.join(dist, 'THIRD-PARTY.txt'));
    fs.copyFileSync(path.join(dist, 'THIRD-PARTY.txt'), 'THIRD-PARTY.txt');
}


console.log('Copy LICENCE file');
fs.copyFileSync('LICENSE.txt', path.join(dist, 'LICENSE.txt'));


console.log('Done postbuild')
