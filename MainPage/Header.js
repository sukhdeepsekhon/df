// Import React and any necessary modules
import React from "react";
import Image from "next/image";
import Logo from "@/MainPage/Images/Logo.svg"
import '@/MainPage/Stylesheet/HeaderStyle.css'; // Regular CSS file
import styles from '@/MainPage/Stylesheet/HeaderStyle.css';



import Link from 'next/link';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState); 
  }
};
  // Handle mouse enter to open the menu
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Handle mouse leave to close the menu
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
// Functional component declaration
const Header = () => {
  // Component logic here (hooks, variables, etc.)

  

 

  return (
    <div>
      {
        <div className="MainBody">
        <div className="NavBar">
          <div className="Left">
          <Image src={Logo}  className="Logo" width={100} height={100}/>
            <p className="LogoText">Cavers</p>
            <div className="Mid">
              <ul>
                <li><a className="active" href="default.html">Exam</a></li>
                <li><a href="news.html">Test Series</a></li>
                <li><a href="contact.html">Pricing</a></li>
                <li><a href="about.html">Shop</a></li>
              </ul>
            </div>
          </div>
  
          <div className="Right">
            <button className="Login">
                <a className="LoginText" href="/Login"> Login</a></button>
            <button className="SFF">
              <a className="SFFText" href="">Start for free</a>
            </button>
            
          </div>
        </div>
        </div>
      }
    </div>


  );
};

export default Header;
