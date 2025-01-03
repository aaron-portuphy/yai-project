import React from 'react'
import {PRODUCTS1 } from './products'

const NewArrival = () => {
  return <>
  <div className="row mt-4">
        {PRODUCTS1.slice(1,5).map(products => (
           <div className="col-3">
                <div key={products.id}>
                <div className="card h-100 p-3">
                <img src={products.image} alt="" className='card-img-top img-fluid m-auto p-3' />
                <div className="card-details">
                    <div className="title m-2">
                    <span>{products.brand}</span>
                    <h5 className='mt-2'>{products.name}</h5>
                    </div>
                    <div className="card-footer text-center mb-3">
                        <p className='mb-3'>{products.status}</p>
                        <p className='text-danger'>{products.rate}</p>
                    </div>
                </div>
                </div>
           </div>
           </div>
        ))}
    </div>
  </>
}

export default NewArrival