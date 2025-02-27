// Write a program to reverse and print all the elements of an array.
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);
}
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);