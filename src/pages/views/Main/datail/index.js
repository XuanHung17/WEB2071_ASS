import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";


const Search = () => {


    const [product, setProduct] = useState({
        name: "",
        image: "",
        Price: ""
    });
    const { id } = useParams();


    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8088/products/${id}`);
        setProduct(result.data)
        console.log(result.data);
    }
    return (

        <div className="left-content">
            <div className="mother-grid-inner"></div>
            <h1 className="display-4"> Product ID:{id}</h1>
            <hr />

            <ul className="list-group w-50">
                <img src={product.image} className="img-responsive" alt="" style={{ width: '200px', height: '150px', opacity: 1 }} />
                <li className="list-group-item">name:{product.name}</li>

                <li className="list-group-item">price:{product.price}</li>
            </ul>

        </div>

    )
}

Search.propTypes = {
    products: PropTypes.array
}

export default Search