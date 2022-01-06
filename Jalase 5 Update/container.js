function Container (){
    return(
        <>
        <div className="header"><h1>Dungeon And Dragons</h1></div>
        <div className="container">
            <div className = "info-box animate__animated animate__backInLeft">
                <img className="Dwarf-image" src="Dwarf.png" />
                <div className="inside-box">
                    <h2>Information</h2>
                    <Dwarf/>
                </div>
            </div>
            <div className="info-box animate__animated animate__backInRight" >
                <img className="Dwarf-image" src="GnomeMale.jpg" />
                <div className = "inside-box ">
                    <h2>Information</h2>
                    <Gnome/>
                    <RenderApi/>
                </div>
            </div>
            <div className = "info-box animate__animated animate__backInLeft">
                <img className="Dwarf-image" src="Elves.jpg" />
                <div className="inside-box">
                    <h2>Information</h2>
                    <Elves/>
                </div>
            </div>
        </div>
        </>
    )
}