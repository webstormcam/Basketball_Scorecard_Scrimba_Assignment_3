let home = document.getElementById('home-score')
let homeCount=0;
let guest = document.getElementById('guest-score')
let guestCount=0;


function addOneHome(){
    homeCount+=1
    home.innerHTML=homeCount
}

function addTwoHome(){
    homeCount+=2
    home.innerHTML=homeCount
}

function addThreeHome(){
    homeCount+=3
    home.innerHTML=homeCount
}

function addOneGuest(){
    guestCount+=1
    guest.innerHTML=guestCount
}

function addTwoGuest(){
    guestCount+=2
    guest.innerHTML=guestCount
}
function addThreeGuest(){
    guestCount+=3
    guest.innerHTML=guestCount
}


function winningCheck(){
    
}

function reset(){
    homeCount=0;
    guestCount=0;
    home.innerHTML=homeCount
    guest.innerHTML=guestCount
}









