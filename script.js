function loadEvent() {
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
};

window.addEventListener("load", loadEvent);

/* window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  }); */