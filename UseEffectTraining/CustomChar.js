function CustomHandler(){
    const [name, setName]=React.useState()
    const [Age , setAge]=React.useState()
    const [Alignment,setAlignment]=React.useState()
    return(
        <ul>
            <li><h4>Race : </h4>Human</li>
            <li><h4>Name : </h4>{name}</li>
            <button onClick={()=>setName(prompt("EnterYourName"))}>Add Name</button>
            <li><h4>Age : </h4>{Age}</li>
            <button onClick={()=>setAge(prompt("Enter Your Age"))}>Add Age</button>
            <li><h4>Alignment : </h4>{Alignment}</li>
            <button onClick={()=>setAlignment(prompt("Enter Your Alignment"))}>Add Alignment</button>
        </ul>
    )
}