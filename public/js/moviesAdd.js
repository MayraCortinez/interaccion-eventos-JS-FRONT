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
                letra.push(secreto)
                ++estadoSecreto;
            break;
            case 'c':
                letra.push(secreto)
                ++estadoSecreto;
            break;
            case 'r':
                letra.push(secreto)
                ++estadoSecreto;
            break;
            case 'e':
                letra.push(secreto)
                ++estadoSecreto;
            break;
            case 't':
                letra.push(secreto)
                ++estadoSecreto;
            break;
            case 'o':
                letra.push(secreto)
                estadoSecreto = 0;
            break;
            
        
            default:
                estadoSecreto = 0
                letra = []
                console.log(estadoSecreto);
                console.log(letra);
                break;
        }
        if(letra.length == 7){
            alert('SECRETO MáGICO')
        }
    
    }
    
    }