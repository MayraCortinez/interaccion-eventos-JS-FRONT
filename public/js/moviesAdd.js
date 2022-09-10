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
    document.onkeydown = 
    function mensaje(e){
       
        const secreto = e.key.toLowerCase();
        console.log(secreto);
    
        switch (secreto) {
            
            case 's':
                ++estadoSecreto;
                break;
            case 'e':
                if(estadoSecreto = 1){
                ++estadoSecreto;
                }
            break;
            case 'c':
                if(estadoSecreto = 2){
                ++estadoSecreto;
                }
            break;
            case 'r':
                if(estadoSecreto = 3){
                ++estadoSecreto;
                }
            break;
            case 'e':
                if(estadoSecreto = 4){
                 ++estadoSecreto;
                }
            break;
            case 't':
                if(estadoSecreto = 5){
                ++estadoSecreto;
                }
            break;
            case 'o':
                if(estadoSecreto === +6){
                estadoSecreto = 0;
                alert('SECRETO MÁGICO')
                }
            break;
            
            default:
                estadoSecreto = 0
                console.log(estadoSecreto);
                break;
        }
    
    }
    
    }