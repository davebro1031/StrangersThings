import React from "react";

export default function Navbar(){
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




