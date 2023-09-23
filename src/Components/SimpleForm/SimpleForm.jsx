

const SimpleForm = () => {

    const handleSubmit = e =>{
        
        // for this line the page will not reload
        e.preventDefault();
        console.log('form submited');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;