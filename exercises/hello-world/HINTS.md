## Tutorial

This exercise has two files:

- hello-world.js
- hello-world.spec.js

The first file is where you will write your code.
The second is where the tests are defined.

The tests will check whether your code is doing the right thing.
You don't need to be able to write a test suite from scratch,
but it helps to understand what a test looks like, and what
it is doing.

Open up the test file, hello-world.spec.js.
It has three tests defined in it.

This is the first test:

    it('says hello world with no name', function() {
      expect(helloWorld.hello('')).toEqual('Hello, World!');
    });

Run the test now, with the following command on the command-line:

    jasmine-node .

The test fails, which makes sense since you've not written any code yet.

The failure looks like this:

    1) Hello World says hello world with no name
       Message:
          Expected undefined to equal 'Hello, World!'.

There's more, but this is the most important part.

Take a look at that first line:

    1) Hello World says hello world with no name

Now look at the test definition again:

    it('says hello world with no name', function() {
      // ... more code here ...
    });

The text 'says hello world with no name' is repeated.
This is how you know which test failed.

The failure message explains what is wrong:

    Expected undefined to equal 'Hello, World!'.

This comes from the part of the test definition that says "expect":

    expect(helloWorld.hello('')).toEqual('Hello, World!');

It's comparing two values. It is calling

    helloWorld.hello('')

and comparing the result to a hard-coded string.

    'Hello, World!'.

So if you look at the failure message again, the hello function
is returning undefined.

Try changing the function in hello-world.js so that it says

    HelloWorld.prototype.hello = function(input) {
        return "chocolate";
    };

Then run the tests again from the command-line:

    jasmine-node .

Notice how it changes the failure message.

Then change the implementation in hello-world.js again, this time to make the test pass.

Once the test is passing, look at the second test in hello-world.spec.js. It looks like this:

    xit('says hello to bob', function() {
      expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
    });

This test starts with `xit` instead of `it`.
That means that when jasmine-node runs the tests,
the test will be skipped.

Change the test so that it starts with `it`,
and run the tests again.

Make the test pass, and then do the same with the third test.

When you are done, submit your solution to exercism:

    exercism submit hello-world.js
