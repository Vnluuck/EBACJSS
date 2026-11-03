const Rand = parseInt(Math.random() * 100) + 1;
console.log(Rand);


let tentativas = 6

tt.innerHTML = `Tentativas: ${tentativas}`
function tentar() {
    const numeroJogo = document.querySelector('input#numJ');
    const numJ = Number(numeroJogo.value);
    const res = document.querySelector('p#res');
    const tt = document.querySelector('p#tentativas');

    if (numJ > 100 || numJ < 1 || Number.isNaN(numJ)) {
        window.alert('Digite um número válido entre 1 e 100')
        numeroJogo.value = ""  
        } else {
        tentativas--
        tt.innerHTML = `Tentativas: ${tentativas}`

        if(numJ > Rand) {
            res.innerHTML = 'O número tentado é maior que o valor misterioso'
        } else if(numJ < Rand) {
            res.innerHTML = 'O número tentado é menor que o valor misterioso'
        } else if(numJ == Rand) {
            window.alert (`Você acertou! O número secreto era ${Rand}, dê um refresh na página para jogar novamente.`)
            numeroJogo.disabled = true;
            res.style.display = "none";
            tt.style.display = "none";
        }
    }
        
        if (tentativas == 0 && numJ != Rand){   
        window.alert(`Você errou, o número secreto era ${Rand}, dê um refresh na página para tentar novamente.`)
        numeroJogo.disabled = true;
        res.style.display = "none";
        tt.style.display = "none";
        }
}