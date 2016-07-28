After configuring `exercism` command-line client and fetching your first JavaScript exercise (see [command-line interface overview](http://exercism.io/cli)) is time to run some tests. Move to the folder where that exercise's files are located (a path similar to `<EXERCISM_HOME_DIR>/<TRACK_ID>/<EXERCISE>`) and run the tests with the `jasmine-node` command you should have installed on *Installing JavaScript* step:

    cd ~/exercism/javascript/bob
    jasmine-node bob_test.spec.js

*Note that `~/exercism` is the default folder for `EXERCISM_HOME_DIR`. Be sure you use your configured folder for it*

## Making Your First Node Module

To create a module that can be loaded with `var Bob = require('./bob.js');`, put this code in `bob.js`:

    var Bob = function() {};

    Bob.prototype.hey = function(what) {
      //
      // Your solution to the exercise goes here
      //
    };

    module.exports = Bob;

You can find more information about modules in the [node documentation](http://nodejs.org/api/modules.html#modules_module_exports). To make it easier to get started, there's a "skeleton" bob.js file in the directory
for the first exercise.

## Visual Studio on Windows

Install [Visual Studio Express 2013 for web](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx). This will include the IDE and web development tools.

To get started, you can download a Visual Studio solution that is already set up to work with JavaScript and the other languages that Visual Studio supports.

![Solution Explorer](http://x.exercism.io/v3/tracks/javascript/docs/img/SolutionExplorer.png)

1. Download the [Exercism.io Visual Studio Template](https://github.com/rprouse/Exercism.VisualStudio) from GitHub by clicking the Download Zip button on the page.
2. Unzip the template into your exercises directory, for example `C:\src\exercises`
2. Install the [Exercism CLI](http://exercism.io/cli)
3. Open a command prompt to your exercise directory
4. Add your API key to exercism `exercism configure --key=YOUR_API_KEY`
5. Configure your source directory in exercism `exercism configure --dir=C:\src\exercises`
6. [Fetch your first exercise](http://exercism.io/languages/javascript) `exercism fetch javascript`
7. Open the Exercism solution in Visual Studio
8. Expand the Exercism.javascript project
9. Click on **Show All Files** in Solution Explorer (See below)
10. The exercise you just fetched will appear greyed out. Right click on the folder and **Include In Project**
11. Get coding...

![Add files](http://x.exercism.io/v3/tracks/javascript/docs/img/AddFiles.png)

If you have a paid version of Visual Studio, you should install the [Web Essentials](http://vswebessentials.com/) extension. It will make working with Javascript much easier.

You can run the unit tests from a node.js command line using the batch file in the project.

    C:\Src\exercises\javascript>test example\bob_test.spec.js
    .................

    Finished in 0.02 seconds
    17 tests, 17 assertions, 0 failures, 0 skipped

If you do not see any output from running the tests, you are likely not in a Node.js command prompt.

## Setting Up a Linter

A linter is like a tester for your code's style and formatting. In some languages there are many acceptable styles, and using a linter allows you to be internally consistent (e.g. Ruby), or adhere to one of many common styles. In other languages there are fewer choices, and a linter allows programmers to look at code from a great variety of sources and still feel at home (e.g. Go). You can read more [here](https://en.wikipedia.org/wiki/Lint_(software)).

The old standard linter for JavaScript is [JSLint](http://jslint.com). However, it is controversially picky. [JSHint](http://jshint.com) is another popular linter. We suggest using [ESLint](http://eslint.org), which is more customizable than either JSLint or JSHint, and is well-run.

To get started using ESLint, follow the instructions [here](http://eslint.org/docs/user-guide/command-line-interface.html). Once you have ESLint installed, you'll be able to lint your code with a simple `eslint [options] [file|dir]*` command. Eg, if you're in the hello-world directory, `eslint .` would lint all files in that directory.
