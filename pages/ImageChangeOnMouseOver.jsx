import React, { useRef } from 'react';
// gives react app a way to work with an element directly in the DOM
// anything we put in folder titled static will be available to our app
// with the /static reference
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver.jsx';


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="../static/speakers/bw/Speaker-187.jpg" secondaryImg="../static/speakers/Speaker-187.jpg" alt=""/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="../static/speakers/bw/Speaker-1124.jpg" secondaryImg="../static/speakers/Speaker-1124.jpg" alt=""/>
        </div>
    )
};

export default ImageChangeOnMouseOver;













// useRef returns a mutable ref object whose 
// .current property is initialized to the passed argument (initialValue). 
// The returned object will persist for the full lifetime of the component.
// Note that useRef() is useful for more than the ref attribute. 
// It’s handy for keeping any mutable value around 
// similar to how you’d use instance fields in classes.