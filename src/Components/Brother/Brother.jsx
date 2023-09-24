import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brother = () => {

    // here only want to see the money that's why don't use the setmoney
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Money: {money}</p>
            
        </div>
    );
};

export default Brother;