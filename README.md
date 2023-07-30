# OPS Webpages
## Developing Guide
### Requirements
* [Node](#node)
* [Git](#git)
* Text Editor (Recommended: [VSCode](https://code.visualstudio.com/))
* GitHub Account + Appropriate Repository Permissions

### First-Time Setup
* Install everything needed in the [Installation Instructions](#installation-instructions)
* Make sure you have appropriate permissions
* Clone this repository (Git is required)
* `cd` into the local repository

### Installation Instructions
#### Git
* See this: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
#### Node
* Get the latest LTS Node.js from the [Node.js website](https://nodejs.org/en/download) for your device (Windows, Mac, Linux, etc).
    * To check if you've successfully installed Node.js, try running `node -v` in your terminal. If a version pops up, you are ready to go.
        * Example:
        ```
        PS C:\Users\Dylan> node -v
        v16.13.0
        ```
* Double check if `npm` is installed using `npm -v`
    * It should automatically be installed with Node.js
        * Example:
        ```
        PS C:\Users\Dylan> npm -v
        9.6.0
        ```

#### SASS/SCSS
* Make sure Node.js is installed
* In the local repository, run `npm install` to install Bootstrap and SASS
* To reflect changes in the scss file(s), run `npm run sass` for a one-time compilation, or `npm run sass-watch` for automatic watching of changes

### Running SASS/SCSS
* Run `npm install` in your repository if you haven't already
* Run `npm run sass` for a one-time compilation of scss to css, or `npm run sass-watch` for automatic compilation when the scss files change
    * If you run `npm run sass-watch` and still want to access the command line, create a separate terminal after the command

### Development Process
* (Recommended) Create an issue/pick a specific issue
    * This helps organize the work done on this repository
* Create new branch on GitHub
* Fetch from origin
* Check out branch locally
* Run `npm install` to make sure all the packages are installed
* Develop feature/fix bugs
* Create Pull Request

