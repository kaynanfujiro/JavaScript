function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

  
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'assets/Fotos/manha.png'
        document.body.style.background = '#84c6f7'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'assets/Fotos/tarde.png'
        document.body.style.background = '#fec9a6'
    } else {
        //BOA NOITE!
        img.src = 'assets/Fotos/noite.png'
        document.body.style.background = '#153c8a'
    }
}