import react, { useEffect, useState } from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



const Forms =()=>{

    const [details , setDetail] = useState({
        name:'',
        address:'',
        phone:'',
        clgName:'',
        link:'',
    });

    const [user,setuser] = useState({
        phone:'',
        password:'',

    });
    let x = {};
    const onLogin = (e) =>{
        e.preventDefault();
        alert("Login successfully");
    
        axios.post('http://localhost:5000/messes/login',user)
         .then(res =>console.log(res.data))
         .catch(err=>console.log(err.data))
        }

    const onSub = (e)=>{
        e.preventDefault();
        alert("Form submitted successfully");

        const mess = {
            name:details.name,
            address : details.address,
            phone : details.phone,
            clgName : details.clgName,
            link:details.link,
        }
        console.log(mess);

        axios.post('http://localhost:5000/messes/register',mess)
         .then(res => console.log(res.data));
         
       setDetail({
       name:'',
       address:'',
       phone:'',
       clgName:'',
       password:'',
        link : '',
    }
       );
    // axios.get('http://localhost:5000/messes/')
    // .then(res => console.log(res.data));
    }

    const onInp = (e)=>{
        const {name , value} = e.target;
        //prevVal can be anything like abc xyz it stores the previous values of details
        setDetail((prevVal)=>{
            //here we are returning the obj like prevVal and member variable name
            return{
                ...prevVal,
                [name] : value,
        };

    });
    }

 const onInput = (e)=>{
    const {name , value} = e.target;
    console.log(user);
    //prevVal can be anything like abc xyz it stores the previous values of details
    setuser((prevval)=>{
        //here we are returning the obj like prevVal and member variable name
        return{
            ...prevval,
            [name] : value,
    };

});
 }
const login=()=>{
    setformstyle1({display:"block"});
    setformstyle2({display:"none"});
    setstyleLogin({left:0});

}

const register=()=>{
    setformstyle1({display:"none"});
    setformstyle2({display:"block"});
    setstyleLogin({left:140});
}

const [formstyle1 , setformstyle1] = useState({display:"block"});
const [formstyle2 , setformstyle2] = useState({display:"none"});

const [styleLogin , setstyleLogin] = useState({left:0});

    return(

        <>
            <div className = "Maindiv" >
            <form className="loginForm" style={formstyle1}>
                <div class="but" >
                <div className="butBefore" style={styleLogin}></div>
                    <button onClick={login}>Login</button>
                    <button onClick={register}>Register</button>
                </div>
                <div className="inpfield">
                    <input type="text"
                        value={user.phone}
                        placeholder="Enter Your UserName"
                         onChange={onInput} 
                         name='phone' required />
                    <input type="password"
                        value={user.password}
                        placeholder="Enter Your password"
                         onChange={onInput}
                         name='password'  required />
                    </div>
                    <button onClick={onLogin} className="Submit">Submit</button>
                    <div>
                    </div>
                </form>
                <form className="registerForm" style={formstyle2}>
                <div class="but">
                    <div className="butBefore" style={styleLogin}></div>
                    <button onClick={login}>Login</button>
                    <button onClick={register}>Register</button>
                </div>
                <div className="inpfield">
                    <input type="text"
                        value={details.name}
                        placeholder="Enter Your name"
                         onChange={onInp} 
                         name='name' required />
                    <input type="text"
                        value={details.address}
                        placeholder="Enter Your address"
                         onChange={onInp}
                         name='address'  required />
                    <input type="text"
                        value={details.phone}
                        placeholder="Enter Your phone number"
                         onChange={onInp}
                         name = 'phone'   required/>
                    
                    <input type="text"
                        value={details.clgName}
                        placeholder="Enter the name of your college"
                         onChange={onInp} 
                         name = 'clgName' required/>
                     <input type="text"
                        value={details.link}
                        placeholder="Paste the link of your photo"
                         onChange={onInp} 
                         name = 'link' required/>
                    </div>
                    
                    <button onClick={onSub} className="Submit">Submit</button>
                    <div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Forms;