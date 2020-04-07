
    var altura = 0
    var largura = 0
    var vidas = 1
    var tempo = 10

    var criaMosquitoTempo = 1500
    var nivel = window.location.href
    niver = nivel.replace ('?', '')

    if(nivel == 'normal'){
        criaMosquitoTempo = 1500
    }else if(nivel == 'dificil') {
        criaMosquitoTempo = 1000
    }else if(nivel == 'plus') {
        criaMosquitoTempo = 750
    }


    function AjustaTamanho() {
        altura = window.innerHeight
        largura = window.innerWidth
        console.log(altura, largura)
    }
    
    // Utilizamos a função AjustaTamanho, para descobrir quais serão o height e width
    // da tela do usuário.
    AjustaTamanho()   

    var cronometo = setInterval(function(){
        tempo -=1
        if(tempo<0){
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = "vitoria.html"
        }else{
            document.getElementById('cronometro').innerHTML= tempo
        }
        
        
    }, 1000) 
    function posicaoRandomica() {

        // remover mosquito anterior, caso exista.
        if(document.getElementById('mosca')){
            document.getElementById('mosca').remove()

            if(vidas > 3){
                window.location.href = "gameOver.html"
            }else{
                document.getElementById('v' + vidas).src= "../imagens/coracao_vazio.png"
                vidas++ 
            }

        }   

        var posicaoX = Math.floor(Math.random() * largura) - 90
	    var posicaoY = Math.floor(Math.random() * altura) - 90

        // impedir a criação de moscas, em posições negativas.
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        console.log(posicaoX, posicaoY)

        // criando elemento html
        var mosca = document.createElement('img')
        mosca.src = '../imagens/mosca.png'
        mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
        mosca.style.left = posicaoX + 'px'
        mosca.style.top = posicaoY + 'px'
        mosca.style.position = 'absolute'
        mosca.id = 'mosca'
        mosca.onclick = function() {
            this.remove()
        }
        document.body.appendChild(mosca)
    }
    
    

    function tamanhoAleatorio() {
        var classe = Math.floor(Math.random() * 3)

        switch(classe) {
            case 0:
                return 'mosca1'
            case 1: 
                return 'mosca2'
            case 2: 
                return 'mosca3'
        }
    }

    function ladoAleatorio() {
        var classe = Math.floor(Math.random() * 2)

        switch(classe) {
            case 0:
                return 'ladoA'
            case 1: 
                return 'ladoB'
        }
    }