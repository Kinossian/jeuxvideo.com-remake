import Button from "@/components/link_button";
import { BsArrowRight } from 'react-icons/bs';

const ButtonContainer = () => {
    return (
        <div className='ml-6 my-3 flex max-w-screen-xl overflow-scroll scrollbar-hide mb-8'>
            <Button className="bg-blue-500 border-none text-black font-bold hover:text-black hover:bg-blue-400" content="Les nouveautés du PS PLUS " icon={< BsArrowRight className="ml-2" />} />
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