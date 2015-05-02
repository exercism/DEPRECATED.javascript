## Visual Studio on Windows

Install [Visual Studio Express 2013 for web](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx). This will include the IDE and web development tools.

To get started, you can download a Visual Studio solution that is already set up to work with JavaScript and the other languages that Visual Studio supports.

![Solution Explorer](/img/SolutionExplorer.png)

1. Download the [Exercism.io Visual Studio Template](https://github.com/rprouse/Exercism.VisualStudio) from GitHub by clicking the Download Zip button on the page.
2. Unzip the template into your exercises directory, for example `C:\src\exercises`
2. Install the [Exercism CLI](http://help.exercism.io/installing-the-cli.html)
3. Open a command prompt to your exercise directory
4. Add your API key to exercism `exercism configure --key=YOUR_API_KEY`
5. Configure your source directory in exercism `exercism configure --dir=C:\src\exercises`
6. [Fetch your first exercise](http://help.exercism.io/fetching-exercises.html) `exercism fetch javascript`
7. Open the Exercism solution in Visual Studio
8. Expand the Exercism.javascript project
9. Click on **Show All Files** in Solution Explorer (See below)
10. The exercise you just fetched will appear greyed out. Right click on the folder and **Include In Project**
11. Get coding...

![Add files](/img/AddFiles.png)

If you have a paid version of Visual Studio, you should install the [Web Essentials](http://vswebessentials.com/) extension. It will make working with Javascript much easier.

You can run the unit tests from a node.js command line using the batch file in the project.

```
C:\Src\exercises\javascript>test example\bob_test.spec.js
.................

Finished in 0.02 seconds
17 tests, 17 assertions, 0 failures, 0 skipped
```

If you do not see any output from running the tests, you are likely not in a Node.js command prompt.
