function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        //Bom dia! 
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#f1c485'

    } else if (hora >= 12 && hora <= 18){
        // Boa tarde!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#faa40f'

    } else{
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#b40635'
    }
}





