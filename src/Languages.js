import { useState,useRef} from "react";

function Languages(){
    const rName = useRef();
    const [name,setName] = useState("");
    const [python,setPython] = useState(false);
    const [java,setJava] = useState(false);
    const [javascript,setJavascript] = useState(false);
    const [msg,setMsg] = useState("");

    const hName = (event) => {setName(event.target.value);}
    const hPython = (event) =>{setPython(!python);}
    const hJava = (event) => {setJava(!java);}
    const hJavascript = (event) =>{setJavascript(!javascript);}

    const show = (event) => {
        event.preventDefault();

        if(name === ""){
            alert("u did not enter name");
            setMsg("");
            rName.current.focus();
            return;
        }
        if(name.trim() === ""){
            alert("u did not enter name");
            setMsg("");
            rName.current.focus();
            return;
        }
        if(! name.match(/^[A-Za-z ]+$/)){
            alert("Name should contain only alphabets");
            setName("");
            setMsg("");
            rName.current.focus();
            return;
        }

        let lang = "";
        if (python)     lang+="Python";
        if (java)       lang+="Java";
        if (javascript)     lang+="Javascript";

        if (lang === ""){
            lang ="Then learn something";
        }

        let ans = " Name = " + name + " Language = " + lang;
        setMsg(ans);

    }

    return(
        <>
        
        <center>
        <div class="div">
            <h1>Languages App</h1>
            <form onSubmit={show}>
                <input type="text" placeholder="Enter Your Name" onChange={hName} ref={rName} value={name}/>
                <br/>
                <input type="checkbox" value="py" onChange={hPython}/>Python
                <br/>
                <input type="checkbox" value="java" onChange={hJava}/>Java
                <br/>
                <input type="checkbox" value="js" onChange={hJavascript}/>Javascript
                <br/><br/>
                <input type="submit"/>
            </form>
            <h2>{msg}</h2>
        </div>
        </center>
        
        </>
    );
}

export default Languages;