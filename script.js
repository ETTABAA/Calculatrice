const ecran = document.querySelector('.ecran');
const touches = [...document.querySelectorAll('.button')];
const listeKeyCode = touches.map( touche => touche.dataset.key);

document.addEventListener('keydown', (e) =>{
    const chiffre = e.keyCode.toString();
    calcul(chiffre);
    
})

document.addEventListener('click', (e) => {
    const chiffre = e.target.dataset.key;
    calcul(chiffre);
})
const calcul = (chiffre) => {
    if(listeKeyCode.includes(chiffre)){
        let index = listeKeyCode.indexOf(chiffre);
        let nombre = touches[index].textContent
        switch(nombre){
            case 'C' : 
                ecran.textContent = '';
                break;
            case '=' : 
                ecran.textContent = eval(ecran.textContent);
                break;
            default :
                ecran.textContent += nombre;
        }
    }
}
window.addEventListener('error', (e)=>{
    alert('Une erreur est survenue dans votre code : ' + e.message);
})