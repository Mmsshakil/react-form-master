import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

// here we create a context and we export it 
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandPa = () => {

    const asset = 'diamond';
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            
            <h2>GrandPa</h2>
            {/* here also sjow the money */}
            <p>Net Money: {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                {/* by this provider every child can access the value of gold */}
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;


// 1. create a context and export it
// 2. add provider for the context with a value
// 3. useContext to accecss the value in the api