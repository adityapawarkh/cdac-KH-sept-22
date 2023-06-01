import React from 'react'

function Contact() {
    return (
        <div>
            <>
                <section id="page-header" className="about-header">
                    <h2>#Let's_Talk</h2>
                    <p>Leave a MESSAGE. We love to hear from you!</p>
                </section>
                <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>Visit one of our agency location or contact us today</h2>
                        <h3>Head Office</h3>
                        <div>
                            <li>
                                <i className="fa-solid fa-map" />
                                <p>56 CBD street , Kharghar, Navi-Mumbai</p>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-envelope" />
                                <p>adityapawar@gmail.com</p>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone" />
                                <p>(91+) 989298783</p>
                            </li>
                            <li>
                                <i className="fa-regular fa-clock" />
                                <p>Mon-Sat: 9:00am to 20.00pm</p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16071.152094737681!2d73.04789309085099!3d19.02067390836459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1671116204108!5m2!1sen!2sin"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
                <section id="form-details">
                    <form action="">
                        <span>Leave A Message</span>
                        <h2>We love hear from you</h2>
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Your Message"
                            defaultValue={""}
                        />
                        <button className="normal">Submit</button>
                    </form>
                    <div className="people">
                        <div>
                            <img src="/accet/img/people/1.png" alt="" />
                            <p>
                                <span>Aditya Pawar</span>Junior Web Developer <br /> Phone:(91+)
                                8973828728 <br />
                                Email: adityapawar@gmail.com
                            </p>
                        </div>
                        <div>
                            <img src="/accet/img/people/2.png" alt="" />
                            <p>
                                <span>Aditya Pawar</span>Junior Web Developer <br /> Phone:(91+)
                                8973828728 <br />
                                Email: adityapawar@gmail.com
                            </p>
                        </div>
                        <div>
                            <img src="/accet/img/people/3.png" alt="" />
                            <p>
                                <span>Aditya Pawar</span>Junior Web Developer <br /> Phone:(91+)
                                8973828728 <br />
                                Email: adityapawar@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Contact
