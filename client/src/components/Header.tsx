import { IoLogInOutline } from "react-icons/io5";
import "../styles/Header.css";

function Header() {
  const isLoggedIn = true
  return (
    <header>
      <div className="loginTitleZone">
        {
          isLoggedIn &&
          <a href="/login">
            <IoLogInOutline />
          </a>
        }
        <h1>PRYugiohSON</h1>
      </div>
      <p>Editing Deck:</p>
      <div>
        <button>SAVE</button>
        <button>CLEAR</button>
        <button>PARTAGER</button>
      </div>
    </header>
  )
}

export default Header