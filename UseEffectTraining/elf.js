let elfURL = "https://www.dnd5eapi.co/api/races/elf"
function Elves () {
    const [elf,setElf]=React.useState({})
    React.useEffect(()=>{
        fetch(elfURL).then(response=>response.json()).then(json => setElf(json))
    },[])
    return(
        <ul>
            <li><h4>Race : </h4>{elf.name}</li>
            <li><h4>Speed : </h4>{elf.speed}</li>
            <li><h4>Age : </h4>{elf.age}</li>
            <li><h4>Alignment : </h4>{elf.alignment}</li>
        </ul>
    )
}
