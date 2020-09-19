import React from "react";
import Lorem from "../components/Lorem";

function Footer() {
    return (
        <div className="black-wrapper">
            <div className="wrapper">
                <footer>
                    <div className="item1">
                        <h5>About Kali Logic</h5>
                        <p>{Lorem(36)}</p>
                    </div>
                    <div className="item2">
                        <h5>Contact Us</h5>
                        <p>2100 Kali Logic Blvd<br />
                            Fort Myers, FL 33901<br /><br />
                        </p>
                        <ul>
                            <li>(239) 555-5555</li>
                            <li>(239) 555-5556</li>
                            <li>support@kalilogic.com</li>
                        </ul>
                    </div>
                    <div className="item3">
                        <h5>Follow Us</h5>
                        <ul>
                            <li><button>Facebook</button></li>
                            <li><button>Instagram</button></li>
                            <li><button>Youtube</button></li>
                            <li><button>Twitter</button></li>
                            <li><button>GooglePlus</button></li>
                            <li><button>Skype</button></li>
                        </ul>
                    </div>
                    <p>Copyright 2020 kalilogic.com</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;