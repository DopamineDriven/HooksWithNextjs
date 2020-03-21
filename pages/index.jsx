// TWO-WAY DATA BINDING EXAMPLE

import React, { useState } from 'react';

// declare hooks in main body of function before return
// typically with useState we track a single value or string
const InputElement = () => {
    //use javascript destructuring syntax [inputText, setInputText]
    // inputText becomes a read-only function whose value can only be set
    // using setInputText function
    const [inputText, setInputText] = useState("")
    // creating history-list array
    // note: hr tag defines thematic break in html page
    const [historyList, setHistoryList] = useState([]);

    // onChange gets fired on every keystroke
    // captures text val as user types in field
    // useState hook
    return <div><input 
        onChange={(e) => {
            setInputText(e.target.value)
            setHistoryList([...historyList, e.target.value])
        }}
        placeholder="Enter Some Text" /><br/>
        {inputText}
        <hr/><br/>
        <ul>
            {historyList.map((rec) => {
                return <div>{rec}</div>
            })}
        </ul>
    </div>
}

// enter npm run dev to launch, no reactDOM.render required
export default InputElement;