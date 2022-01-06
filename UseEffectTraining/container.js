function Container (){
    return(
        <>
            <img id="dragon" className="animate__animated animate__backInLeft" src="Landing.gif" />
        <div className="header">
            <h1>Dungeon And Dragons</h1>
            <div><SearchBar/></div>
        </div>
        <div className="container">
            <div className = "info-box animate__animated animate__backInLeft" id="dwarf">
                <img className="Dwarf-image" src="Dwarf.png" />
                <div className="inside-box">
                    <h2>Information</h2>
                    <Dwarf/>
                </div>
            </div>
            <div className="info-box animate__animated animate__backInRight" id="gnome" >
                <img className="Dwarf-image" src="GnomeMale.jpg" />
                <div className = "inside-box ">
                    <h2>Information</h2>
                    <Gnome/>
                    <RenderApi/>
                </div>
            </div>
            <div className = "info-box animate__animated animate__backInDown" id="elves">
                <img className="Dwarf-image" src="Elves.jpg" />
                <div className="inside-box">
                    <h2>Information</h2>
                    <Elves/>
                </div>
            </div>
            <div className = "info-box animate__animated animate__backInDown" id="dragon-born">
                <img className="Dwarf-image" src="DragonBorn.jpg" />
                <div className="inside-box">
                    <h2>Information</h2>
                    <DragonBorn/>
                </div>
            </div>
        </div>
        </>
    )
}