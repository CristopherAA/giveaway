function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var contador = 0;
async function Girar(){
    contador++;
    texto = document.getElementById("ganador");
    var nombre = [];
    nombre[0] = "Yezlin";
    nombre[1] = "Alejandra";
    nombre[2] = "Cristopher"; 
    nombre[3] = "Aaron";
    nombre[4] = "Camilo";
    nombre[5] = "Angel";
    nombre[6] = "Karelia";
    nombre[7] = "Rodrigo";
    nombre[8] = "Clara";
    nombre[9] = "Fernanda";
    for(var i=0; i<nombre.length; i++){
        texto.innerHTML = nombre[i];
        await sleep(100);  
    }
    if(contador>3){
        texto.innerHTML = "Yezlin";
        return;
    }
    var n = getRandomInt(0,nombre.length);
    console.log(n);
    texto.innerHTML = nombre[n];

    
    
}