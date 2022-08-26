// 1. Foreach-------------------------------------------

// Foreach takes a callback function and run that callback function on each element of array one by one.

// Basically forEach works as a traditional for loop looping over the array and providing you array elements to do operations on them.

// 2. Filter-----------------------------------------

// The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.

// Also take notice filter does not update the existing array it will return a new filtered array every time.

// 3. Map----------------------------------------------

// Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.

// Map ran through every element of the array, multiplied it to 10 and returned the element which will be going to store inside our resulting array.

// Like filter, map also returns an array. The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array.

// 4. Reduce---------------------------------------------

// So that is how reduce works it reduces the array into one single value and returns it upon completion.