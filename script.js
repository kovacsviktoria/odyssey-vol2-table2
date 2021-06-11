function loadEvent() {  
    //added menu list items
    let menuContainer = `<div id="menu-container"></div>`;
    let menuBtn = document.getElementById("menu-btn");

    menuBtn.insertAdjacentHTML("beforeend", menuContainer);

    const menuList = [
        {"name": "Home", "link": "#welcome"},
        {"name": "About", "link": "#about"},
        {"name": "Map", "link": "#map"},
        {"name": "Gallery", "link": "#gallery-container"}
    ];

    for (let listItem of menuList){
        let link = `
            <a href="${listItem.link}">${listItem.name}</a>
        `;
        document.getElementById("menu-container").insertAdjacentHTML("beforeend", link);        
    }

    //click event menu
    function toggleMenuBtn (click){
        document.getElementById("menu-container").classList.toggle("active");
        menuBtn.classList.toggle("active")
        let body = document.querySelector("body");
        //document.querySelector("body").style.overflow = "hidden";
        
        if(body.style.overflow === ""){
            body.style.overflow = "hidden";
            document.getElementById("menu-icon").classList.add("open");
        }
        else {
            body.style.overflow = "";
            document.getElementById("menu-icon").classList.remove("open");
        }
    };

    menuBtn.addEventListener("click", toggleMenuBtn);
   
    //gallery slider
    const galleryContainer = document.getElementById("gallery-container");
    const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 25"><polygon points="0 25 0 0 20 12.5 0 25"/></svg>`;
    const sun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle class="sun" cx="15" cy="15" r="10"/><circle class="sunbeam" cx="15" cy="15" r="14"/></svg>`;

    galleryContainer.insertAdjacentHTML("beforeend", `
    <div class="swiper-container">

    <div class="swiper-wrapper"></div>

    </div>
    <div id="pagination-container">
        <div class="swiper-button-prev-unique">${arrowSvg}</div>
        <div class="swiper-pagination-unique">${sun}</div>
        <div class="swiper-button-next-unique">${arrowSvg}</div>
    </div>
    `)

    const images = ["cars", "surfing", "teapot"];
    const targetSwiper = document.querySelector(".swiper-wrapper");

    for (const image of images) {
        const slide =`<div class="swiper-slide"><img src="png-files/${image}.png" /></div>`;

        targetSwiper.insertAdjacentHTML("beforeend", slide)
    }

    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",

      
        // If we need pagination
        pagination: {
            el: ".swiper-pagination-unique",
            clickable: true,
            
            renderBullet: function (index, className) {
                return `
                <svg class="swiper-pagination-bullet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <circle class="sun" cx="15" cy="15" r="10"/><circle class="sunbeam" cx="15" cy="15" r="14"/>
                </svg>
                `;
          },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        },

    });

    // Route list 

    const locations = [
        "West Coast, Australia", 
        "Kalutara, Sri Lanka", 
        "Garden Route", 
        "South Africa", 
        "Faro, Portugal",
        "Sandvik, Iceland",
        "Blackbeard Island, Georgia USA",
        "Bocas Del Toro, Panama",
        "Praia da Vila, Brasil",
        "Punta de Lobos, Chile",
        "Tahiti, French Polynesia",
        "Hawai, USA",
        "British Columbia, Canada",
        "Kamchatka, Russia",
        "Opua, New Zealand"]

    const locationHolder = document.getElementById("location-holder");
        

       for (let i=0; i < locations.length; i++) {
           locations[i] = `<button>${locations[i]}</button>`;
           console.log(locations[i])
       };
        
       locationHolder.insertAdjacentHTML("beforeend", locations.join(`<span class="no-wrap"> •->• <span>`))


        // " •->• "

    // Footer / Social reapeating element created with for loop

    const social = document.getElementById("social");

    const socialIcons = [
        {"icon":"mail", "link": "mailto:example@gmail.com"}, 
        {"icon": "facebook", "link": "https://www.facebook.com"} ,
        {"icon": "insta", "link": "https://www.instagram.com"}
    ];

    const svgFolder = "./svg-files/";
    for(const socialIcon of socialIcons) {
        social.insertAdjacentHTML("beforeend", 
        `
            <a href="${socialIcon.link}">
                <img src="${svgFolder}${socialIcon.icon}.svg" />
            </a>
        `);
    }
};

window.addEventListener("load", loadEvent);

/* window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  }); */