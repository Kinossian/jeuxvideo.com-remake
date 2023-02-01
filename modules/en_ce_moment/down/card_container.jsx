import React from 'react';
import CardDown from './card';

const CardContainerDown = () => {
    return (
        <div className="snap-x snap-mandatory overflow-auto scrollbar-hide
        flex flex-nowrap my-4 gap-7 mx-[22px]
        ">
            <CardDown image="https://image.jeuxvideo.com/medias-md/167406/1674057249-6614-card.jpg" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167414/1674141037-9146-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167449/1674494889-925-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167390/1673896535-123-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167413/1674132126-2131-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167413/1674130982-7381-card.jpg" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167422/1674221125-542-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167458/1674577732-6416-card.png" />
            <CardDown image="https://image.jeuxvideo.com/medias-md/167328/1673282023-4438-card.png" />
        </div>
    );
};

export default CardContainerDown;

CardDown.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};