const numero = document.getElementById('numero');


const contador = document.querySelector
(".contador");


window.addEventListener("scroll",()=>{
    let flag = false;
    let pantalla = window.innerHeight;
    let ubicacion = contador.getBoundingClientRect().top;
    console.log(ubicacion);
    let cantidad = 100;
    while(ubicacion <= pantalla || cantidad < 200){
        let tiempo = setInterval(() => {
            cantidad +=1;
            numero.textContent=cantidad;
        }, 20)
    }
    clearInterval(tiempo);
})


    