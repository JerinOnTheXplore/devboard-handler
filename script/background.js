const bgColor = document.getElementById('body');
document.getElementById('bg-btn').addEventListener('click',function(event){
    event.preventDefault();
    let ranNum1 = Math.floor(Math.random() * 256);
    let ranNum2 = Math.floor(Math.random() * 256);
    let ranNum3 = Math.floor(Math.random() * 256);
    let ranRgb =' rgb('+ranNum1+', '+ranNum2+', '+ranNum3+') ';
    bgColor.style.backgroundColor = ranRgb;
})