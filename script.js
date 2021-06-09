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
    <div class="swiperContainer">

        <div id="swiperWrapper"></div>

        <div class="swiperPagination"></div>

        <div class="swiperButtonPrev"></div>
        <div class="swiperButtonNext"></div>

    </div>
    `)

    const images = ["cars", "surfing", "teapot"];
    const targetSwiper = document.getElementById("swiperWrapper");

    for (const image of images) {
        const slide =`<div class="swiperSlide"><img src="png-files/${image}.png" /></div>`;

        targetSwiper.insertAdjacentHTML("beforeend", slide)
    }

    const swiper = new Swiper('.swiperContainer', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiperPagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev',
        },

    });

};

window.addEventListener("load", loadEvent);

/* window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  }); */