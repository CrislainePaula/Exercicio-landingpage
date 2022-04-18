let menu = document.querySelector('#menu-bars');
let header = document.querySelector('.container-nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

function vermais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnVermais=document.getElementById("btnVerMais");


    if(pontos.style.display === "none"){
      pontos.style.display="inline";
      maisTexto.style.display="none";
      btnVermais.innerHTML="Ver mais";


    }else{
      pontos.style.display="none";
      maisTexto.style.display="inline";
      btnVermais.innerHTML="Ver menos";
    }
}



   
   var buttomcriar=document.getElementById("buttomcriar");

   buttomcriar.addEventListener("click", function(){
    var forms=document.getElementById("forms");
  

    if(forms.style.display === "none"){
      forms.style.display = "inline";
     
    }else{
      forms.style.display = "none";
      
    }
   })

   

   var pergunta =document.querySelector('.pergunta');
   var comentarios=document.querySelector('.comentarios-div');

   pergunta.addEventListener('click', function(){

    if(comentarios.style.display === 'none'){
      comentarios.style.display = 'inline';
    }else{
      comentarios.style.display = 'none';
    }
   });