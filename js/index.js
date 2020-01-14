const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "anotha one",
    "nav-item-8": "ANOTHA ONE",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
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

let links = document.querySelectorAll('a')
links[0].textContent = siteContent['nav']['nav-item-1']
links[1].textContent = siteContent['nav']['nav-item-2']
links[2].textContent = siteContent['nav']['nav-item-3']
links[3].textContent = siteContent['nav']['nav-item-4']
links[4].textContent = siteContent['nav']['nav-item-5']
links[5].textContent = siteContent['nav']['nav-item-6']

links.forEach(item=>{
  item.style.color = 'green'
})

let dad = document.querySelector('nav')
let new1 = document.createElement('a')
new1.textContent = "anotha one"
new1.style.color = 'green'
dad.appendChild(new1)

let dad1 = document.querySelector('nav')
let new2 = document.createElement('a')
new2.textContent = "ANOTHAONE"
new2.style.color = 'green'
dad.appendChild(new2)

let head = document.querySelector('h1')
head.textContent = siteContent['cta']['h1']
let head1 = document.querySelector('button')
head1.textContent = siteContent['cta']['button']
let img = document.getElementById('cta-img')
img.setAttribute('src', siteContent['cta'] ['img-src'])
let imgmid = document.getElementById('middle-img')
imgmid.setAttribute('src', siteContent['main-content'] ['middle-img-src'])

let h4s = document.querySelectorAll('h4')
h4s[0].textContent = siteContent['main-content']['features-h4']
h4s[1].textContent = siteContent['main-content']['about-h4']
h4s[2].textContent = siteContent['main-content']['services-h4']
h4s[3].textContent = siteContent['main-content']['product-h4']
h4s[4].textContent = siteContent['main-content']['vision-h4']
h4s[5].textContent = siteContent['contact']['contact-h4']


let para = document.querySelectorAll('p')
para[0].textContent = siteContent['main-content']['features-content']
para[1].textContent = siteContent['main-content']['about-content']
para[2].textContent = siteContent['main-content']['services-content']
para[3].textContent = siteContent['main-content']['product-content']
para[4].textContent = siteContent['main-content']['vision-content']
para[5].textContent = siteContent['contact']['address']
para[6].textContent = siteContent['contact']['phone']
para[7].textContent = siteContent['contact']['email']
para[8].textContent = siteContent['footer']['copyright']
























