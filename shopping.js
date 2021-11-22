var btn_add=document.querySelectorAll(".plus-btn");
for(let i=0;i<btn_add.length;i++){
    console.log(btn_add[i]);
    btn_add[i].addEventListener("click",function(){
        if(btn_add[i].nextElementSibling.innerHTML < 10)
           btn_add[i].nextElementSibling.innerHTML++;
           calcul()
        });
}


var btn_min=document.querySelectorAll(".minus-btn");
for(let i=0;i<btn_min.length;i++){
    console.log(btn_min[i]);
    btn_min[i].addEventListener("click",function(){
        if(btn_min[i].previousElementSibling.innerHTML > 0)
        btn_min[i].previousElementSibling.innerHTML--;
        calcul()
        });
}


  
function calcul() {
    var qte=document.querySelectorAll(".span");
    var pru=document.querySelectorAll(".pru");
    var total=document.querySelector("#tot");
    var res=0;
    for(let i=0; i<qte.length;i++){
      res+=Number(qte[i].innerHTML)*Number(pru[i].innerHTML);
    }
    total.innerHTML=res.toFixed(3);
}


var rmvbtn=document.querySelectorAll(".remove-btn");
    for ( let  btn of rmvbtn){
      btn.addEventListener('click', function (){
          btn.parentElement.parentElement.remove()
          calcul()
      })
}

var likbtn=document.querySelectorAll(".like-btn");
    for ( let  heart of likbtn){
      heart.addEventListener('click', function (){
        heart.classList.toggle('heart');
      })
}


