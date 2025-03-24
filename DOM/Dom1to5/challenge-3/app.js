/**
 * Write your challenge solution here
 */

document.querySelector('.form-container').addEventListener('input',function(event){
    let nameDisplay = document.getElementById('nameDisplay')
    let jobDisplay = document.getElementById('jobDisplay')
    let ageDisplay = document.getElementById('ageDisplay')
    let bioDisplay = document.getElementById('bioDisplay')

    let selectedDisplay=''
    switch (event.target.id){
        case "nameInput":
            selectedDisplay = nameDisplay
            break;
        case "jobInput":
            selectedDisplay = jobDisplay
            break;
        case "ageInput":
            selectedDisplay = ageDisplay
            break;
        case "bioInput":
            selectedDisplay = bioDisplay
            break;
        
    }

    if (event.target.value == ''){
        selectedDisplay.innerText = "Not provided"
    }else(
        selectedDisplay.innerText = event.target.value
    )

});