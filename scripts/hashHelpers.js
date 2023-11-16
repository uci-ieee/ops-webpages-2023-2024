const fs = require("fs");
const crypto = require("crypto");
const path = require('path');

// this function defines helper functions used in hash.js to implement cache busting of js files


// given a js file path, generate an md5 hash
function createHashOfJS(filePath) {
    console.log(filePath)
    const fileContent = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(fileContent).digest('hex');
}

// generate a hash of all the js files in the js directory
function createHashMapOfJSFiles(directoryPath) {
    // recursively iterate through every js file in this directory to hash

    let jsFiles = {};

    // for each file in the directory

    // read directory
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            // if the current file is a directory
            // recursively call the function for that directory and add it to the current running array of html files
            jsFiles = { ...jsFiles, ...createHashMapOfJSFiles(filePath) };
        } else {
            // If it is a file, check if it is an HTML file
            if (path.extname(file).toLowerCase() === '.js') {
                // grab the js base
                const fileName = file.split(".").slice(0, -1).join(".");
                const hash = createHashOfJS(filePath);
                jsFiles[file] = `${fileName}.${hash}.js`;

                const newFileName = `${fileName}.${hash}.js`;
                const newFilePath = path.join(directoryPath, newFileName);

                // copy the content of the original js to the new js file with the name
                fs.copyFileSync(filePath, newFilePath);
            }
        }
    }

    return jsFiles;
}


// update the html to include the hashed js now
function updateHTMLFiles(htmlFiles, jsFileHashMap) {
    for (file of htmlFiles) {
        // read the file contents
        const htmlContent = fs.readFileSync(file, 'utf-8');
        // update all the JS files
        for (const [jsFileName, jsHashedFileName] of Object.entries(jsFileHashMap)) {
            const updatedHtml = htmlContent.replaceAll(jsFileName, jsHashedFileName);
            fs.writeFileSync(file, updatedHtml, 'utf-8');
        }
    }
}

// find all html files in the directory and push to an array
function getHtmlFilePaths(directoryPath) {

    // list of files to ignore
    const filesToIgnore = [".git", ".vscode", ".node_modules"];

    // read directory
    const files = fs.readdirSync(directoryPath);

    // initialize an array for html file paths
    let htmlFiles = [];

    // for each file in the directory
    for (const file of files) {
        const filePath = path.join(directoryPath, file);

        if (filesToIgnore.some(fileToIgnore => filePath.includes(fileToIgnore))) {
            // ignore this file/directory
            // do nothing
        } else if (fs.statSync(filePath).isDirectory()) {
            // if the current file is a directory
            // recursively call the function for that directory and add it to the current running array of html files
            htmlFiles = htmlFiles.concat(getHtmlFilePaths(filePath));
        } else {
            // If it is a file, check if it is an HTML file
            if (path.extname(file).toLowerCase() === '.html') {
                htmlFiles.push(filePath);
            }
        }
    }
    return htmlFiles;
}

module.exports = { getHtmlFilePaths, createHashMapOfJSFiles, updateHTMLFiles };