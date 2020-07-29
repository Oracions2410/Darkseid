import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { numberWithCommas } from '../Helpers/utils'
import data from '../data'

const ProductScreen = () => {

    const { productId } = useParams()
    const product = data.products.find(product => String(product._id) === productId)

    return <React.Fragment>
        <div className="back-button">
            <Link to='/'>&crarr;Retour</Link>
        </div>

        <div className="details">

            <div className="details-image">
                <img src={product.image} alt="product" />
            </div>

            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} numReviews)
                    </li>
                    <li>
                        Description:
                    <div>{product.desc}</div>
                    </li>

                </ul>
            </div>

            <div className="details-actions">
                <ul>
                    <li>Prix:&nbsp;{numberWithCommas(product.price)}</li>
                    <li>Status:&nbsp;{product.status}</li>
                    <li>Quantité:&nbsp;
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                </ul>
                <button className="button-add-card primary">Ajouter au panier</button>
            </div>
        </div>
    </React.Fragment>
}

export default ProductScreen