// start site content def
const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM<br> Is<br> Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street<br> Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  
  // My code 
  
  // Top Navigation section 
  let nav = Array.from(document.querySelectorAll('nav a'));
  let navigation = nav.map((element, arr) => {
    element.innerHTML = siteContent.nav[`nav-item-${arr + 1}`]
    element.style.color = "green";
    element.style.fontSize = '.95rem';
  });
  
  // Adding AppendChild()
  let newLink = document.createElement("a");
  const nav2 = document.querySelector('nav');
  newLink.innerHTML = 'Support';
  newLink.setAttribute('href','#');
  newLink.style.color = 'green';
  newLink.style.fontSize = '.95rem';
  nav2.appendChild(newLink);
  
  // Adding prePend()
  let newLink2 = document.createElement("a");
  const nav3 = document.querySelector('nav');
  newLink2.innerHTML = 'Home';
  newLink2.setAttribute('href','#');
  newLink2.style.color = 'green';
  newLink2.style.fontSize = '.95rem';
  nav3.prepend(newLink2);
  
  // Top right big image. 
  const topRoundImg = document.getElementById("cta-img");
  topRoundImg.setAttribute('src', siteContent["cta"]["img-src"]);
  
  // setting up the DOM is Awesome stuff.... 
  let DOMAWE = document.querySelector("h1");
  DOMAWE.innerHTML = siteContent.cta['h1'];
  DOMAWE.style.color = 'black'; 
  DOMAWE.style.fontSize = '70px';
  
  // The get Started button. 
  let getStartedbtn = document.querySelector("button");
  getStartedbtn.innerHTML = siteContent.cta['button'];
  
  // middle image between paragraphs 
  let middleImage = document.getElementById("middle-img");
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  // Paragraph and Middle Header Sections  
  
  const mainContentArray = siteContent["main-content"];
    
  const mainContentH4elements = document.querySelectorAll('.text-content h4');
  
  const mainContentPelements = document.querySelectorAll('.text-content P');

  // Features 
  mainContentH4elements[0].innerHTML = mainContentArray["features-h4"];
  mainContentPelements[0].innerHTML = mainContentArray["features-content"];

  // About 
  mainContentH4elements[1].innerHTML = mainContentArray["about-h4"];
  mainContentPelements[1].innerHTML = mainContentArray["about-content"];
    
  //Services
  mainContentH4elements[2].innerHTML = mainContentArray["services-h4"];
  mainContentPelements[2].innerHTML = mainContentArray["services-content"];

  // Product 
  mainContentH4elements[3].innerHTML = mainContentArray["product-h4"];
  mainContentPelements[3].innerHTML = mainContentArray["product-content"];
  
  // Vision
  mainContentH4elements[4].innerHTML = mainContentArray["vision-h4"];
  mainContentPelements[4].innerHTML = mainContentArray["vision-content"];

  // contact section  
  const contact = document.getElementsByClassName("contact")[0];
  const addressText = siteContent.contact.address
  contact.children[1].innerHTML = addressText;
  contact.children[2].innerHTML = siteContent.contact.phone;
  contact.children[3].innerHTML = siteContent.contact.email;
  
  // footer section 
  const footer = document.querySelector("footer p");
  footer.innerHTML = siteContent.footer["copyright"];
  footer.style.fontSize = '.95rem';
  
  
  




  