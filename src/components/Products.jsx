import React from 'react';

const Products = ({products}) => {

    return (
        <section className="products">
            {products.map(product => (
                <div 
                    className="card"
                    key={product.id}
                >
                    <img className="card-image" src={product.image} alt="Imagen Producto" />
                    <p className="card-text">{product.name}</p>
                    <p className="disc-price">Antes ${product.discountPrice}</p>
                    <p className="price">${product.price}</p>
                    <button className="button">
                        <span className="full-text">Ver Detalles</span>
                        <span className="short-text">Comprar</span>
                    </button>
                </div>

            ))}
        </section>
    )
}

Products.propTypes = {

}

export default Products;
