import React from "react";
import './footer.css';

const Footer = (props) => {
    return(
        <>
            <footer id="footer">
                <div className="upper-footer">
                    <div className="up-left">
                        <div className="image">
                        <p>{props.rname}</p>
                        </div>
                        <div className="content">
                            <h2 className="footer-heading"> About Us</h2>
                            <p className="description">
                                From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, {props.rname} covers it all. Explore menus.
                            
                            </p>
                        </div>
                    </div>
                    <div className="up-right">
                        <h2 className="footer-heading">Social Link</h2>
                        <ul>
                            <li className="linkedIn"><a href="#"></a></li>
                            <li className="instagram"><a href="#"></a></li>
                            <li className="youtube"><a href="#"></a></li>
                            <li className="github"><a href="#"></a></li>
                        </ul>
                    </div>
                </div>

                <div className="down-footer">
                    <p className="leftPara">Copyright &copy; 2023 {props.dname}</p>
                    <ul className="footer-li">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Work With Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;