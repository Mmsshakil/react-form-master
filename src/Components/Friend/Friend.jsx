import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Friend = () => {
      // here accecss the assescontext gold
      const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Also has gift: {gift}</p>
        </div>
    );
};

export default Friend;