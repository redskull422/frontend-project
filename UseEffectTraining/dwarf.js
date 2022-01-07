const dwarfURL = "https://www.dnd5eapi.co/api/races/dwarf"
function Dwarf(){
    const[dwarf, setDwarf]=React.useState({})
    React.useEffect(()=>{
        fetch(dwarfURL).then(response=>response.json()).then(json => setDwarf(json))
    },[])
    return(
        <>
            <ul>
                <li><h4>Race : </h4>{dwarf.name}</li>
                <li><h4>Speed : </h4> {dwarf.speed}</li>
                <li><h4>Age : </h4>{dwarf.age}</li>
                <li><h4>Alignment : </h4>{dwarf.alignment}</li>
            </ul>
        </>

    )
}