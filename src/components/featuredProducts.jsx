import React from 'react'
import { PRODUCTS } from './products'

const FeaturedProducts = () => {
  return <>
    <div className="row mt-4">
        {PRODUCTS.slice(2,6).map(products => (
           <div className="col-3">
                <div key={products.id}>
                <div className="card h-100 p-3">
                <img src={products.image} alt="" className='card-img-top img-fluid m-auto p-3' style={{maxHeight: '300px', objectFit: 'contain'}} />
                <div className="card-details">
                    <div className="title m-2">
                    <h5 className='mt-2'>{products.name}</h5>
                    </div>
                    <div className="card-footer text-center mb-3">
                        <p className='mb-3'>Price: GHS{products.price}</p>
                    </div>
                </div>
                </div>
           </div>
           </div>
        ))}
    </div>
  </>;
}

export default FeaturedProducts