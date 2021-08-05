import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
    return (
       <div>
  <section className="about py-md-5 py-5">
    <div className="container-fluid">
      <div className="feature-grids row px-3">
        <div className="col-lg-3 gd-bottom">
          <div className="bottom-gd row">
            <div className="icon-gd col-md-3 text-center"><span className="fa fa-truck" aria-hidden="true" /></div>
            <div className="icon-gd-info col-md-9">
              <h3 className="mb-2">FREE SHIPPING</h3>
              <p>On all order over $2000</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 gd-bottom">
          <div className="bottom-gd row bottom-gd2-active">
            <div className="icon-gd col-md-3 text-center"><span className="fa fa-bullhorn" aria-hidden="true" /></div>
            <div className="icon-gd-info col-md-9">
              <h3 className="mb-2">FREE RETURN</h3>
              <p>On 1st exchange in 30 days</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 gd-bottom">
          <div className="bottom-gd row">
            <div className="icon-gd col-md-3 text-center"> <span className="fa fa-gift" aria-hidden="true" /></div>
            <div className="icon-gd-info col-md-9">
              <h3 className="mb-2">MEMBER DISCOUNT</h3>
              <p>Register &amp; save up to $29%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 gd-bottom">
          <div className="bottom-gd row">
            <div className="icon-gd col-md-3 text-center"> <span className="fa fa-usd" aria-hidden="true" /></div>
            <div className="icon-gd-info col-md-9">
              <h3 className="mb-2">PREMIUM SUPPORT</h3>
              <p>Support 24 hours per day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //ab */}
  {/*/ab */}
  <section className="about py-5">
    <div className="container pb-lg-3">
      <h3 className="tittle text-center">New Arrivals</h3>
      <div className="row">
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s1.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Bella Toes </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$675.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s2.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Chikku Loafers </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$475.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s3.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">(SRV) Sneakers </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$575.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men my-lg-4">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s4.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Shuberry Heels</a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$575.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men my-lg-4">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s5.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Red Bellies </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$575.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men my-lg-4">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s6.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Catwalk Flats </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$575.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s7.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Running Shoes </a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$675.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s8.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Sukun Casuals </a>
              </h4>
              <div className="product_price">
                <div className="grid-price ">
                  <span className="money ">$775.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="product-shoe-info shoe text-center">
            <div className="men-thumb-item">
              <img src="assets/css/main/images/s9.jpg" className="img-fluid" alt />
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product">
              <h4>
                <a href="shop-single.html">Bank Sneakers</a>
              </h4>
              <div className="product_price">
                <div className="grid-price">
                  <span className="money">$875.00</span>
                </div>
              </div>
              <ul className="stars">
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                <li><a href="#"><span className="fa fa-star-o" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //ab */}
  {/*/testimonials*/}
  <section className="testimonials py-5">
    <div className="container">
      <div className="test-info text-center">
        <h3 className="my-md-2 my-3">Jenifer Burns</h3>
        <ul className="list-unstyled w3layouts-icons clients">
          <li>
            <a href="#">
              <span className="fa fa-star" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star-half-o" />
            </a>
          </li>
        </ul>
        <p><span className="fa fa-quote-left" /> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right" /></p>
      </div>
    </div>
  </section>
  {/*//testimonials*/}
  {/*/ab */}
  <section className="about py-5">
    <div className="container pb-lg-3">
      <h3 className="tittle text-center">Popular Products</h3>
      <div className="row">
        <div className="col-md-6 latest-left">
          <div className="product-shoe-info shoe text-center">
            <img src="assets/css/main/images/img1.jpg" className="img-fluid" alt />
            <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
          </div>
        </div>
        <div className="col-md-6 latest-right">
          <div className="row latest-grids">
            <div className="latest-grid1 product-men col-12">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="assets/css/main/images/img2.jpg" className="img-fluid" alt />
                  <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                </div>
              </div>
            </div>
            <div className="latest-grid2 product-men col-12 mt-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="assets/css/main/images/img3.jpg" className="img-fluid" alt />
                  <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //ab */}
  {/* brands */}
  <section className="brands py-5" id="brands">
    <div className="container py-lg-0">
      <div className="row text-center brand-items">
        <div className="col-sm-2 col-3">
          <a href="#"><span className="fa fa-connectdevelop" aria-hidden="true" /></a>
        </div>
        <div className="col-sm-2 col-3">
          <a href="#"><span className="fa fa-empire" aria-hidden="true" /></a>
        </div>
        <div className="col-sm-2 col-3">
          <a href="#"><span className="fa fa-ioxhost" aria-hidden="true" /></a>
        </div>
        <div className="col-sm-2 col-3">
          <a href="#"><span className="fa fa-first-order" aria-hidden="true" /></a>
        </div>
        <div className="col-sm-2 col-3 mt-sm-0 mt-4">
          <a href="#"><span className="fa fa-joomla" aria-hidden="true" /></a>
        </div>
        <div className="col-sm-2 col-3 mt-sm-0 mt-4">
          <a href="#"><span className="fa fa-dropbox" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}

Home.propTypes = {

}

export default Home
