import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove,onEdit }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }

    return (
        <div>
            <div className="page-container">	
        <div className="left-content">
          <div className="mother-grid-inner">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            
            <p className="mb-4"> <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách Sản phẩm</h6>
                    
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price ,Desc}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/product/${id}`}>Sửa</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button>
                                        </td>
                                      
                                       
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
