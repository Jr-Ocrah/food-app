import food1 from "./assets/food1.jpg"
import food2 from "./assets/food2.jpg"
import food3 from "./assets/food3.jpg"
import food4 from "./assets/food4.jpg"
import food5 from "./assets/food5.jpg"
import leaf from "./assets/leaf.jpg"
import search from "./assets/search.PNG"
import star from "./assets/star.PNG"
import "./Main.css"

function Main () {
    const cards = [{
        name: "Potato Chips and Chicken",
        food: food1,
        rating: 4.7,
        money: "25.00"
    },  
    {name: "Beef Fried Rice",
    food: food2,
    rating: 4.9,
    money: "40.00"

    },
 {name: "Chicken Fried Rice",
food: food3,
rating: 5.0,
money: "40.00"

},

    {name: "Beef Jollof",
    food: food4,
    rating: 4.7,
    money: "40.00"
},

    { name: "Chicken Jollof",
    food: food5,
    rating: 4.2,
    money: "40.00"
}]
const cardComponents = cards.map((card) =>  
<div className="biggest"> 
            
<img className="foods" src = {card.food} alt = "first meal"/>



<div className="bigger">
<p className = "foodname">{card.name}</p>
<div className = "smallest">
<img id="star" src={star} alt="star" />
<p id="rate">{card.rating}</p>
</div>
<div className="big">
<img className = "leaf" src = {leaf} alt = "leaf"/>
<p className="Eatery">Green Leaf Eatery</p>
<div className="small">
<p className = "cedis"> GHC</p>
<p className = "money">{card.money}</p>

</div>

</div>

<p className="closed">Closed.</p>
<p className="opens">Opens @ 11:00 AM</p>
</div>
</div> )
    return (
        <main>
            <div id="con1">
            <input id = "search" type = "text" placeholder = "Search"></input>
            <img id = "sicon" src = {search} alt = "account" />
            </div>

            {cardComponents}
        
    
        </main>
       
        
    )
}
export default Main;