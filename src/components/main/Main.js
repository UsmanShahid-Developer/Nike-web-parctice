import React from 'react'
import "./Main.css"
import img1 from "../../assetes/shoe_image.png"
import img2 from "../../assetes/shops.png"

export default function Main() {
  return (
    <div>
        <div className='container'>
            <div className='row rowstyle'>
                <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                <p className='headingstyle'>YOUR FEET DESERVE THE BEST</p>
                <p>YOUR FEET DESERVE THE BEST AND HERE TO <br/> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br/>THE BEST AND HERE TO HELP YOU WITH OUR<br/> SHOES.</p>
                <button className='mt-5 btn btn-danger btn2'>Shop Now</button>
                <button className='mt-5 btn btn-outline-secondary btn3'>Catagory</button>
                <p className='pstyle'>Also Available On</p>
                <img src={img2}/>
                </div>
                <div className='col-lg-6 col-md-6 col-m-12 mt-5'>
                    <img src={img1} className='img-fluid'/>
                </div>

            </div>
        </div>
    </div>
  )
}
