import React from "react";
import { Link } from "react-router-dom";

const CopyrightArea = () => {
    return(
        <>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright ©️ 2022, All Right Reserved </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul className="footer_ul">
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Terms</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CopyrightArea;