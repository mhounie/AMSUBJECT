function calcular(tipo, valor){
    
    // valor del visor
    var valor_visor = document.getElementById('resultado').value

    if(tipo === 'acao'){

        if(valor === 'c'){
            // Cambiar el valor del id resultado
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor 
        }

        if(valor === '='){
            document.getElementById('resultado').value = eval(valor_visor)
            
        }

    } else if(tipo === 'valor'){
        document.getElementById('resultado').value = valor_visor + valor
    }

}