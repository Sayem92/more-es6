// Difference for..in and for..of :

// Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

// for..in iterates over all enumerable property keys of an object.

//  for..of iterates over the values of an iterable object.


var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}