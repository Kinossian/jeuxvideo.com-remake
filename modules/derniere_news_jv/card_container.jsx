import React from 'react';
import CardDerniereJV from './card';

const CardContainerDerniereNews = () => {
    return (
        <div className='grid grid-cols-[350px_minmax(350px,_1fr)_350px] grid-rows-4 gap-4 mt-4 overflow-scroll pb-10'>
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
            <CardDerniereJV />
        </div>
    );
};

export default CardContainerDerniereNews;