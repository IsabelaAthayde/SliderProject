const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const imgList = [
    "tomorrow",
    "scarlet Heart",
    "woo Young Woo",
    "goblin",
    "okay Okay",
    "reply 1988",
    "the King"
];

const imgContainer = document.querySelector("#imgContainer");
const img = document.querySelector("#imgContainer img");

rightBtn.addEventListener("click", () => {
    scrollRight()
});

leftBtn.addEventListener("click", () => {
    scrollLeft()
});


function scrollRight() {
    let currImg = -1;
    currImg = imgList.indexOf(img.getAttribute('alt'));

    if(currImg > 5 || currImg < 0) {
        currImg = 0;
        img.setAttribute("src", `./src/${imgList[currImg]}.jpg`)
        img.setAttribute("alt", imgList[currImg])
    }  else {
        let passImg = imgList[currImg + 1];
        img.setAttribute("src", `./src/${passImg}.jpg`)
        img.setAttribute("alt", passImg)
    }
}

function scrollLeft() {
   let currImg = imgList.indexOf(img.getAttribute('alt'));
    if(currImg == 0) {
        currImg = 6;
        
        img.setAttribute("src", `./src/${imgList[currImg]}.jpg`)
        img.setAttribute("alt", imgList[currImg])
    }  else {
        let passImg = imgList[currImg - 1];
        img.setAttribute("src", `./src/${passImg}.jpg`)
        img.setAttribute("alt", passImg)
    }
}

