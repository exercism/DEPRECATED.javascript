## Making Your First Node Module

To create a module that can be loaded with `var Bob = require('./bob.js');`, put this code in `bob.js`:

```javascript
var Bob = function() {};

Bob.prototype.hey = function(what) {
//
// Your solution to the exercise goes here
//
};

module.exports = Bob;
```

You can find more information about modules in the [node documentation](http://nodejs.org/api/modules.html#modules_module_exports). To make it easier to get started, there's a "skeleton" bob.js file in the directory for the first exercise.
