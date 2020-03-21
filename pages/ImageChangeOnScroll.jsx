import React from 'react';
// gives react app a way to work with an element directly in the DOM
// anything we put in folder titled static will be available to our app
// with the /static reference
import ImageToggleOnScroll from '../src/ImageToggleOnScroll.jsx';

// speakerId with map
const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1124, 187, 823, 1269, 1530].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleOnScroll
                            primaryImg={`../static/speakers/bw/Speaker-${speakerId}.jpg`}
                            secondaryImg={`../static/speakers/Speaker-${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default ImageChangeOnScroll;




