import React from 'react';
import CardDown from './card';

const CardContainerDown = () => {
    return (
        <div className="snap-x snap-mandatory overflow-auto scrollbar-hide
        flex flex-nowrap my-4 gap-7 mx-[22px]
        ">
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
            <CardDown />
        </div>
    );
};

export default CardContainerDown;

CardDown.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};