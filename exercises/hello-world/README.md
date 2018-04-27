# Hello World

The classical introductory exercise. Just say "Hello, World!".

["Hello, World!"](http://en.wikipedia.org/wiki/%22Hello,_world!%22_program) is
the traditional first program for beginning programming in a new language
or environment.

The objectives are simple:

- Write a function that returns the string "Hello, World!".
- Run the test suite and make sure that it succeeds.
- Submit your solution and check it at the website.

If everything goes well, you will be ready to fetch your first real exercise.

## Setup

See http://exercism.io/languages/javascript/installation for instructions on installing JavaScript, Node.js, and Jasmine.

## Tutorial

This exercise has two files:

- `hello-world.js`
- `hello-world.spec.js`

The first file is where you will write your code.
The second is where the tests are defined.

The tests will check whether your code is doing the right thing.
You don't need to be able to write a test suite from scratch,
but it helps to understand what a test looks like, and what
it is doing.

In your text editor, open the test file, `hello-world.spec.js`.
There is one test inside:

    it('says hello world', function() {
      expect(helloWorld()).toEqual('Hello, World!');
    });

Run the test now, with the following command on the command-line:

    jasmine hello-world.spec.js

The test fails, which makes sense since you've not written any code yet.

The error message should contain this line:

    Error: Cannot find module './hello-world'

To fix this error, you need to create a *file* called `hello-world.js` in the current directory. Use your text editor to create an empty file now, and re-run the tests:

    jasmine hello-world.spec.js

Now we have a new error message. That's progress! :-)

     TypeError: helloWorld is not a function

To fix this error, go back to `hello-world.js` and type this code:

    module.exports = function() {
    }

Remember to save the file, then run the tests again:

    jasmine hello-world.spec.js

Now we have yet another new error message. That's good too! We are getting closer.

The failure looks like this:

    1) Hello World says hello world 
       Message:
          Expected undefined to equal 'Hello, World!'.

There's more, but this is the most important part.

Take a look at that first line:

    1) Hello World says hello world 

The text 'says hello world' is the name of the test that failed.

Now look at the test definition again:

    it('says hello world', function() {
      // ... more code here ...
    });

This is how you find the test that failed inside the test file.

The failure message also explains what is wrong:

    Expected undefined to equal 'Hello, World!'.

This comes from the part of the test definition that says "expect":

    expect(helloWorld.hello()).toEqual('Hello, World!');

It's comparing two values. It is calling

    helloWorld.hello()

and comparing the result to a hard-coded string.

    'Hello, World!'.

So if you look at the failure message again, the hello function
is returning `undefined`.

Try changing the function in `hello-world.js` so that it says

    module.exports = function() {
        return "chocolate";
    };

Then run the tests again from the command-line:

    jasmine hello-world.spec.js

Notice how it changes the failure message.

Finally, change the implementation in `hello-world.js` again, this time to make the test pass. Your goal is to see the following output on the terminal:

    Started
    .

    1 spec, 0 failures

When you see this, you are done! Give yourself a high five! Then submit your solution to exercism.io:

    exercism submit hello-world.js

## Running the test suite

The provided test suite uses [Jasmine](https://jasmine.github.io/).
You can install it by opening a terminal window and running the
following command:

```sh
npm install -g jasmine
```

Run the test suite from the exercise directory with:

```sh
jasmine hello-world.spec.js
```

In many test suites all but the first test have been marked "pending".
Once you get a test passing, activate the next one by changing `xit` to `it`.

## Source

This is an exercise to introduce users to using Exercism [http://en.wikipedia.org/wiki/%22Hello,_world!%22_program](http://en.wikipedia.org/wiki/%22Hello,_world!%22_program)

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have completed the exercise.
