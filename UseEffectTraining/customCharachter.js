function CharachterBuild (){
    const [show,setShow]=React.useState(false)
    const toggle = ()=>{setShow(!show)}
    return(
        <div>
                {show &&<PopUp/>}
                <button  onClick={()=>setShow(toggle)}>Build you Own Charachter</button>
        </div>
        
        )
    }
    function PopUp(){
        const [name, setName]=React.useState("")
        const [Age , setAge]=React.useState("")
        const [Alignment,setAlignment]=React.useState("")
        const submit=(e)=>{
            e.preventDefault();
        }
        const nameHandler=(e)=>{
            setName(e.target.value)
        }
        const ageHandler=(e)=>{
            setAge(e.target.value)
        }
        const alignHandler=(e)=>{
            setAlignment(e.target.value)
        }
        return(
            <div className="popupbox">
                <div>
                    <ul>
                        <li><h4>Race : </h4>Human</li>
                        <li><h4>Name : </h4>{name}</li>
                        <li><h4>Age : </h4>{Age}</li>
                        <li><h4>Speed : </h4>25</li>
                        <li><h4>Alignment : </h4>{Alignment}</li>
                    </ul>
            </div>
                <form onSubmit={submit} className="animate__animated animate__backInDown" >
                    <input className="popups" onChange={nameHandler} placeholder = "Name"/>
                    <input className="popups" onChange={ageHandler} placeholder = "Age"></input>
                    <input className="popups" onChange={alignHandler} placeholder = "Alignment"></input>
                    <input className="popups submit" onClick={()=>toggle} type="submit"></input>
                </form>
            </div>
        )
    } 
    