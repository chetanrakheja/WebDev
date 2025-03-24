/**
 * Write your challenge solution here
 */
document.querySelector('.color-buttons').addEventListener('click', function(event) {
    let heading = document.getElementById('mainHeading')
    if (event.target.tagName === 'BUTTON') {
        console.log(`Button clicked: ${event.target.textContent}`);
        if (event.target.textContent=="Reset"){
            heading.style.color =''
        }else{
            heading.style.color = event.target.textContent
        }
    }
});