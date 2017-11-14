# Diffie Hellman

Diffie-Hellman key exchange.

Alice and Bob use Diffie-Hellman key exchange to share secrets.  They
start with prime numbers, pick private keys, generate and share public
keys, and then generate a shared secret key.

## Step 0

The test program supplies prime numbers p and g.

## Step 1

Alice picks a private key, a, greater than 1 and less than p.  Bob does
the same to pick a private key b.

## Step 2

Alice calculates a public key A.

    A = g**a mod p

Using the same p and g, Bob similarly calculates a public key B from his
private key b.

## Step 3

Alice and Bob exchange public keys.  Alice calculates secret key s.

    s = B**a mod p

Bob calculates

    s = A**b mod p

The calculations produce the same result!  Alice and Bob now share
secret s.

## Setup

Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://exercism.io/languages/javascript/installation

## Requirements



## Making the test suite pass

Execute the tests with:

    jasmine <exercise-name>.spec.js

Replace `<exercise-name>` with the name of the current exercise. E.g., to
test the Hello World exercise:

    jasmine hello-world.spec.js

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Wikipedia, 1024 bit key from www.cryptopp.com/wiki. [http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange](http://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
