import React from 'react'

function Shopdet() {
    return (
        <div>
            <>
                <section id="prodetails" className="section-p1">
                    <div className="single-pro-image">
                        <img src="/accet/img/products/f1.jpg" width="100%" id="MainImg" alt="" />
                        <div className="small-image-group">
                            <div className="small-img-col">
                                <img
                                    src="/accet/img/products/f1.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="/accet/img/products/f2.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="/accet/img/products/f3.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="/accet/img/products/f4.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="single-pro-details">
                        <h6>Home / T-Shirt</h6>
                        <h4>Men's Fashion T-Shirt</h4>
                        <h2>$120.00</h2>
                        <select>
                            <option>Select Size</option>
                            <option>XL </option>
                            <option>XXL</option>
                            <option>Samll</option>
                            <option>Large</option>
                        </select>
                        <input type="number" defaultValue={1} />
                        <button className="normal">Add To cart</button>
                        <h4>Product Details</h4>
                        <span>
                            Fabric: 100% Pure Cotton; Premium Export Quality Branded T-shirt; Unique
                            Collection to your wardrobe casuals a hit of effortless cool with this
                            best-looking t shirt.; Comfort: Best Fashionably Comfortable Striped
                            Trendy Premium Branded Polo T Shirts that you have worn till now.
                        </span>
                    </div>
                </section>
                <section id="product1" className="section-p1">
                    <h2>Feature Product</h2>
                    <p>Summer Collection New Mordern Design</p>
                    <div className="pro-container">
                        <div className="pro">
                            <img src="/accet/img/products/n1.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="/">
                                <i className="fas fa-shopping-cart cart" />
                            </a>
                        </div>
                        <div className="pro">
                            <img src="/accet/img/products/n2.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#">
                                <i className="fas fa-shopping-cart cart" />
                            </a>
                        </div>
                        <div className="pro">
                            <img src="/accet/img/products/n3.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="/">
                                <i className="fas fa-shopping-cart cart" />
                            </a>
                        </div>
                        <div className="pro">
                            <img src="/accet/img/products/n4.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#">
                                <i className="fas fa-shopping-cart cart" />
                            </a>
                        </div>
                    </div>
                </section>
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4>Sign Up for Newsletters</h4>
                        <p>
                            Get E-mail updates about our shop and <span>special offer</span>{" "}
                        </p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Your email address" />
                        <button className="normal">Sign Up</button>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Shopdet
