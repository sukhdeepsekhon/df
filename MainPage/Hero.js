// Import React and any necessary modules
import Image from "next/image";
import Girl from "@/MainPage/Images/Girl.svg";

import HeroStyle from "@/MainPage/Stylesheet/HeroStyle.css"

const PhoneInputForm = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
}
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to an API)
    console.log('Country Code:', countryCode);
    console.log('Phone Number:', phoneNumber);
  }

// Functional component declaration
const Header = () => {
  // Component logic here (hooks, variables, etc.)
  
  return (
    <div>
  <div className="MainBody">
    <div className="Hero">
      <div className="LeftHero">
        <p className="MainLine">Master Every Exam.</p>
        <p className="SecondLine">
          Powerful, effective, and success-focused, Cavers offers <br />
          test series to help you do your best in every exam
        </p>
        <div className="container">
          <form id="login">
            <input id="phone" type="tel" name="phone" />
            <button className="btn" type="submit">
              <a className="SFFText" href="">Start for free</a>
            </button>
          </form>
        </div>
      </div>
      <div className="Right">
        <Image src={Girl} alt="" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Header;