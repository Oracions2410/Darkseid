import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../api'
import { numberWithCommas } from '../Helpers/utils'

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data: { products } } = await api.get('/api/products')
            setProducts(products)
        }
        fetchProducts()
    }, [])

    const showProducts = (
        products.map(product =>
            <li key={product._id}>
                <div className="product-item">
                    <Link to={`/product/${product._id}`}>
                        <img className="product-image" src={product.image} alt="product3" />
                    </Link>
                    <div className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{numberWithCommas(product.price)} FCFA</div>
                    <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div>
                </div>
            </li>
        )
    )

    return <React.Fragment>
        <ul className="products">{showProducts}</ul>
    </React.Fragment>
}

export default HomeScreen