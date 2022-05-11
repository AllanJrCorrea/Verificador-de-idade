function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >=0 && idade < 10) {
               // Criança
               img.setAttribute('src', 'img/menino.png')
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'img/jovemhomem.png')
           } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'img/homemadulto.png')
           } else {
               // Idoso
               img.setAttribute('src', 'img/idosohomem.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'img/menina.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'img/jovemmulher.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'img/mulheradulta.png')
        } else {
            // Idoso
            img.setAttribute('src', 'img/idosa.png')
        }
       }
       res.style.textAlign ='center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }


}