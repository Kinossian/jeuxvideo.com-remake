import Button from "@/components/link_button";

const ButtonContainer = () => {
    return (
        <div className='ml-6 my-3 flex max-w-screen-xl overflow-scroll scrollbar-hide'>
            <Button content="Soldes lego" />
            <Button content="Soldes écran pc" />
            <Button content="Soldes Smartphone" />
            <Button content="Soldes Nintendo Switch" />
            <Button content="PS+ jeux du mois" />
        </div>
    );
};

export default ButtonContainer;
Button.defaultProps = {
    href: 'https://www.jeuxvideo.com/'
};