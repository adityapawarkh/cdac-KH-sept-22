import React from 'react'

function About() {
    return (
        <div>
            <>
                <section id="page-header" className="about-header">
                    <h2>#knowUs</h2>
                    <p>Read all case studies about our products!</p>
                </section>
                <section id="about-head" className="section-p1">
                    <img src="/accet/img/about/a6.jpg" alt="" />
                    <div>
                        <h2>Who We Are?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga
                            inventore eaque et perferendis. Maxime cum incidunt asperiores pariatur
                            minus expedita facere, repellendus illum iusto, ut esse exercitationem
                            libero corporis non. Animi illum at facilis vitae. Ratione asperiores
                            dignissimos quisquam.
                        </p>
                        <br />
                        <abbr title="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                            laboriosam, quisquam sequi quis et beatae exercitationem. Quidem sint
                            beatae illo.
                        </abbr>
                        <br />
                        <br />
                        <marquee bgcolor="#ccc" loop={-1} scrollamount={5} width="100%">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit
                            alias odio deserunt neque ut.
                        </marquee>
                    </div>
                </section>
                <section id="about-app" className="section-p1">
                    <h1>
                        Download Our <a href="/">App</a>{" "}
                    </h1>
                    <div className="video">
                        <video src="/accet/img/about/1.mp4" autoPlay="" muted="" loop="" />
                    </div>
                </section>
                <section id="feature" className="section-p1">
                    <div className="fe-box">
                        <img src="/accet/img/features/f1.png" alt="product" />
                        <h6>Free shipping</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/accet/img/features/f2.png" alt="product" />
                        <h6>Online Order</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/accet/img/features/f3.png" alt="product" />
                        <h6>Save Money</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/accet/img/features/f4.png" alt="product" />
                        <h6>Promotions</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/accet/img/features/f5.png" alt="product" />
                        <h6>Happy Sell</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/accet/img/features/f6.png" alt="product" />
                        <h6>F24/7 Support</h6>
                    </div>
                </section>
            </>

        </div>
    )
}

export default About
