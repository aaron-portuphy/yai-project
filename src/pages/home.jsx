import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts.jsx';
import NewArrival from '../components/newArrival';
import img1 from '../assets/images/banner/b17.jpg'
import img2 from '../assets/images/banner/b10.jpg'
import Blog from '../components/blogs.jsx'

const home = () => {
  return <>
    <section className="banner mb-3">
      <div className="container-xxl">
        <div className="row">
          <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
            <span className='shadow-lg p-3 mt-3 text-white '>Sustainable Offers</span>
            <h1>Exclusive Value Deals</h1>
            <h2>On all products</h2>
            {/* <p className="p-2 m-0">Save more with Keefi Ecofarms</p> */}
            <Link className='button-link mb-3'>Shop Now</Link>
          </div>
        </div>
      </div>
    </section>

    <Hero />

    <section className="featured-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Explore Our Products</h1>
            <p>Sustainably Processed for Every Occasion</p>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </section>

    <section className="repair">
      <div className="container-xxl">
        <div className="row">
          <div className="repair-details text-center d-flex flex-column align-items-center p-3">
            <span className="text-white mt-1">Repair Services</span>
            <h2 className="text-white">On <span className='text-success'><b>70%</b></span> Off on All Products and Accessories</h2>
            <div className="mt-3">
              <button className='button-repair'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="new-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>New Arrivals</h1>
            <p>Your Best Designer Outfits</p>
          </div>
          <NewArrival />
        </div>
      </div>
    </section> */}

    <section className="deals p-5"> 
      <div className="container-xxl">
        <div className="row">
          <div className="col-6 p-4">
          <div className="card row">
            <div className="d-flex">
            <div className="col-md-4">
              <img src={img1} alt="" className='img-fluid rounded-start p-2 h-100' />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <span>Hot Deals</span>
              <h3 className="card-title">
                Buy One get One free.
              </h3>
              <p>The Latest best collection in our closet
                Feel Cute with our outfits</p>
              <button className="button-deals mt-3">
                Learn more
              </button>
              </div>
            </div>
            </div>
          </div>
          
          </div>
          <div className="col-6 p-4">
          <div className="card row">
            <div className="d-flex">
            <div className="col-md-4">
              <img src={img2} alt="" className='img-fluid rounded-start h-100 p2' />
            </div>
            <div className="col-md-8">
            <div className="card-body">
              <span>Hot Deals</span>
              <h3 className="card-title">
                Buy One get One free.
              </h3>
              <p>The Latest best collection in our closet
                Feel Cute with our outfits
              </p>
              <button className="button-deals mt-3">
                Learn more
              </button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="blogs p-3 mb-2">
      <div className="container-xxl">
        <div className="row">
        <div className="text-center mb-4">
            <h1>What Our Customers Say</h1>
            <p>OUr customers never miss a bit on providing feedback</p>
          </div>
          <Blog />
        </div>
      </div>
    </section>
  </>
}

export default home