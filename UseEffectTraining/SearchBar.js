function SearchBar(){
    const [searchValue,setSearchValue]=React.useState("Search...")
    const shouldDisplayButton = searchValue.length>0;
    const handleClick = ()=>{
        setSearchValue ("")
    }
    const changeHandler=(event)=>{
        const dwarf = document.querySelector("#dwarf")
        const gnome = document.querySelector("#gnome")
        const elf = document.querySelector("#elves")
        const dragon = document.querySelector("#dragonBorn")
        setSearchValue(event.target.value)
        if(event.target.value === "elf"){
            dwarf.style.display="none"
            gnome.style.display = "none"
            dragon.style.display ="none"
        }else if(event.target.value ==="gnome"){
            dwarf.style.display ="none"
            elf.style.display ="none"
            dragon.style.display ="none"
        }else if(event.target.value ==="dwarf"){
            elf.style.display ="none"
            gnome.style.display = "none"
            dragon.style.display ="none"
        }else if(event.target.value ==="dragon"){
            elf.style.display ="none"
            gnome.style.display = "none"
            dwarf.style.display = "none"
        }else{
            elf.style.display ="flex"
            gnome.style.display ="flex"
            dwarf.style.display = "flex"
            dragon.style.display = "flex"

        }
    }
    return(
        <>
            <input value={searchValue} onChange={changeHandler}></input>
            {shouldDisplayButton && <button onClick={handleClick}>X</button>}     
            
        </>
    )
}