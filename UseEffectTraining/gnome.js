let gnomeURL = "https://www.dnd5eapi.co/api/races/gnome"
function Gnome () {
    const [gnome,setGnome]=React.useState({})
    React.useEffect(()=>{
        fetch(gnomeURL).then(response=>response.json()).then(json => setGnome(json))
    },[])
    return(
        <ul>
            <li><h4>Race : </h4>{gnome.name}</li>
            <li><h4>Speed : </h4>{gnome.speed}</li>
            <li><h4>Alignment : </h4>{gnome.alignment}</li>
        </ul>
    )
}
