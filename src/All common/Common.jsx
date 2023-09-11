import React from 'react'
import {Link} from 'react-router-dom'

const Common = (props) => {
  return (
      <>
      <section id='header' className="d-flex align-items-center" style={{color: props.mode==="dark"?"white":"black"}} >
      <div className="container-fluid" style={{color: props.mode==="dark"?"white":"black"}}>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  {props.name}
                  <strong className='brand-name'>{props.name2} </strong>
                </h1>
                <h2 className='position'>Frontend Developer</h2>😄
                <div className="mt-3">

                  <Link class="button-55" to={props.visit} role="button">{props.btname}</Link>
                </div>
              </div>


              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
              <img src={props.imgsrc} alt="home img" className="image-fluid responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

      
      
      </>
  )
}

export default Common
