import {useState} from "react"

function SignUp( {setToken} ){

    const [form, setForm]=useState({
        username:"",
        password:"",
    })

    const [error, setError] = useState(null);


    const submit = async(event)=> {
        event.preventDefault()
       
       // Form validation 
       
       if (form.username.length < 8){
        setError("Username must be at least 8 characters. Please try again!");
        return; 
       }
       
       if (form.password.length < 8){
        setError("Password must be at least 8 characters long.");
        return; 
       }
    
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },

                    body: JSON.stringify({
                        username: form.username,
                        password:form.password, 
                    }) 
                }
            );

            const result = await response.json();
            console.log(result);

            if (result.token) {
                setToken(result.token);
            }

        } catch (error) {
            setError(error.message);
        }
    }

    const setChange = (event)=>{
        const newObj = {...form};
        newObj[event.target.name]= event.target.value; 
        setForm(newObj)
    }
    
    return (
        <>
            <h2>Sign Up</h2>
            <p>Username and Password must be at least 8 characters in length</p>
            {error && <p>{error}</p>}
            <form onSubmit = {submit}>
                <input type="text" name={"username"} onChange={setChange} placeholder={"enter username...."}  />
                <br></br>
                <input type="password" name={"password"} onChange={setChange} placeholder={"enter password..."}/>
                <input id={"submit"} type="submit" value={"Submit"}/>
            </form>
        </>
    )
}


export default SignUp; 