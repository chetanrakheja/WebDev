/**
 * Write your challenge solution here
 */

function toggleBulb(){
    let bulb = document.getElementById('bulb')
    let Btn = document.getElementById('toggleButton')
    let status = document.getElementById('status')
    
    if (bulb.className=='bulb on'){
        bulb.className='bulb off'
        status.innerText='Status: Off'
        Btn.innerText='Turn On'
        
    }else{
            bulb.className='bulb on'
            status.innerText='Status: On'
            Btn.innerText='Turn Off'
    }
}