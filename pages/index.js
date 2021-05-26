import getPostData from '../lib/airtable'

export default function Home({ html }) {
  // console.log(posts)

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} ></div>
    </>
  )
}


async function genHTML() {
  // this gets the minified data
  const posts = await getPostData();

  //console.log(posts)

  var data = {}

  // loads it into an object
  for (const rec in posts) {
    // console.log(posts[rec].fields.value)
    data[posts[rec].fields.id] = {value: posts[rec].fields.value}
    data[posts[rec].fields.id].extra = posts[rec].fields.extra
  }

  // console.log(data)

  const date = data.countdown.value

  const logosrc = data.logosmall.value

  const message = data.welcome_message.value.replace("\n", "</span>")

  const typeform = data.typeform.value

  const title = data.title.value

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>`+ title + `</title>
  <!-- Stylesheets -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">
  
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
  <link rel="icon" href="images/favicon.png" type="image/x-icon">
  
  <!-- Responsive -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  
  <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
  <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
  </head>
  
  <body class="hidden-bar-wrapper">
  
  <div class="page-wrapper">
     
      <!-- Preloder -->
    <div id="preloder" class="preloader">
      <div class="loader"></div>
    </div>
    <!-- Εnd Preloader -->
     
     <!-- Main Header-->
      <header class="main-header header-style-one">
        
      <!--Header-Upper-->
          <div class="header-upper">
            <div class="outer-container">
                <div class="inner-container clearfix">
                    
            <!-- Logo Box -->
                    <div class="logo-box">
                        <div class="logo"><a href="index.html"><img src="`+ data.logosmall.value + `" alt="" title=""></a></div>
                      </div>
                      
            <!-- Logo -->
            <div class="mobile-logo pull-left">
              <a href="index.html" title=""><img src="`+ data.logosmall.value + `" alt="" title=""></a>
            </div>
            
            <!-- Header Social Box -->
            <div class="header-social-box clearfix">
              <a href="`+ data.instagram.value + `" class="fa fa-instagram"></a>
            </div>
            
            <div class="outer-box clearfix">
              
              <!-- Hidden Nav Toggler -->
              <div class="nav-toggler">
                 <div class="nav-btn"><button class="hidden-bar-opener">Menu</button></div>
              </div>
              <!-- / Hidden Nav Toggler -->
              
            </div>
            
            <div class="nav-outer clearfix">
              <!--Mobile Navigation Toggler-->
              <div class="mobile-nav-toggler"><span class="icon"><img src="images/icons/burger.svg" alt="" /></span></div>
              <!-- Main Menu -->
              <nav class="main-menu navbar-expand-md">
                <div class="navbar-header">
                  <!-- Toggle Button -->    	
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                
                <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                  <ul class="navigation clearfix">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown"><a href="#">About Us</a>
                      <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="timetable.html">Time Table</a></li>
                        <li><a href="commingsoon.html">Comming Soon</a></li>
                        <li><a href="body-builder.html">Section Page 01</a></li>
                        <li><a href="body-builder-2.html">Section Page 02</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a href="#">Trainers</a>
                      <ul>
                        <li><a href="trainer.html">Trainer 01</a></li>
                        <li><a href="trainer-2.html">Trainer 02</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a href="#">Shop</a>
                      <ul>
                        <li><a href="shop-left.html">Shop Left Sidebar</a></li>
                        <li><a href="shop-right.html">Shop Right Sidebar</a></li>
                        <li><a href="shop-single.html">Product Single</a></li>
                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a href="#">Blog</a>
                      <ul>
                        <li><a href="blog.html">Our Blog</a></li>
                        <li><a href="blog-classic.html">Blog Classic</a></li>
                        <li><a href="blog-detail.html">Blog Detail One</a></li>
                        <li><a href="blog-detail-two.html">Blog Detail Two</a></li>
                        <li><a href="not-found.html">Not Found</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact us</a></li>
                  </ul>
                </div>
              </nav>
              
            </div>
                      
                  </div>
          
              </div>
          </div>
          <!--End Header Upper-->
          
      <!-- Sticky Header  -->
          <div class="sticky-header">
              <div class="auto-container clearfix">
                  <!--Logo-->
                  <div class="logo pull-left">
                      <a href="index.html" title=""><img height=20 src="`+ data.logosmallest.value + `" alt="" title=""></a>
                  </div>
                  <!--Right Col-->
                  <div class="pull-right">
                      <!-- Main Menu -->
                      <nav class="main-menu">
                          <!--Keep This Empty / Menu will come through Javascript-->
                      </nav><!-- Main Menu End-->
            
                  </div>
              </div>
          </div><!-- End Sticky Menu -->
      
      <!-- Mobile Menu  -->
          <div class="mobile-menu">
              <div class="menu-backdrop"></div>
              <div class="close-btn"><span class="icon flaticon-multiply"></span></div>
              
              <nav class="menu-box">
                  <div class="nav-logo"><a href="index.html"><img src="`+ data.logosmallest.value + `" alt="" title=""></a></div>
                  <div class="menu-outer">
          <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
              </nav>
        
          </div>
      <!-- End Mobile Menu -->
    
      </header>
      <!-- End Main Header -->
    
    <!-- FullScreen Menu -->
    <div class="fullscreen-menu">
      <!--Close Btn-->
      <div class="close-menu"><span>Close</span></div>
      
      <div class="menu-outer-container">
        <div class="menu-box">
          <nav class="full-menu">
            <ul class="navigation">
              <li><a href="index.html">Home</a></li>
              <li class="dropdown"><a href="#">About Us</a>
                <ul>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="timetable.html">Time Table</a></li>
                  <li><a href="commingsoon.html">Comming Soon</a></li>
                  <li><a href="body-builder.html">Section Page 01</a></li>
                  <li><a href="body-builder-2.html">Section Page 02</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#">Trainers</a>
                <ul>
                  <li><a href="trainer.html">Trainer 01</a></li>
                  <li><a href="trainer-2.html">Trainer 02</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#">Shop</a>
                <ul>
                  <li><a href="shop-left.html">Shop Left Sidebar</a></li>
                  <li><a href="shop-right.html">Shop Right Sidebar</a></li>
                  <li><a href="shop-single.html">Product Single</a></li>
                  <li><a href="shopping-cart.html">Shopping Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#">Blog</a>
                <ul>
                  <li><a href="blog.html">Our Blog</a></li>
                  <li><a href="blog-classic.html">Blog Classic</a></li>
                  <li><a href="blog-detail.html">Blog Detail One</a></li>
                  <li><a href="blog-detail-two.html">Blog Detail Two</a></li>
                  <li><a href="not-found.html">Not Found</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- End FullScreen Menu -->
    
    <!-- Banner Section -->
      <section class="banner-section">
      <div class="main-slider-carousel owl-carousel owl-theme">
              
        <div class="slide">
          <div class="image-layer" style="background-image:url(`+ data.background.value + `)"></div>
          <div class="auto-container">
            <!-- Content Boxed -->
            <div class="content-boxed">
              <div class="inner-boxed">
                <h1>KEEP YOUR BODY <span>FIT & STRONG</span></h1>
                <div class="text">BLACKFIT – fitness health center where your body gets its shape! <br> Start training now to stay fit and healthy all year round!</div>
                <div class="btns-box">
                  <div class="theme-btn purchase-box-btn btn-style-one"><span class="txt">LET’S TRAIN</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div class="slide">
          <div class="image-layer" style="background-image:url(`+ data.background.value + `)"></div>
          <div class="auto-container">
            <!-- Content Boxed -->
            <div class="content-boxed">
              <div class="inner-boxed">
                <h1>KEEP YOUR BODY <span>FIT & STRONG</span></h1>
                <div class="text">BLACKFIT – fitness health center where your body gets its shape! <br> Start training now to stay fit and healthy all year round!</div>
                <div class="btns-box">
                  <div class="theme-btn purchase-box-btn btn-style-one"><span class="txt">LET’S TRAIN</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div class="slide">
          <div class="image-layer" style="background-image:url(`+ data.background.value + `)"></div>
          <div class="auto-container">
            <!-- Content Boxed -->
            <div class="content-boxed">
              <div class="inner-boxed">
                <h1>KEEP YOUR BODY <span>FIT & STRONG</span></h1>
                <div class="text">BLACKFIT – fitness health center where your body gets its shape! <br> Start training now to stay fit and healthy all year round!</div>
                <div class="btns-box">
                  <div class="theme-btn purchase-box-btn btn-style-one"><span class="txt">LET’S TRAIN</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div class="slide">
          <div class="image-layer" style="background-image:url(`+ data.background.value + `)"></div>
          <div class="auto-container">
            <!-- Content Boxed -->
            <div class="content-boxed">
              <div class="inner-boxed">
                <h1>KEEP YOUR BODY <span>FIT & STRONG</span></h1>
                <div class="text">BLACKFIT – fitness health center where your body gets its shape! <br> Start training now to stay fit and healthy all year round!</div>
                <div class="btns-box">
                  <div class="theme-btn purchase-box-btn btn-style-one"><span class="txt">LET’S TRAIN</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      
      </div>
      
      <!--Scroll Dwwn Btn-->
          <div class="mouse-btn-down scroll-to-target" data-target=".testimonial-section">
        <span class="icon"><img src="images/icons/scroll.png" alt="" /></span>
      </div>
      
    </section>
    <!-- End Banner Section -->
    
    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="auto-container">
        <div class="inner-container">
          <span class="quote-left flaticon-quote-3"></span>
          <span class="quote-right flaticon-quote-4"></span>
            
          <!-- Testimonial Block -->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="text">`+ data.testimonial.value + `</div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
    <!-- End Testimonial Section -->
    
    <!-- Services Section -->
    <section class="services-section">
      <div class="outer-container">
        <div class="clearfix">
          
          <!-- Service Block -->
          <div class="service-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <a href="body-builder.html" class="overlay-link"></a>
                <img src="https://via.placeholder.com/480x703" alt="" />
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h4><a href="body-builder.html">FITNESS</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Service Block -->
          <div class="service-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <a href="body-builder.html" class="overlay-link"></a>
                <img src="https://via.placeholder.com/480x703" alt="" />
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h4><a href="body-builder.html">BODYBUILDING</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Service Block -->
          <div class="service-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <a href="body-builder.html" class="overlay-link"></a>
                <img src="https://via.placeholder.com/480x703" alt="" />
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h4><a href="body-builder.html">CROSSFIT</a></h4>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          <!-- Service Block -->
          <div class="service-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <a href="body-builder.html" class="overlay-link"></a>
                <img src="https://via.placeholder.com/480x703" alt="" />
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h4><a href="body-builder.html">CARDIO</a></h4>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <!-- End Services Section -->
    
    <!-- We Are Section -->
    <section class="we-are-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>WHO</span> We Are</h2>
          <div class="text">`+ data.whoweare.value.replace('\n', '<br>') + `</div>
        </div>
        
        <!--Video Box-->
        <div class="video-box">
          <figure class="video-image">
            <img src="http://i3.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="">
          </figure>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="lightbox-image overlay-box"><span><img src="images/icons/play-icon.png" alt="" /><i class="ripple"></i></span></a>
        </div>
        
      </div>
    </section>
    <!-- End We Are Section -->
    
    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="outer-container">
        <div class="row clearfix">
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gallery Block -->
          <div class="gallery-block">
            <div class="inner-box">
              <div class="image">
                <img src="https://via.placeholder.com/320x320" alt="" />
                <a class="overlay-link" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                <!-- Overlay Box -->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <a class="plus" href="https://via.placeholder.com/932x932" data-fancybox="images" data-caption=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <!-- End Gallery Section -->
    
    <!-- Counter Section -->
    <section class="counter-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>why</span> choose us</h2>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        
        <!-- Fact Counter -->
        <div class="fact-counter">
          <div class="row clearfix">
  
            <!-- Column -->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="content">
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="3000" data-stop="12">0</span>
                  </div>
                  <div class="counter-title">Training Programs</div>
                </div>
              </div>
            </div>
  
            <!-- Column -->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="content">
                  <div class="count-outer count-box alternate">
                    <span class="count-text" data-speed="5000" data-stop="14">0</span>
                  </div>
                  <div class="counter-title">Years Experience</div>
                </div>
              </div>
            </div>
  
            <!-- Column -->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div class="content">
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="5000" data-stop="357">0</span>
                  </div>
                  <div class="counter-title">Happy clients</div>
                </div>
              </div>
            </div>
  
            <!-- Column -->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div class="content">
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="3500" data-stop="14">0</span>
                  </div>
                  <div class="counter-title">Best Trainers</div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
        
      </div>
    </section>
    <!-- End Counter Section -->
    
    <!-- Pricing Section -->
    <section class="pricing-section" style="background-image: url(https://via.placeholder.com/1920x1092)">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>Program</span> Pricing</h2>
        </div>
        <div class="row clearfix">
          
          <!-- Pricing Block -->
          <div class="price-block col-lg-4 col-md-4 col-sm-12">
            <div class="side-text">STANDART</div>
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon"><img src="images/icons/price-1-icon.svg" alt="" /></span>
              </div>
              <ul class="price-list">
                <li class="hide">Membership Card</li>
                <li>Health and Fitness Tips</li>
                <li>Personal Health Solution</li>
                <li>Diet Plan Included</li>
                <li class="hide">6 Days a Week</li>
                <li class="hide">Zumba Classes</li>
              </ul>
              <div class="price">$100<span>Per Month</span></div>
              <div class="theme-btn btn-style-one purchase-box-btn"><span class="txt">PURCHASE NOW</span></div>
            </div>
          </div>
          
          <!-- Pricing Block -->
          <div class="price-block col-lg-4 col-md-4 col-sm-12">
            <div class="side-text">PROFESSIONAL</div>
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon"><img src="images/icons/price-2-icon.svg" alt="" /></span>
              </div>
              <ul class="price-list">
                <li>Membership Card</li>
                <li>Health and Fitness Tips</li>
                <li>Personal Health Solution</li>
                <li>Diet Plan Included</li>
                <li class="hide">6 Days a Week</li>
                <li class="hide">Zumba Classes</li>
              </ul>
              <div class="price">$150<span>Per Month</span></div>
              <div class="theme-btn btn-style-one purchase-box-btn"><span class="txt">PURCHASE NOW</span></div>
            </div>
          </div>
          
          <!-- Pricing Block -->
          <div class="price-block col-lg-4 col-md-4 col-sm-12">
            <div class="side-text">ULTIMATE</div>
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="icon-box">
                <span class="icon"><img src="images/icons/price-3-icon.svg" alt="" /></span>
              </div>
              <ul class="price-list">
                <li>Membership Card</li>
                <li>Health and Fitness Tips</li>
                <li>Personal Health Solution</li>
                <li>Diet Plan Included</li>
                <li>6 Days a Week</li>
                <li>Zumba Classes</li>
              </ul>
              <div class="price">$200<span>Per Month</span></div>
              <div class="theme-btn btn-style-one purchase-box-btn"><span class="txt">PURCHASE NOW</span></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <!-- End Pricing Section -->
    
    <!-- Coaches Section -->
    <section class="coaches-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>Our</span> Coaches</h2>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
      </div>
      
      <div class="four-item-carousel owl-carousel owl-theme">
          
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">John</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">JOHN <br> ABRAHAM</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">DONALD</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">DONALD</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">MONICA</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">MONICA</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">JENNIFER</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">JENNIFER</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">John</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">JOHN <br> ABRAHAM</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">DONALD</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">DONALD</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">MONICA</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">MONICA</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Coach Block -->
        <div class="coach-block">
          <div class="inner-box">
            <div class="image">
              <img src="https://via.placeholder.com/480x703" alt="" />
              <!-- Overlay Box -->
              <div class="overlay-box">
                <a href="trainer.html" class="overlay-link"></a>
                <div class="overlay-inner">
                  <div class="content">
                    <h4><a href="blog-detail.html">JENNIFER</a></h4>
                  </div>
                </div>
              </div>
              <!-- Overlay Box Two -->
              <div class="overlay-box-two">
                <a href="trainer.html" class="overlay-link-two"></a>
                <div class="content">
                  <h5><a href="blog-detail.html">JENNIFER</a></h5>
                  <div class="text">8 years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                  <!-- Social Box -->
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
    <!-- End Coaches Section -->
    
    <!-- Insta Section -->
    <section class="calculator-section">
      <div class="embedsocial-hashtag" data-ref="0d012300b3a4509178646c1f3b5063fbcf82263f" ><a class="feed-powered-by-es" href="https://embedsocial.com/products/embedfeed/" target="_blank" title="Powered by EmbedSocial">Powered by EmbedSocial<span>→</span></a></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>
    </section>
    <!-- End Calculator Section -->
    
    <!-- Testimonial Section Two -->
    <section class="testimonial-section-two">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>WHAT OUR</span><br>CLIENTS SAY</h2>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        
        <div class="testimonial-outer">
          
                <!-- Client Testimonial Carousel -->
                  <div class="client-testimonial-carousel owl-carousel owl-theme">
                  
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"`+data.test1.value+`”</div>
                <div class="author-info">
                  <div class="author-name">`+data.test1.extra+`</div>

                </div>
                          </div>
                      </div>
                      
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"`+data.test2.value+`”</div>
                <div class="author-info">
                  <div class="author-name">`+data.test2.extra+`</div>

                </div>
                          </div>
                      </div>
                      
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"`+data.test3.value+`”</div>
                <div class="author-info">
                  <div class="author-name">`+data.test3.extra+`</div>

                </div>
                          </div>
                      </div>

                  </div>
          
              </div>
        
      </div>
    </section>
    <!-- End Testimonial Section -->
    
    <!-- Main Footer -->
      <footer class="main-footer" style="background-image:url(https://via.placeholder.com/710x712)">
      <div class="auto-container">
            <!-- Widgets Section -->
              <div class="widgets-section">
                <div class="row clearfix">
                    
                      <!-- Big Column -->
                      <div class="big-column col-lg-6 col-md-12 col-sm-12">
                          <div class="row clearfix">
                
                <!--Footer Column-->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                  <div class="footer-widget logo-widget">
                    <div class="logo">
                                        <a href="index.html"><img src="`+ data.logosmallest.value + `" alt="" /></a>
                                      </div>
                    <!-- Footer Mobile Logo -->
                    <div class="footer-mobile-logo">
                      <a href="index.html"><img src="`+ data.logosmallest.value + `" alt="" title=""></a>
                    </div>
                    <ul class="info-list">
                      <li><span>Address:</span>23 Maple St, Roswell, GA, USA</li>
                      <li><span>Phones:</span>
                      <a href="tel:1-123-456-78-89">`+ data.phone.value + `</a><br>
                      </li>
                      <li><span>Working Hours:</span>`+ data.hours.value + `</li>
                      <li><span>Email:</span><a href="mailto:`+ data.email.value + `">` + data.email.value + `</a></li>
                      <li class="social-links"><span>Our Socials:</span>
                        <a href="https://www.instagram.com/crossfit_theforge/" class="fa fa-instagram"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!--Footer Column-->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                  <div class="footer-widget news-widget">
                    <div class="widget-content">
                      
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            <!-- Big Column -->
                      <div class="big-column col-lg-6 col-md-12 col-sm-12">
                          <div class="row clearfix">
                
                <!-- Footer Column -->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">

                </div>
                
                <!--Footer Column-->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                  
                    
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="copyright">`+ data.bottommosttext.value + `</div>
        </div>
      
      </div>
    </footer>
    
  </div>
  <!--End pagewrapper-->
  
  <!--Scroll to top-->
  <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
  
  <!-- Purchase Popup -->
  <div id="purchase-popup" class="purchase-popup">
    <div class="close-search theme-btn"><span>Close</span></div>
    <div class="popup-inner">
      <div class="overlay-layer"></div>
      
        <div class="purchase-form">
        <div class="sec-title centered">
          <h2><span>GET FREE</span> CONSULTATION</h2>
          <div class="text">If you need of a Personal Trainer, Fitness Instructor advice, or a healthy <br> living product review, please feel free to contact us</div>
        </div>
            
        <!-- Default Form -->
        <form method="post" action="contact.html">
          <div class="row clearfix">
          
            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" name="name" placeholder="Name" required>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="email" name="email" placeholder="Email" required>
            </div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
              <input type="text" name="subject" placeholder="Subject" required>
            </div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea class="darma" name="message" placeholder="Your Message"></textarea>
            </div>
            
            <div class="form-group text-center col-lg-12 col-md-12 col-sm-12">
              <span class="data">* Personal data.will.value be encrypted</span>
              <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="txt">SEND MESSAGE</span></button>
            </div>
            
          </div>
        </form>
        
              
          </div>
          
      </div>
  </div>
  `+ typeform + `
  <script src="js/jquery.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
  <script src="js/jquery.fancybox.js"></script>
  <script src="js/appear.js"></script>
  <script src="js/owl.js"></script>
  <script src="js/wow.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script src="js/script.js"></script>
  
  </body>
  </html>`

  return html
}

export async function getServerSideProps() {
  const html = await genHTML();

  return {
    props: {
      html,
      revalidate: 1,
    },
  };
}
