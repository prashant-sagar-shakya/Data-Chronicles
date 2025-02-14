// switch statement in any programming language is a conditional statement which is used to execute a block of code if a large no. of conditions with a same variable.

const superHero = "Spiderman";
switch (superHero) {
    // Case checking is done with strict equality === i.e, value as well as type also.
    case "Spiderman": console.log("Spider-Man");
        break;
    case "Batman": console.log("Batman");
        break;
    case "Superman": console.log("Superman");
        break;
    default: console.log("I don't know");
}

// After every case the break statement is used to break the switch statement, otherwise all the next cases will be executed.
// (optional) In case of no switch matching, a default case is written to be execute.