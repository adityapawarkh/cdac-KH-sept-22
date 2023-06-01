import React from 'react'

function Footer() {
    return (
        <>
            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="/accet/img/logo.png" alt="" />
                    <h4>Contact</h4>
                    <p> <strong>Address:</strong> Kharghar , Navi-Mumbai, near kharghar railway station</p>
                    <p> <strong>Phone:</strong> 8275937055 / (+91) 01 2323 32323</p>
                    <p> <strong>Hours:</strong> 10:00-18:00, Mon-Sat</p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="/">About us</a>
                    <a href="/">Delivery Information</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">Contact us</a>
                </div>
                <div className="col">
                    <h4>My account</h4>
                    <a href="/">Sign In</a>
                    <a href="/">View Cart</a>
                    <a href="/">My Wishlist</a>
                    <a href="/">Track My Order</a>
                    <a href="/">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="/accet/img/pay/app.jpg" alt="" />
                        <img src="/accet/img/pay/play.jpg" alt="" />
                        <p>Secured Payment Gateways</p>
                        <img src="/accet/img/pay/pay.png" alt="" />
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
