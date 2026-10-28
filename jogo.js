const Rand = parseInt(Math.random() * 100) + 1;
console.log(Rand);

let tentativas = 6
function tentar() {
    const numeroJogo = document.querySelector('input#numJ');
    const numJ = Number(numeroJogo.value);
    const res = document.querySelector('div#res');
    const tt = document.querySelector('p#tentativas');

    if (numJ > 100 || numJ < 1) {
        window.alert('Digite um número válido entre 1 e 100')
    } else {
        tentativas--
        tt.innerHTML = `Tentativas: ${tentativas}`

        if(numJ > Rand) {
            res.innerHTML = 'O número tentado é maior que o valor misterioso'
        } else if(numJ < Rand) {
            res.innerHTML = 'O número tentado é menor que o valor misterioso'
        } else {
            res.innerHTML = 'Você acertou!!'
        }
        if(tentativas == -1){
            window.alert(`suas tentativas acabaram, o número secreto era ${Rand}, dê um refresh na página para tentar novamente.`)
        }
    }
}