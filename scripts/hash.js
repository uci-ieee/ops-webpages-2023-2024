const hashHelpers = require("./hashHelpers");

// this file hashes our js files to implement a form of cache busting

// obtain all the html files in the directory

const directoryPath = __dirname + "/../"; // Use the current directory
const jsPath = directoryPath + "/js/";

// generate a hash map of js files and create copies of the JS file with the hash in the name
const jsHashMap = hashHelpers.createHashMapOfJSFiles(jsPath);

// get a list of all the HTML files in the directory
const htmlFiles = hashHelpers.getHtmlFilePaths(directoryPath);

// iterate through all the html files and update the javascript
hashHelpers.updateHTMLFiles(htmlFiles, jsHashMap);

