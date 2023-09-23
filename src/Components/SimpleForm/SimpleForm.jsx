

const SimpleForm = () => {

    const handleSubmit = e =>{

        // for this line the page will not reload
        e.preventDefault();
        // this line will show the input value (e.target.name.value)
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        // console.log('form submited');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name..." />
                <br />
                <input type="email" name="email" id="" placeholder="Email..." />
                <br />
                <input type="text" name="phone" placeholder="Phone..." />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;