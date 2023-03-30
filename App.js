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
                img="./images/felix.png"
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
                img="./images/mr-whiskerson.png" 
                name="Ze Zo"
                phone="(212) 555-1234"
                email="Zezo@catnap.meow"
            />
        </div>
        </div>
    )
}

export default App