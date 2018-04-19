import React from 'react';
import { Carousel } from 'react-bootstrap';
import './index.css'


const LandingPage = () =>

  <div className='container'>

  <div className="row">
    <div className="col-md-12">
      <div className="container align-content">
    
        <div className="row">
          <div className="col-12 text-center">
            <div className="title">
                <h1>Welcome to HikeUp</h1>
                <p>... where hikers meet, and summit their dreams!</p>
              </div> 
            
            <Carousel className="carousel shadow align-content">
              <Carousel.Item className="carouselItem">
                <img className="imgMt" alt="900x500" src="http://4.bp.blogspot.com/-3thqVP_DpJM/VS23fRcQ5lI/AAAAAAAAAcI/g3VBUO9Gsgs/s1600/Sneffels%2B2.jpg" />
                <Carousel.Caption>
                  <h3>Mt. Sneffels</h3>
                  <p>Elevation:	14,150', Range:	San Juan</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carouselItem"> 
                <img className="imgMt" alt="900x500" src="http://3.bp.blogspot.com/-CqiuPETU0DA/VS7sKImHpHI/AAAAAAAAAgM/Nm5VpM7621w/s1600/Marble%2BSunrise%2B3.jpg" />
                <Carousel.Caption>
                  <h3>Crestone Peak</h3>
                  <p>Elevation:	14,294', Range:	Sangre de Cristo</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carouselItem">
                <img className="imgMt" alt="900x500" src="http://2.bp.blogspot.com/-tBIgqUbCcw4/VS3Pe60MVXI/AAAAAAAAAeM/EP5SZ3p-5us/s1600/Wilson%2Bfrom%2BTride.jpg" />
                <Carousel.Caption>
                  <h3>Wilson Peak</h3>
                  <p>Elevation:	14,017', Range:	San Juan</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </div>
    </div>
  </div> 
  
  <br /><br /><br />

    <div class="row">
      <div class="col-md-5 card-t shadow">
        <h3>Want to hike, but don't want to do it alone?</h3>
          <ul>
            <li>Just create a HikeUp or simple browse and join from the current ones.</li>
            <li>Also, get to know hikers before meeting up, by just simply chatting with them.</li>
          </ul>
      </div>

      <div class="col-md-5 card-t shadow">
        <h3>Stay informed!</h3>
          <ul>
            <li>Stay up to date with the latest weather reports, trail conditions, and much more before you head out to the mountains.</li>
            <li>This App makes it super easy to keep up with the most updated and relevant data that matters to you.</li>
          </ul>
      </div>
    </div>
  
  </div>


export default LandingPage;
