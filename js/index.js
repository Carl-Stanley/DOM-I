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
    "address" : "123 Way 456 Street Somewhere, USA",
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

// Top Navigation section #1
let nav = Array.from(document.querySelectorAll('nav a'));

let navigation = nav.map((element, arr) => {
  element.innerHTML = siteContent.nav[`nav-item-${arr + 1}`]
  element.style.color = "darkgrey";
  element.style.fontSize = '.95rem';
});

// Top right big image. #2
const topRoundImg = document.getElementById("cta-img");
topRoundImg.setAttribute('src', siteContent["cta"]["img-src"]);

// setting up the DOM is Awesome stuff.... #3
let DOMAWE = document.querySelector("h1");
DOMAWE.innerHTML = siteContent.cta['h1'];
DOMAWE.style.color = 'black'; 
DOMAWE.style.fontSize = '70px';

// The get Started button. #4
let getStartedbtn = document.querySelector("button");
getStartedbtn.innerHTML = siteContent.cta['button'];

// middle image between paragraphs #5
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Paragraph and Middle Header Sections #6 



// contact section # 7 
const contact = document.getElementsByClassName("contact")[0];
const breaks = /Street/gi;
const addressText = siteContent.contact.address.replace(breaks, "Street<p>");
contact.children[0].innerHTML = siteContent.contact["contact-h4"];
contact.children[1].innerHTML = addressText;
contact.children[2].innerHTML = siteContent.contact.phone;
contact.children[3].innerHTML = siteContent.contact.email;



// footer section # 8
const footer = document.querySelector("footer p");
footer.innerHTML = siteContent.footer["copyright"];
footer.style.fontSize = '.95rem';

