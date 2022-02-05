var mensagem = document.getElementById("mensagem")
var imagem = document.getElementById("imagem")
var bom = document.getElementById('bom')
var data = new Date()
var hora =  data.getHours()
var minutos = data.getMinutes()

{mensagem.innerHTML = `Agora são ${hora}:${minutos}`}

function horaagora(){     
    if(hora >= 12 && hora < 18 ){
        bom.innerHTML = `Boa Tarde!`
        imagem.src="tarde.png"
        document.body.style.background = "yellow"
        
    }  else if( hora >= 18 || hora <= 5) {
         bom.innerHTML =`Bom noite!`
         imagem.src="noite.png"
        document.body.style.background = "black"
    
        } else if( hora < 12){
        bom.innerHTML = `Boa dia!`
        imagem.src="manha.png"
        document.body.style.background = "green"
    }
   
}