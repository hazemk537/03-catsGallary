import React from "react"
import Banner from "./Banner"
import Contact from "./Contact"

function App() {
    return (
        <div className="body">
            <Banner/>
        <div className="contacts">
            
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Ze Zo"
                phone="(212) 555-1234"
                email="Zezo@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Me Zo"
                phone="(212) 555-2345"
                email="Mezo@me.com"
            />
            <Contact 
                img="./images/felix.webp"
                name="Fe Zo"
                phone="(212) 555-4567"
                email="Fezo@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Si Zo"
                phone="(0800) CAT KING"
                email="Sizo@scrimba.com"
            />
             <Contact 
                img="images/gozo.webp" 
                name="Go Zo"
                phone="(212) 345-1244"
                email="gozo@catnap.meow"
            />
             <Contact 
                img="images/rozo.jpeg" 
                name="Re Zo"
                phone="(215) 535-1204"
                email="gezo@catnap.meow"
            />
             
             <Contact 
                img="images/she zo.webp" 
                name="Sh Zo"
                phone="(232) 595-0234"
                email="shezo@catnap.meow"
            />
             <Contact 
                img="images/wizo.webp" 
                name="Wi Zo"
                phone="(202) 545-1234"
                email="wizo@catnap.meow"
            />
        </div>
        </div>
    )
}

export default App