import React from "react";
import Hamburger from "./Hamburger/Hamburger";
export default function Nav(){
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
  return(
    <div>
      <div className="navigation">
        <ul>
          <link>Home</link>
          <link>My listings</link>
          <link>My messages</link>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}/>
        </div>
      </div>
      
        
       
        </div>
      )
}


  

