//========================= How Code Executed in JS ======================
// Execution context & calls

// JS runs your files in 2 phases
// First => Global Execution Context which is reffered to this(browser) -> Windows Object
// Second => Function Execution Context

// Mongoose => EVAL execution context (Property of global object)

// Mode of execution of js files :-
// In two phases :
// First => Memory Creation Phase (Creation Phase)
// Second => Execution Phase

// How values stored in these phases :-

// Memory Creation Phase
// Step 1: Global Execution Phase, also known as global envirnoment first of all it is allocated to this
// Step 2: Memory Creation Phase (Creation Phase or memory phase) first of all it takes name of all the defined variables and assign them undefined
// Where creation of variables takes undefined at initial stage, function takes function definition

// Execution Phase
// Step 3: Now the original values are assigned to the variables created in memory
// Function name creates its own new exexctional context which creates a new variable environoment and new execution thread and after all the processes it returned to its parent (global) executional context and the created executional context gets deleted

// Call Stacks :-
// => follows LIFO mechanismp
