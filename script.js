for (let i=0;i<2;i++){
    document.querySelectorAll("#select-reward")[i].addEventListener("click",()=>{
        document.querySelector("footer").style.display="flex"
    })
}


document.querySelector("#radio1").addEventListener("click",()=>{
    document.querySelector("#radio1").classList.toggle("dot")
    document.querySelector("#radio1").classList.toggle("radio")
})

document.querySelector("#radio2").addEventListener("click",()=>{
    document.querySelector("#radio2").classList.toggle("dot")
    document.querySelector("#radio2").classList.toggle("radio")
    document.querySelector("#section-footer1").classList.toggle("none-class")
    document.querySelector("#section-footer1").classList.toggle("section-footer")
    document.querySelector("#article-holder2").classList.toggle("article-holder")
    document.querySelector("#article-holder2").classList.toggle("dibs")
})

document.querySelector("#radio3").addEventListener("click",()=>{
    document.querySelector("#radio3").classList.toggle("dot")
    document.querySelector("#radio3").classList.toggle("radio")
    document.querySelector("#section-footer2").classList.toggle("none-class")
    document.querySelector("#section-footer2").classList.toggle("section-footer")
    document.querySelector("#article-holder3").classList.toggle("article-holder")
    document.querySelector("#article-holder3").classList.toggle("dibs")
})

let btnNum = document.querySelectorAll(".section-footer-btn").length

for (let i=0;i<btnNum;i++){
    document.querySelectorAll(".section-footer-btn")[i].addEventListener("click",()=>{
        document.querySelector(".footer-main").style.display="none"
        document.querySelector("#remark").classList.toggle("none-class")
        document.querySelector("#remark").classList.toggle("remark")
    })
}

document.querySelector(".modal-delete-icon").addEventListener("click",()=>{
    document.querySelector("footer").style.display="none"
})

document.querySelector("#got-it").addEventListener("click",()=>{
    document.querySelector("footer").style.display="none"
})

document.querySelector("#hamburger").addEventListener("click",()=>{
    document.querySelector("#close-icon").style.display="inline-block"
    document.querySelector(".hdr-section").style.display="flex"
    document.querySelector("#hamburger").style.display="none"

})

document.querySelector("#close-icon").addEventListener("click",()=>{
    document.querySelector("#hamburger").style.display="inline-block"
    document.querySelector(".hdr-section").style.display="none"
    document.querySelector("#close-icon").style.display="none"
})

