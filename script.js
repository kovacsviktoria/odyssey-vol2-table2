function loadEvent() {  
    //added menu list items
    let menuContainer = `<div id="menuContainer"></div>`;
    let menuBtn = document.getElementById("menuBtn");

    menuBtn.insertAdjacentHTML("beforeend", menuContainer);

    const menuList = [
        {"name": "Menu1", "link": "url"},
        {"name": "Menu2", "link": "url"},
        {"name": "Menu3", "link": "url"},
        {"name": "Menu4", "link": "url"}
    ];

    for (let listItem of menuList){
        let link = `
            <a href="${listItem.link}">${listItem.name}</a>
        `;
        document.getElementById("menuContainer").insertAdjacentHTML("beforeend", link);        
    }

    //click event menu
    function toggleMenuBtn (click){
        document.getElementById("menuContainer").classList.toggle("active");
        let body = document.querySelector("body");
        //document.querySelector("body").style.overflow = "hidden";
        
        if(body.style.overflow === ""){
            body.style.overflow = "hidden";
            document.getElementById("menuIcon").classList.add("open");
        }
        else {
            body.style.overflow = "";
            document.getElementById("menuIcon").classList.remove("open");
        }
    };

    menuBtn.addEventListener("click", toggleMenuBtn);
   
    //gallery slider
    const galleryContainer = document.getElementById("galleryContainer");

    galleryContainer.insertAdjacentHTML("beforeend", `
    <div class="swiper-container">

    <div class="swiper-wrapper"></div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

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
          el: ".swiper-pagination",
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

    });

};

window.addEventListener("load", loadEvent);

/* window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  }); */