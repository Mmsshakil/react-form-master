import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // error handle for password
    const [error, setError] = useState('');

    const handleSubmit = e =>{
         // for this line the page will not reload
         e.preventDefault();
         console.log(name, email, password);

        //  here check the password
        if(password.length < 6){
            setError('Password must be more than 6');
        }
        else{
            setError('');
        }
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
                {/* required means without this item you can't submit */}
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Email..." required />
                <br />
                <input onChange={handlePasswordChange} type="password" name="" id="pass" placeholder="Password..." />
                <br />
                <input type="submit" value="Submit" />
                {
                    // here if the pas less than 6 it will show the setError
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;