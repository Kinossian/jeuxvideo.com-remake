import React from 'react';
import CardUp from './card';

const CardContainerUp = () => {
    return (
        <div className="snap-x snap-mandatory overflow-auto flex flex-nowrap scrollbar-hide gap-7 lg:mx-auto">
            <CardUp />
            <CardUp />
            <CardUp />
            <CardUp />
        </div>
    );
};

export default CardContainerUp;

CardUp.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};