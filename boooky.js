var po=document.querySelector(".pop_btn")
var over_lay= document.querySelector(".over")
var pop=document.querySelector(".pop")
var cl=document.querySelector(".pop-del")
var po_add = document.querySelector(".pop-add")
var sec=document.querySelector(".section")

// book details

var tit=document.getElementById("name-inp")
var aut=document.getElementById("author-name")
var des=document.getElementById("des")


po.addEventListener("click",function(){

        pop.style.display="block"
        over_lay.style.display="block"

})
cl.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    over_lay.style.display="none"

})
po_add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","card")
    div.innerHTML = `<h2>${tit.value}</h2>
            <h3 style="margin-top: 10px;"><strong>${aut.value}</strong></h3>
            <p style="margin-top: 10px;">${des.value}</p>
            <button class="del" onclick="de(event)">DELETE   
            </button>`
    sec.append(div)
    pop.style.display="none"
    over_lay.style.display="none"
})

function de(event){
    event.target.parentElement.remove()

}



