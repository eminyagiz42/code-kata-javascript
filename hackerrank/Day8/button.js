function myFunction() {

    const buttonCounter = document.getElementById('btn-counter');

    let count = parseInt(buttonCounter.innerHTML);

    buttonCounter.innerHTML = count + 1 ;
}