let length;
let width;

function calculateArea(){
    length=Document.getElementById('length').value;
    width=Document.getElementById('width').value;

    let area=length*width;

    document.getElementById('result').innerText=`El area calculada es :  ${area}`; 
}