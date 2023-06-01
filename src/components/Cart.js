import React from 'react'

function Cart() {
    return (
        <div>
            <>
                <section id="page-header" className="about-header">
                    <h2>#Let's_Talk</h2>
                    <p>Leave a MESSAGE. We love to hear from you!</p>
                </section>
                <section id="cart" className="section-p1">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="/">
                                        <i className="far fa-times-circle" />
                                    </a>
                                </td>
                                <td>
                                    <img src="/accet/img/products/f1.jpg" alt="" />
                                </td>
                                <td>Cartoon Astronaut T-Shirt</td>
                                <td>$120.00</td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$120.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/">
                                        <i className="far fa-times-circle" />
                                    </a>
                                </td>
                                <td>
                                    <img src="/accet/img/products/f2.jpg" alt="" />
                                </td>
                                <td>Beach Loose T-Shirt</td>
                                <td>$150.00</td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$150.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/">
                                        <i className="far fa-times-circle" />
                                    </a>
                                </td>
                                <td>
                                    <img src="/accet/img/products/f3.jpg" alt="" />
                                </td>
                                <td>Party Astronaut T-Shirt</td>
                                <td>$100.00</td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="cart-add" className="section-p1">
                    <div id="coupon">
                        <h3>Apply Coupon</h3>
                        <div>
                            <input type="text" placeholder="Enter your coupon" />
                            <button className="normal">Apply</button>
                        </div>
                    </div>
                    <div id="subtotal">
                        <h3>Cart Totals</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td>$370.00</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Total</strong>
                                    </td>
                                    <td>
                                        <strong>$ 370</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="normal">Proceed to checkout</button>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Cart
