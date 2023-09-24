import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = ({asset}) => {

    // here accecss the assescontext gold
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
            <p>Also has gift: {gift}</p>
        </div>
    );
};

export default Special;