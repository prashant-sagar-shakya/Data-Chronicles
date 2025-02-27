/**
 * Definition of sleep: Sleep is a mechanism which allows a program to pause its 
 * execution for a certain amount of time. It is generally used in programs that 
 * need to wait for a certain condition to be met before continuing execution.
 */
function sleep(milliseconds) {
    console.log(`Sleeping for ${milliseconds/1000} seconds...`);
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    console.log('Waking up!');
}

console.log('Before sleep');
sleep(2000);
console.log('After sleep');