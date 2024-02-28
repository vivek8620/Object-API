import React, { useState, } from 'react'
import Menu from './Menu'
import './Footer'
import './style.css'
import Footer from './Footer'

function App() {
  let [item, setitem] = useState(Menu)

  let filterData = (cat) => {
    let filteritem = Menu.filter((curele) => {
      return cat === curele.category
    })
    setitem(filteritem)
  }
  return (
    <>

      <div className='container-fluid header'>Objects API !</div>

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./image/watch/3.jpg" class="d-block w-100" height={600} width={100} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image/shoes/2.jpg" class="d-block w-100" height={600} width={100} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image/phone/9.jpg" class="d-block w-100" height={600} width={100} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image/gym/9.jpg" class="d-block w-100" height={600} width={100} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image/car/1.jpg" class="d-block w-100" height={600} width={100} alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <center>
        <div class="btn-group mb-4 mt-4">
          <button type="button" class="btn btn-danger p-3" onClick={() => { filterData('watch') }}>Watch</button>
          <button type="button" class="btn btn-warning p-3" onClick={() => { filterData('shoes') }}>Shoes</button>
          <button type="button" class="btn btn-success p-3" onClick={() => { filterData('t-shirt') }}>T-shirt</button>
          <button type="button" class="btn btn-danger p-3" onClick={() => { filterData('phone') }}>Phone</button>
          <button type="button" class="btn btn-warning p-3" onClick={() => { filterData('gym') }}>Gym</button>
          <button type="button" class="btn btn-success p-3" onClick={() => { filterData('car') }}>Car</button>
        </div>
      </center>

      <div className='container-fluid'>
        <div className='row'>
          {item.map((pro) => {
            return (
              <>
                <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                  <img src={pro.pimage} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pro.pname}</h5>
                    <p className="card-text">Price={pro.price} Category={pro.category}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <Footer />

    </>
  )
}
export default App
