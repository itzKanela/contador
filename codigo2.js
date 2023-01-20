const numero = document.getElementById('numero');

const contador = document.querySelector(".contador");

let band = false
window.addEventListener("scroll",()=>{
    let pantalla = window.innerHeight;
    let ubicacion = contador.getBoundingClientRect().top;
    if(band==false && (ubicacion-pantalla)<=-100){
        band = true
        let cantidad = 100;
        let tiempo = setInterval(() => {
            cantidad +=1;
            numero.textContent=cantidad;
            if(cantidad==200){
                clearInterval(tiempo)
            }
        }, 20)
    }
})