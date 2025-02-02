import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Home.css";

export function Home(): JSX.Element {

    // Local State:
    // const arr = useState<number>(0); // 0 = Initial value.
    // const counter = arr[0]; // The state (data) we need.
    // const setCounter = arr[1]; // Function for changing the data and causing re-render the component.

    // Same using Array Destructuring Assignment:
    const [counter, setCounter] = useState<number>(0); // 0 = Initial value.

    function handleClick(event: SyntheticEvent): void {
        setCounter(counter + 1); // 1. Changes the counter, 2. Rerender the component.
        console.log(`You've clicked me ${counter} times.`);
    }

    // ------------------------------------------------------
    const [textToSearch, setTextToSearch] = useState<string>("");

    // function handleChange(event: SyntheticEvent): void {
    //     const value = (event.target as HTMLInputElement).value;
    //     setTextToSearch(value);
    // }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        setTextToSearch(value);
    }

    function search(): void {
        alert("Searching for " + textToSearch);
    }

    function clear(): void {
        setTextToSearch("");
    }

    // ------------------------------------------

    const [color, setColor] = useState<string>("");

    function handleColor(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        setColor(value);
    }

    return (
        <div className="Home">

            <button onClick={handleClick}>Click Me</button>
            <span>You've clicked me {counter} times.</span>
            <br />

            {/* Two-Way Binding */}
            <label>Search: </label>
            <input type="search" onChange={handleChange} value={textToSearch} />
            <button onClick={search}>🔍</button>
            <button onClick={clear}>❌</button>
            <span>Searching for {textToSearch}</span>
            <br />

            <label>Color: </label>
            <input type="text" onChange={handleColor} value={color} />

            {/* A. Display the name of the color entered. */}
            {/* B. Paint the span's background color in that color */}
            <span style={{ backgroundColor: color }}>Color: {color}</span>

        </div>
    );
}
