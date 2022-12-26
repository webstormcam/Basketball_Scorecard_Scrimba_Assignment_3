let home = document.getElementById('home-score')
let homeCount=0;
let guest = document.getElementById('guest-score')
let guestCount=0;


function addOneHome(){
    homeCount+=1
    home.innerHTML=homeCount
    winningCheck()
}

function addTwoHome(){
    homeCount+=2
    home.innerHTML=homeCount
    winningCheck()
}

function addThreeHome(){
    homeCount+=3
    home.innerHTML=homeCount
    winningCheck()
}

function addOneGuest(){
    guestCount+=1
    guest.innerHTML=guestCount
    winningCheck()
}

function addTwoGuest(){
    guestCount+=2
    guest.innerHTML=guestCount
    winningCheck()
}
function addThreeGuest(){
    guestCount+=3
    guest.innerHTML=guestCount
    winningCheck()
}


function winningCheck(){
    if(homeCount>guestCount){
        home.style.border="1px solid yellow"
    } else if(guestCount>homeCount){
        guest.style.border="1px solid yellow"
    } else if(homeCount===guestCount){
        home.style.border="none"
        guest.style.border="none"
    }
}

function reset(){
    homeCount=0;
    guestCount=0;
    home.innerHTML=homeCount
    guest.innerHTML=guestCount
}









