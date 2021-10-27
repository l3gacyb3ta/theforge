import getPostData from "../lib/airtable";

export default function Home({ html }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}

/**
 * Formats a string with <br> instead of \n
 * @param {string} string - The string you want to format with breaklines
 */
function format(string) {
  return string
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>")
    .replace("\n", "<br>");
}

/**
 * Generates the HTML for this page using airtable data
 */
async function genHTML() {
  /**
   * Minified airtable data.
   * @type {object}
   */
  const posts = await getPostData();

  /**
   * The actual, easy to get at data for the site
   * @type {object}
   */
  var data = {};

  // loads raw data into an object
  for (const rec in posts) {
    data[posts[rec].fields.id] = {
      value: posts[rec].fields.value,
      extra: posts[rec].fields.extra,
    };
  }

  /**
   * The string I use to determine if having a shop is something we need in the menu.
   * @type {string}
   */
  const haveshop = data.haveshop.value;

  if (haveshop == "true") {
    /**
     * If the shop exists then, we will load in the shop link.
     * @type {string}
     */
    var shop = '<li><a href="' + data.shop.value + '">Shop</a></li>';
  } else {
    var shop = "";
  }

  /**
   * The html data that is gonna be generated using Airtable data. I am sorry for any future readers.
   * @type {string}
   */
  const html =
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>` +
    data.title.value +
    `</title>
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
              <div class="logo"><a href="#"><img src="` +
    data.logosmall.value +
    `" alt="" title=""></a></div>
            </div>
                      
            <!-- Logo -->
            <div class="mobile-logo pull-left">
              <a href="#" title=""><img src="` +
    data.logosmallest.value +
    `" alt="" title=""></a>
            </div>
            
            <!-- Header Social Box -->
            <div class="header-social-box clearfix">
              <a href="` +
    data.instagram.value +
    `" class="fa fa-instagram"></a>
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
                  
                    <li><a href="#">Home</a></li>
                    <li><a href="#hours">Schedule</a></li>
                    ` +
    shop +
    `
                    <li><a href="mailto:` +
    data.email.value +
    `">Contact us</a></li>
                    <li><a href="https://www.gymdetails.net/crossfittheforge/" target="_blank">Pricing</a></li>
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
                      <a href="#" title=""><img height=20 src="` +
    data.logosmallest.value +
    `" alt="" title=""></a>
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
                  <div class="nav-logo"><a href="#"><img src="` +
    data.logosmallest.value +
    `" alt="" title=""></a></div>
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
              <li><a href="#">Home</a></li>
              ` +
    shop +
    `
              <li><a href="` +
    data.email.value +
    `">Contact us</a></li>
              <li><a href="https://www.gymdetails.net/crossfittheforge/" target="_blank">Pricing</a></li>
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
          <div class="image-layer" style="background-image:url(` +
    data.background.value +
    `)"></div>
          <div class="auto-container">
            <!-- Content Boxed -->
            <div class="content-boxed">
              <div class="inner-boxed">
                <h1><span>` +
    data.bigtext.value +
    `</span></h1>
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
    ` +
    data.typeform.value +
    `
    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="auto-container">
        <div class="inner-container">
          <span class="quote-left flaticon-quote-3"></span>
          <span class="quote-right flaticon-quote-4"></span>
            
          <!-- Testimonial Block -->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="text">` +
    data.testimonial.value +
    `</div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
    <!-- End Testimonial Section -->

    <section class="we-are-section">
      <div class="auto-container">
        <!-- Content Boxed -->
        <div class="content-boxed sec-title">
          <h2>EVENTS</h2>
          <div class="inner-boxed">
            ` +
    format(data.events.value) +
    `
          </div>
        </div>
      </div>
    </section>

    <!-- We Are Section -->
    <section class="we-are-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>WHO</span> We Are</h2>
          <div class="text">` +
    format(data.whoweare.value) +
    `</div>
        </div>
        
        
        
      </div>
    </section>
    <!-- End We Are Section -->
    
    <!-- Hours Section -->
    <section id="hours">
      <div class="auto-container">
        <h2><span>Schedule</span></h2>
        ` /*<p>`+ format(data.hours.value) + `</p> */ +
    `
        <table class="table">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 AM<br><br>8 AM<br><br>10 AM<br><br>12 PM<br><br>5 PM<br><br>6 PM<br></td>
              <td>6 AM<br><br>8 AM<br><br>10 AM<br><br>12 PM<br><br>5 PM<br><br>6 PM<br></td>
              <td>6 AM<br><br>8 AM<br><br>10 AM<br><br>12 PM<br><br>5 PM <br><br>6 PM<br></td>
              <td>6 AM<br><br>8 AM<br><br>10 AM<br><br>12 PM<br><br>5 PM<br></td>
              <td>6 AM<br><br>8 AM<br><br>10 AM<br><br>12 PM<br><br>4:30 PM<br><br>5:30 PM<br></td>
              <td>9 AM<br><br>10 AM<br></td>
              <td>9 AM<br><br>10 AM<br></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- End Hours Section -->

    <!-- Gallery Section -->
    <section class="gallery-section">
    </section>
    <!-- End Gallery Section -->
    
    <!-- Pricing Section -->
    <section class="pricing-section">
    </section>
    <!-- End Pricing Section -->
    
    <!-- Add coaches later -->
    
    
    <!-- Testimonial Section Two -->
    <section class="testimonial-section-two pb-0">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2><span>WHAT OUR</span><br>CLIENTS SAY</h2>
        </div>
        
        <div class="testimonial-outer">
          
          
          <!--Product Thumbs Carousel-->
                  <div class="client-thumb-outer">
                      <div class="client-thumbs-carousel owl-carousel owl-theme">
                          <div class="thumb-item">
                              <figure class="thumb-box"><img src="https://svg-clipart.com/svg/white/KwYrcuM-white-thumbs-up-vector.svg" alt=""></figure>
                          </div>
                          <div class="thumb-item">
                              <figure class="thumb-box"><img src="https://svg-clipart.com/svg/white/KwYrcuM-white-thumbs-up-vector.svg" alt=""></figure>
                          </div>
                          <div class="thumb-item">
                              <figure class="thumb-box"><img src="https://svg-clipart.com/svg/white/KwYrcuM-white-thumbs-up-vector.svg" alt=""></figure>
                          </div>
                      </div>
                  </div>
          
                <!-- Client Testimonial Carousel -->
                  <div class="client-testimonial-carousel owl-carousel owl-theme">
                  
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"` +
    data.test1.value +
    `”</div>
                <div class="author-info">
                  <div class="author-name">` +
    data.test1.extra +
    `</div>

                </div>
                          </div>
                      </div>
                      
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"` +
    data.test2.value +
    `”</div>
                <div class="author-info">
                  <div class="author-name">` +
    data.test2.extra +
    `</div>

                </div>
                          </div>
                      </div>
                      
                      <!--Testimonial Block -->
                      <div class="testimonial-block-two">
                          <div class="inner-box">
                <span class="quote-left flaticon-quote-3"></span>
                <span class="quote-right flaticon-quote-4"></span>
                <div class="text">"` +
    data.test3.value +
    `”</div>
                <div class="author-info">
                  <div class="author-name">` +
    data.test3.extra +
    `</div>

                </div>
                          </div>
                      </div>

                  </div>
          
              </div>
        
      </div>
    </section>
    <!-- End Testimonial Section -->
    
    <!-- Insta Section -->
    <section class="calculator-section m-n8">
      <div class="embedsocial-hashtag" data-ref="0d012300b3a4509178646c1f3b5063fbcf82263f" ><a class="feed-powered-by-es" href="https://embedsocial.com/products/embedfeed/" target="_blank" title="Powered by EmbedSocial">Powered by EmbedSocial<span>→</span></a></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>
    </section>
    <!-- End Insta Section -->

    <!-- Main Footer -->
      <footer class="main-footer" style="background-image:url(` +
    data.logo.value +
    `)">
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
                                        <a href="#"><img src="` +
    data.logosmallest.value +
    `" alt="" /></a>
                                      </div>
                    <!-- Footer Mobile Logo -->
                    <div class="footer-mobile-logo">
                      <a href="#"><img src="` +
    data.logosmallest.value +
    `" alt="" title=""></a>
                    </div>
                    <ul class="info-list">
                      <li><span>Address:</span>23 Maple St, Roswell, GA, USA</li>
                      <li><span>Phone:</span>
                      <a href="tel:1-123-456-78-89">` +
    data.phone.value +
    `</a><br>
                      </li>
                      <li><span>Email:</span><a href="mailto:` +
    data.email.value +
    `">` +
    data.email.value +
    `</a></li>
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
          <div class="copyright">` +
    data.bottommosttext.value +
    `</div>
        </div>
      
      </div>
    </footer>
    
  </div>
  <!--End pagewrapper-->
  
  <!--Scroll to top-->
  <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
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
  <script data-respect-dnt async src="https://cdn.splitbee.io/sb.js"></script>
  
  </body>
  </html>`;

  return html;
}

export async function getServerSideProps() {
  /**
   * Html from the html data generator function
   * @type {string}
   */
  const html = await genHTML();

  return {
    props: {
      html,
      revalidate: 1,
    },
  };
}
