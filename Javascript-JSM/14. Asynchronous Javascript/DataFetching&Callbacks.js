// Data Fetching

// API (Application Programming Interface): A set of protocols and routines for building application programs and services.

const fetchUser = (username, callback) => {
    console.log("Fetching user...");
    setTimeout(() => {
        console.log("[Now we've the user]");
        callback({ username });
    }, 2000);
};

// Callback function is something that is passed as an argument to another function, after another function has finished its work.

// Let's assume we are working on a social media platform, once the user profile fetched, now we need to fetch the posts of the user.

const fetchUserPosts = (username, callback) => {
    setTimeout(() => {
        console.log(`[Now we've the Posts for ${username}]`);
        callback(["Post 1", "Post 2"]);
    }, 2000);
};
// {username : "John"}

// Let's fetch post details of the user
const fetchPostDetails = (post, callback) => {
    setTimeout(() => {
        console.log(`[Now we've the Posts Details for the Post ${post}]`);
        callback("Details...");
    }, 2000);
};

// The hierarchy of the callbacks like here is known as callback, it decreses the readability of the code and not maintainable. which is not a good practice.
// For this reason, we can use Promise.
fetchUser("John", (user) => {
    console.log(`Your name is: ${user.username}`);
    // Accesing the fetchUserPosts function
    fetchUserPosts(user.username, (posts) => {
        console.log(`Your posts are : ${posts}`);
        // Acessing the fetchPostDetails function
        fetchPostDetails(posts[0], (details) => {
            console.log(`Your post details are : ${details}`);
        });
    });
});

// We can pass in a callback function to make javascript asynchronous.
