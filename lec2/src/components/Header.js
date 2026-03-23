import {LOGO_URL} from "../utils/constants"

const Header=()=>{
    return (
        <div className="Header-container">
            <div className="Logo-conatiner">
                <img className="Logo" src={LOGO_URL} alt="Logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;