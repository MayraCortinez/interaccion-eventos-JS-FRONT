window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = 'aquamarine'
    })



    
    let estadoSecreto = 0;
    let letra = []
    document.onkeydown = 
    function mensaje(e){
       
        const secreto = e.key.toLowerCase();
        console.log(secreto);
    
        switch (secreto) {
            
            case 's':
                ++estadoSecreto;
              letra.push(secreto)
                break;
            case 'e':
                if(estadoSecreto = 1){
                    letra.push(secreto)
                    ++estadoSecreto;
                }
            break;
            case 'c':
                if(estadoSecreto = 2){
                    letra.push(secreto)
                    ++estadoSecreto;
                }
            break;
            case 'r':
                if(estadoSecreto = 3){
                    letra.push(secreto)
                    ++estadoSecreto;
                }
            break;
            case 'e':
                if(estadoSecreto = 4){
                    letra.push(secreto)
                    ++estadoSecreto;
                }
            break;
            case 't':
                if(estadoSecreto = 5){
                    letra.push(secreto)
                    ++estadoSecreto;
                }
            break;
            case 'o':
                if(estadoSecreto = 6){
                    letra.push(secreto)
                    estadoSecreto = 0;
                    alert('SECRETO MáGICO')
                }
            break;
            
            default:
                estadoSecreto = 0
                letra = []
                console.log(estadoSecreto);
                console.log(letra);
                break;
        }
    
    }
    
    }