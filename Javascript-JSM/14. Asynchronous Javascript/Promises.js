// Promises: They are objects that either return the successful fetched value or an error.

const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("[Now we've the user]");
            // reject("User not found");
            resolve({ username }); // resolve is acting as callback
        }, 2000);
    });
};

const fetchUserPosts = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[Now we've the Posts for ${username}]`);
            resolve(["Post 1", "Post 2"]);
        }, 2000);
    });
};

const fetchPostDetails = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[Now we've the Posts Details for the Post ${post}]`);
            resolve("Details...");
        }, 2000);
    });
};

// Calling a promise
// fetchUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error));

// Call using promises:

// fetchUser("John")
//     .then((user) => fetchUserPosts(user.username))
//     .then((posts) => fetchPostDetails(posts[0]))
//     .then((details) => console.log(`Your post details are : ${details}`));

// Call using async and await:

const displayData = async () => {
    const user = await fetchUser("John");
    const posts = await fetchUserPosts(user.username);
    const details = await fetchPostDetails(posts[0]);
    console.log(details);
}
displayData();

// Let's study Async Await in Promises
// ASYNC FUNCTIONS RETURNS PROMISES !!!

// ASYNC => AWAIT

// The async keyword is used to make a function return a promise.
// The await keyword is used to wait for the promise to resolve/ return before continuing.
const fetchNumber = async () => {
    return 25;
};

const consoleFetchNumber = async () => {
    const number = await fetchNumber();
    console.log(number);
};
consoleFetchNumber();
