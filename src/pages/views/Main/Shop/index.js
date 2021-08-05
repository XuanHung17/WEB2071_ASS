import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Shop = ({ product }) => {
  return (


    <section className="ab-info-main py-md-5 py-4">
      <div className="container py-md-3">
        {/* top Products */}
        <div className="row">
          {/* product left */}
          <div className="side-bar col-lg-4">
            <div className="search-bar w3layouts-newsletter">
              <h3 className="sear-head">Search Here..</h3>
              <form action="#" method="post" className="d-flex">
                <input type="search" placeholder="Product name..." name="search" className="form-control" required />
                <button className="btn1"><span className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            {/*preference */}
           
            {/* //discounts */}
            {/* reviews */}
           
            {/* //reviews */}
            {/* deals */}

            {/* //deals */}
          </div>
       

          <div className="left-ads-display col-lg-8">
                {/* //product left */}
                {/* product right */}
            <div className="col-md-4 product-men">
              {product.map(({ id, image, name, price }, index) => (
                
                <td>
                <div key={index}>
                  <div className="product-shoe-info shoe text-center">
                    <div className="men-thumb-item">
                      <img src={image} className="img-fluid" alt="" style={{ display: 'inline', width: '200px', height: '150px'}} />
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <p>{name} </p>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <p>{price}</p>
                        </div>
                      </div>
                  
                      <Link className="btn btn-primary" to={`/Search/${id}`}>Xem</Link>
                    </div>
                  </div>
                </div>
                </td>
              
              ))};
            </div>

          </div>

        </div>

      </div>

    </section>


  )
}

Shop.propTypes = {
  products: PropTypes.array
}

export default Shop