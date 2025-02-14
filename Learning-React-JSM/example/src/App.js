import "./App.css";
import { useState, useEffect } from "react";

// const Person = (props) => {
//     return (
//         <>
//             <h1>Name: {props.name}</h1>
//             <h2>Last Name: {props.lastName}</h2>
//             <h2>Age: {props.age}</h2>
//         </>
//     );
// };

const App = () => {
    const [counter, setcounter] = useState(0);

    useEffect(() => {
        alert(`You changed the counter to ${counter}`);
    }, [counter]);
    // [] is dependency array, it means it will run only once

    // const name = "Prashant";
    // const isNameShowing = true;
    // return (
    //     <div className="App">
    //         <h1> Hello, {isNameShowing ? name : "World"}</h1>
    //         {name ? (
    //             <>
    //                 <h1>{name}</h1>
    //             </>
    //         ) : (
    //             <>
    //                 <h1>test</h1>
    //                 <h2>There is no name</h2>
    //             </>
    //         )}
    //     </div>
    // );

    // return (
    //     <div className="App">
    //         <Person name={"John"} lastName={"Shakya"} age={25} />
    //         <Person name={"Mary"} lastName={"Doe"} age={22} />
    //     </div>
    // );

    return (
        <div className="App">
            <button onClick={() => setcounter(counter - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>+</button>
        </div>
    );
};

export default App;
