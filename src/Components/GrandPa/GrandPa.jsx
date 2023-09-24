import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

const AssetContext = createContext('gold');

const GrandPa = () => {

    const asset = 'diamond';

    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandPa;


// 1. create a context and export it
// 2. add provider for the context with a value