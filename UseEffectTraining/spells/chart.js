function Chart(){
    const spellURL = 'https://www.dnd5eapi.co/api/spells/acid-splash'
    const spell2URL = 'https://www.dnd5eapi.co/api/spells/aid'
    const[spells,setSpells]=React.useState({})
    const[spell2,setSpell2]=React.useState({})
    const thGenrator = (values) => {return(<th>{values}</th>)}
    React.useEffect(()=>{
        fetch(spellURL).then(response=>response.json()).then(json => setSpells(json))
    },[])
    React.useEffect(()=>{
        fetch(spell2URL).then(response =>response.json()).then(json=>setSpell2(json))
    },[])
    let thTitle = Object.keys(spells)
    return(
        <table>
        <thead>
            <tr>
                {thTitle.map(thGenrator)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{spells.index}</td>
                <td>{spells.name}</td>
                <td>{spells.desc}</td>
                <td>{spells.range}</td>
                <td>{spells.components}</td>
                <td>{spells.ritual}</td>
                <td>{spells.duration}</td>
                <td>{spells.concentration}</td>
                <td>{spells.casting_time}</td>
                <td> {spells.level}</td>
            </tr>
            <tr>
                <td>{spell2.index}</td>
                <td>{spell2.name}</td>
                <td>{spell2.desc}</td>
                <td>{spell2.range}</td>
                <td>{spell2.components}</td>
                <td>{spell2.ritual}</td>
                <td>{spell2.duration}</td>
                <td>{spell2.concentration}</td>
                <td>{spell2.casting_time}</td>
                <td>{spell2.level}</td>

            </tr>
        </tbody>
    </table>
)
}