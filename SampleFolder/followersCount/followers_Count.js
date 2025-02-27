let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
   
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue(){
    if(count === 10){
        alert("You have 10 followers");
    } else if(count === 20){
        alert("You have 20 followers");
    }
}

//Practice Task
function resetCount(){
    count = 0;
    displayCount();
    alert("Followers count has been reset");
}