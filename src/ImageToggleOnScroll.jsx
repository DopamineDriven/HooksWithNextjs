import React, { useRef, useEffect, useState } from 'react';
// import {primaryImg, secondaryImg } from '../pages/imageChangeOnMouseOver'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    
    const imageRef = useRef(null);
    // not show image until useEffect is called, then show it 
    const [isLoading, setIsLoading] = useState(true);
    // first parameter is function that gets executed when component mounts
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        // call to state setter setInView to make first image load colorized on screen before scroller is toggled
        // calls isInView when component first mounts (upon page loading)
        setInView(isInView());
        // setIsLoading state to false
        setIsLoading(false);
        // return from this function another function that removes the listener
        return (() => {
            window.removeEventListener("scroll", scrollHandler)
        })
        // when isLoading changes from true to false, we want component to rerender
        // add isLoading to dependency array of useEffect (second parameter) to achieve this
    }, [isLoading]);
    // useState var to track whether the image is completely in the browser showing window or not

    const [inView, setInView] = useState(false);

    // can use imageRef = useRef(null) to determine where the image is with respect to scroller
    // isInView returns whether image is showing in scrollable area
    // getBoundingClientRect() combined with the size of the window does the trick for us

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        } 
        return false
    };

    // scrollHandler sets inView state based on whether the image is actually in view
    const scrollHandler = () => {
        setInView(() => {
            return isInView()
        })
    };

    // set up source component to show colorized image when in view, black and white one when not
    // this is achieved via a ternary conditional 
    // secondary image is colorized, primary is black and white
    // if image in view, then (?) color image, else (:) black and white image

    // add simple check to return, which renders component, and if isLoading is true, don't render anything
    // since we can't check image size before pulled from internet, hardcode image width and height
    return isLoading ? null : (
        <img 
            src={inView ? secondaryImg : primaryImg} 
            alt="" 
            ref={imageRef}
            width="200"
            height="200"
        />
    )
}

export default ImageToggleOnScroll;