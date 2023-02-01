import React from 'react';
import CardDerniereJV from './card';

const CardContainerDerniereNews = () => {
    return (
        <div className='grid grid-cols-[350px_minmax(350px,_1fr)_350px] grid-rows-4 gap-4 mt-4 overflow-scroll pb-10'>
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167457/1674572100-866-card.png" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167458/1674578692-8937-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167464/1674643068-6149-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167463/1674634485-8386-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167464/1674642587-1235-card.png" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167457/1674568847-6299-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167456/1674559641-5032-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167459/1674585176-9801-card.jpeg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167464/1674640144-4897-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167464/1674639725-5613-card.jpeg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167464/1674639148-8643-card.jpg" />
            <CardDerniereJV image="https://image.jeuxvideo.com/medias-xs/167457/1674566901-6542-card.jpg" />
        </div>
    );
};

export default CardContainerDerniereNews;