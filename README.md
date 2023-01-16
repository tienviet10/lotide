# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @viettran10/lotide`

**Require it:**

`const _ = require('@viettran10/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Get the first element in the given array.
* `tail(words)`: Get all elements in the given array except the first one.
* `middle(array)`: Find the middle element(s) in an array.
* `without(arr1, arr2)`: Return the first array excluding elements that are in array 2.
* `takeUntil(array, callback)`: Return an array with element from the start until the callback condition is false.
* `map(array, callback)`: Iterate over the array and return base on the callback condition.
* `flatten(arr)`: Converted nested arrays into 1 single array.
* `findKeyByValue(data, title)`: Finding a key in a object knowing its value
* `letterPositions(sentence)`: Return positions of all the letters in a sentence
* `findKey(data, cond)`: Find a key of an object given a callback condition
* `eqObjects(object1, object2)`: Return true when the objects are equalled and return false when they are not.
* `eqArrays(arr1, arr2)`:  Return true when the arrays are equalled and return false when they are not.
* `countOnly(allItems, itemsToCount)`: Given an array/data, count only the items that are in itemsToCount object.
* `countLetters(str)`: Return a number of appearance of a letter.
* `assertObjectsEqual(actual, expected)`: Console log assertion passed/failed when comparing two objects
* `assertEqual(actual, expected)`: Console log assertion passed/failed when comparing primitive values
* `assertArraysEqual(arr1, arr2)`: Console log assertion passed/failed when comparing two arrays