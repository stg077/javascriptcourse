let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if(count==10){
        alert("Consigio 10 seguidores");
    }
    else if(count==20){
        alert("Consigio 20 seguidores");
        
    }
}
function resetCount(){
    count=0;
    displayCount();
    alert("se restablecio el conteo de seguidores")
}