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

    //Click event menu
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
   
};

window.addEventListener("load", loadEvent);

/* window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  }); */