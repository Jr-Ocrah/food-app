import menu from "./assets/menu.png"
import lang from "./assets/lang.png"
import "./Header.css"


function Header () {
    return (
        <nav>
            
            <div id="top">
            <img id="menu" src = {menu} alt ="hamburger icon"/>
            <p id = "food">Foodjoint</p>
            <img id="lang" src = {lang} alt = "language icon"/>

            </div>
            
        </nav>
    )

    
}

export default Header;