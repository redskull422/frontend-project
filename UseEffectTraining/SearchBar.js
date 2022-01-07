function SearchBar(){
    const [searchValue,setSearchValue]=React.useState("Search...")
    const changeHandler=(event)=>{
        const dwarf = document.querySelector("#dwarf")
        const gnome = document.querySelector("#gnome")
        const elf = document.querySelector("#elves")
        const dragon = document.querySelector("#dragonborn")
        const human = document.querySelector("#custom")
        setSearchValue(event.target.value)
        
        if(event.target.value === "elf"){
            dwarf.style.display="none"
            gnome.style.display = "none"
            dragon.style.display ="none"
            human.style.display ="none"
        }else if(event.target.value ==="gnome"){
            dwarf.style.display ="none"
            elf.style.display ="none"
            dragon.style.display ="none"
            human.style.display ="none"
        }else if(event.target.value ==="dwarf"){
            elf.style.display ="none"
            gnome.style.display = "none"
            dragon.style.display ="none"
            human.style.display ="none"
        }else if(event.target.value ==="dragon"){
            elf.style.display ="none"
            gnome.style.display = "none"
            dwarf.style.display = "none"
            human.style.display ="none"
        }else{
            elf.style.display ="flex"
            gnome.style.display ="flex"
            dwarf.style.display = "flex"
            dragon.style.display = "flex"   
            human.style.display ="flex"
        }

    }
    return(
        <>
            <input value={searchValue} type="Search" onChange={changeHandler}></input>      
        </>
    )
}