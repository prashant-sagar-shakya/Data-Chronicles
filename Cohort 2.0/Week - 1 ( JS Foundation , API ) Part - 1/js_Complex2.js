// Write a program that prints the biggest number in an array.
function biggestNumber(arr) {
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) biggest = arr[i];
    }
    console.log(biggest);
}
biggestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);