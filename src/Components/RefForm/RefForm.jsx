import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // cursor will be on name automatically
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <h4>NameRef Form</h4>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Name..." />
                <br />
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email..." />
                <br />
                <input ref={passwordRef} type="text" name="password" placeholder="Password..." required />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default RefForm;