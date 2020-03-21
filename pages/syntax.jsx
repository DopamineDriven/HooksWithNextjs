import React, { useEffect, useState } from 'react';

const Syntax = () => {
    // first parameter must be a function
    // using arrow syntax, create function reference
    // return from this function another function
    // second paramter is just an array that returns dependencies for the component
    // if array is empty, then useEffect is only called once when component first mounted
    // if want it called again before component is unmounted, the array must contain all
    // values that will change. That is, the values that the rendered output is dependent on
    // These values could be things like the true or false values of a checkbox field on the screen
    // if that changes (truthy falsy), it causes a re-render of the component 
    // and the function and useEffect is called again  

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        console.log('in useEffect')
        return () => {
            console.log('in useEffect Cleanup')
        }
    }, [checkBoxValue])

    return (
        <div></div>
    )

};

export default Syntax;