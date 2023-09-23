import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e =>{
         // for this line the page will not reload
         e.preventDefault();
         console.log(name, email, password);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    // here input email value will be set 
    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    return (
        <div>
            <h4>State Full Form</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" id="name" placeholder="Name..." />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Email..." />
                <br />
                <input onChange={handlePasswordChange} type="password" name="" id="pass" placeholder="Password..." />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default StatefulForm;