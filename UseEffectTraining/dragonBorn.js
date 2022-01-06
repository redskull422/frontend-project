function DragonBorn(){
    let dragonURL = "https://www.dnd5eapi.co/api/races/dragonborn"
    const [dragonBorn,setDragonBorn]=React.useState({})
    React.useEffect(()=>{
        fetch(dragonURL).then(response=>response.json()).then(json => setDragonBorn(json))
    },[])
    return(
        <ul>
            <li><h4>Race : </h4>{dragonBorn.name}</li>
            <li><h4>Speed : </h4>{dragonBorn.speed}</li>
            <li><h4>Age : </h4>{dragonBorn.age}</li>
            <li><h4>Alignment : </h4>{dragonBorn.alignment}</li>
        </ul>
    )
}