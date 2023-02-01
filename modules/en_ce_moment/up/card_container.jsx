import React from 'react';
import CardUp from './card';

const CardContainerUp = () => {
    return (
        <div className="snap-x snap-mandatory overflow-auto flex flex-nowrap scrollbar-hide gap-7 lg:mx-auto">
            <CardUp image="https://image.jeuxvideo.com/medias-lg/167360/1673601192-9020-card.png" />
            <CardUp image="https://image.jeuxvideo.com/medias-crop-280-400/167456/1674557823-6810-card.jpg" />
            <CardUp image="https://image.jeuxvideo.com/medias-crop-280-400/167386/1673859284-1702-card.png" />
            <CardUp image="https://image.jeuxvideo.com/medias-crop-280-400/167457/1674571600-8209-card.png" />
        </div>
    );
};

export default CardContainerUp;

CardUp.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};