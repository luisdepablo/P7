const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');
const orig = path.resolve(path.join(__dirname, "CORE19-07_quiz_mvc_server.zip"));
console.log(__dirname);
const dest = path.resolve(path.join(__dirname ,"../CORE19-07_quiz_mvc_server.zip"));
const output = fs.createWriteStream(orig);
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});
archive.pipe(output);
archive.glob('*', {"ignore": ['node_modules', 'tests', 'README.md', 'LICENSE','package-loc.json','.DS_Store']});
archive.finalize();
fs.moveSync(orig, dest, { overwrite: true });