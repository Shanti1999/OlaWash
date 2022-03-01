import React from 'react';
import { Link } from 'react-router-dom';
import Right_component from './components/right_component';
import Search_component from './components/search_component';


export default function Choosecar() {
    return ( 
        <React.Fragment >

<section className="navigation" id="navbar">
        <div className="nav-container">
            <div className="brand-logo">
                <Link to="{url}"><img src="assets/img/logo1.webp" alt="Brand Logo" /></Link>
            </div>
          <nav>
            <div className="nav-mobile"><Link to="#" id="nav-toggle" ><span></span></Link></div>
            <ul className="nav-list">
              <li>
              <Link to="./">Home</Link>
              </li>
            
              <li>
              <Link to="#!">Booking</Link>
                <ul className="nav-dropdown">
                  <li>
                  <Link to="./Book">Book a Service</Link>
                  </li>
                  <li>
                  <Link to="./Service">3M Rubbing Polish</Link>
                  </li>
                  <li>
                    <Link to={"url"} className="dropdown1">3M Teflon Coating </Link>
                  </li>
                 
                <li> <Link to={"url"} className="dropdown1">3M Teflon Coating </Link></li> 
                <li> <Link to={"url"} className="dropdown1">3M Ceramic Coating</Link></li>
                 <li> <Link to={"url"} className="dropdown1">Meguiar's Rubbing Polish</Link></li>
                 <li> <Link to={"url"} className="dropdown1">Meguiar's Rubbing Polish</Link></li>
             <li><Link to={"url"} className="dropdown1">Meguiar's Teflon Coating</Link></li>
                  <li> <Link to={"url"} className="dropdown1">Meguiar's Ceramic Coating</Link></li>
                <li> <Link to={"url"} className="dropdown1">Dry Cleaning</Link></li>
                 <li><Link to={"url"} className="dropdown1">Sanitizing Services</Link></li>
                  
                  <li><Link to={"url"} className="dropdown1">Monthly Packages</Link></li>
                </ul>
              </li>
          
              <li>
                <Link to="#!">Partnership</Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link to={"url"} className="dropdown1">Local Service Provider</Link>
                 
                   
                
                    <Link to={"url"} className="dropdown1">Car Washing E-cart Project</Link>
                  </li>
                  <li>
                    <Link to={"url"} className="dropdown1">Partnership Overview</Link>
                  </li>
                  <li>    <Link to={"url"} className="dropdown1">Car Washing Bike Project</Link></li>
                  <li>
                    <Link to={"url"} className="dropdown1">Service Partnership</Link>
                  </li>
                </ul>
              </li>
              <li>
                  <Link to="#!">More</Link>
                  <ul className="nav-dropdown">
                      <li>  <Link to={"url"} className="dropdown1">About Us</Link></li>
                       <li> <Link to={"url"} className="dropdown1">Careers</Link></li>
                      <li><Link to={"url"} className="dropdown1">Contact</Link></li>
                        <li><Link to={"url"} className="dropdown1">Coupons</Link></li>
                        <li><Link to={"url"} className="dropdown1">Download</Link></li>
                       <li><Link to={"url"} className="dropdown1">FAQ</Link></li> 
                        <li><Link to={"url"} className="dropdown1">Image Gallary</Link></li>
                       <li><Link to={"url"} className="dropdown1">Product</Link></li> 
                       <li> <Link to={"url"} className="dropdown1">Services</Link></li>
                       <li><Link to={"url"} className="dropdown1">Video Gallary</Link></li> 
                       <li><Link to={"url"} className="dropdown1">Reset</Link></li>
                  </ul>
               </li>
            </ul>
          </nav>
        </div>
      </section>



    <section class="books">
        <div className="row">
            <div className="one">
                <h1 className="side_heading">BOOK A SERVICE</h1>
                <h2 className="side_heading1">Choose A Car Type</h2>
            </div>
            <div className=''>
                <Right_component />
                <Search_component />
            </div>
        </div>
    </section>




    <div className="pg-footer">
        <div className="footer">
            <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
          </svg>
            <div className="footer-content">
                <div className="footer-content-column">
                    <div className="footer-logo">
                        <a className="footer-logo-link" href={'url'}>
                            <img src="assets/img/logo1.webp" alt="Brand Logo" />
                        </a>
                    </div>


                </div>
                <div className="footer-content-column">
                    <div className="footer-menu">
                        <h2 className="footer-menu-name">Information</h2>
                        <ul id="menu-company" className="footer-menu-list">

                            <li id="menu-item-171917" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171917">
                                <Link to={'url'}> 
                                        Book A Service
                                      </Link>
                            </li>
                            <li id="menu-item-170434" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                <Link to={'url'}>3M Rubbing Polish
                                  </Link>
                            </li>

                            <li id="menu-item-179115" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-179115">
                                <Link to={'url'}>
                                    3M Teflon Coating
                                  </Link>
                            </li>
                            <li id="menu-item-178960" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960">
                                <Link to={'url'}> Meguiar's Rubbing Polish
                                  
                                   </Link>
                            </li>
                            <li id="menu-item-178961" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178961">
                                <Link to={'url'}>   Meguiar's Teflon Coating
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178962" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178962">
                                <Link to={'url'}>   Meguiar's Ceramic Coating
                                   </Link>
                            </li>

                            <li id="menu-item-178963" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178963">
                                <Link to={'url'}>   Car Dry Cleaning Services
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178964" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178964">
                                <Link to={'url'}>    Sofa Dry Cleaning Services
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178965" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178965">
                                <Link to={'url'}>    Sanitizing Services
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178966" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178966">
                                <Link to={'url'}>    Become A Local Service Provider
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178967" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178967">
                                <Link to={'url'}>    Partnership Overview
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178968" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178968">
                                <Link to={'url'}>    Become A Service Partner
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178969" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178969">
                                <Link to={'url'}>    Car Washing Bike Project
                                   
                                   </Link>
                            </li>
                            <li id="menu-item-178970" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178970">
                                <Link to={'url'}>    
                                    Car Washing E-Cart Project
                                   
                                   </Link>
                            </li>
                        </ul>
                    </div>




                </div>
                <div className="footer-content-column">
                    <div className="footer-menu">
                        <h2 className="footer-menu-name"> Quick Links</h2>
                        <ul id="menu-quick-links" className="footer-menu-list">
                            <li id="menu-item-168092" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-168092">
                                <a target="_blank" rel="noopener noreferrer" href={'url'}>Home</a>
                            </li>

                            <li id="menu-item-167418" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-167418">
                                <a target="_blank" rel="noopener noreferrer" href={'url'}>About</a>
                            </li>
                            <li id="menu-item-167954" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167954">
                                <a href={'url'}>Services</a>
                            </li>
                            <li id="menu-item-167423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167423">
                                <a href={'url'}>FAQ</a>
                            </li>
                            <li id="menu-item-167424" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167424">
                                <a href={'url'}>Careers</a>
                            </li>
                            <li id="menu-item-167425" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167425">
                                <a href={'url'}>Image Gallary</a>
                            </li>
                            <li id="menu-item-167955" className="menu-item menu-item-type-post_type_archive menu-item-object-customer menu-item-167955"><a href={'url'}>Coupons</a></li>
                            <li id="menu-item-170701" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170701">
                                <a href={'url'}>Contact Us</a>
                            </li>
                            <li id="menu-item-170702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170702">
                                <a href={'url'}>Disclaimer</a>
                            </li>
                            <li id="menu-item-170703" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170703">
                                <a href={'url'}>Privacy Policy</a>
                            </li>
                            <li id="menu-item-170704" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170704">
                                <a href={'url'}>Terms And Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-column">

                    <div className="footer-call-to-action">
                        <h2 className="footer-call-to-action-title">Availability:</h2>
                        <p className="footer-call-to-action-link-wrapper"><i className="fa fa-envelope" aria-hidden="true"></i> olacarwash@gmail.com</p>
                        <p className="footer-call-to-action-link-wrapper"><i className="fa fa-clock" aria-hidden="true"></i> Mon-Sun, 9 am to 7 pm</p>
                        <p className="footer-call-to-action-link-wrapper"><i className="fa fa-map-marker" aria-hidden="true"></i> 9-DSIIDC Industrial Shed Kalkaji, DDA Flats Kalkaji, Mini Central Market Marg, South Delhi, New Delhi-110019 (IN)</p>
                    </div>



                </div>
                <div className="footer-social-links">
                    <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
              </svg>
                    <a className="footer-social-link linkedin" href={'url'} target="_blank"  rel="noopener noreferrer">
                        <span className="hidden-link-text">Linkedin</span>
                        <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
                    </a>
                    <a className="footer-social-link twitter" href={'url'} target="_blank" rel="noopener noreferrer">
                        <span className="hidden-link-text">Twitter</span>
                        <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                  <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
                </svg>
                    </a>
                    <a className="footer-social-link youtube" href={'url'} target="_blank" rel="noopener noreferrer">
                        <span className="hidden-link-text">Youtube</span>
                        <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                </svg>
                    </a>
                    <a className="footer-social-link github" href={'url'} target="_blank" rel="noopener noreferrer">
                        <span className="hidden-link-text">Github</span>
                        <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
                </svg>
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-wrapper">
                    <p className="footer-copyright-text">
                        <a className="footer-copyright-link" href={'url'} rel="noopener noreferrer" target="_self"> ©2022. | LYB Technology | All rights reserved. </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  





    <footer className="site-header">
        <ul className="footer-list ">
            <li className="footer-list-item "><i aria-hidden className="fa fa-home icon1 " ></i></li>
            <li className="footer-list-item "><i aria-hidden className="fa fa-map-marker icon1 " ></i></li>
            <li className="footer-list-item "><i aria-hidden className="fa fa-phone icon1 " ></i></li>
            <li className="footer-list-item "><i aria-hidden className="fa fa-whatsapp icon1 " ></i></li>
        </ul>
    </footer>

    <a href="# " className="go-top "> TOP</a>
            
        </React.Fragment>
        );
     }