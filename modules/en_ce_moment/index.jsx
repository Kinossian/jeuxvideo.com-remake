import ButtonContainer from "./button_container";
import CardContainerDown from "./down/card_container";
import CardContainerUp from "./up/card_container";

const EnCeMoment = () => {
    return (
        <div className='bg-zinc-800'>
            <h3 className='pl-6 text-zinc-200 font-bold'>EN CE MOMENT</h3>
            <ButtonContainer />
            <div className="flex flex-col justify-center">
                <CardContainerUp />
                <CardContainerDown />
            </div>
        </div>
    );
};
export default EnCeMoment;
