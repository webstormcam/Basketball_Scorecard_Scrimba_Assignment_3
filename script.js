let home = document.getElementById('home-score')
let homeCount=0;
let guest = document.getElementById('guest-score')
let guestCount=0;


document.addEventListener('click', (e)=> {
    if (e.target.id === "home") { 
        homeCount+= Number(e.target.value)
        home.innerHTML = homeCount
    } else if (e.target.id === "guess") {
        guestCount+=Number(e.target.value)
        guest.innerHTML=guestCount
    }
     winningCheck()
})


function winningCheck(){
    if(homeCount>guestCount){
        home.style.border="2px solid orange"
        guest.style.border="1px solid black"
    } else if(guestCount>homeCount){
        guest.style.border="2px solid orange"
        home.style.border="1px solid black"
    
} else if(guestCount===homeCount){
    guest.style.border="1px solid black"
    home.style.border="1px solid black"
}
}

function reset(){
    homeCount=0;
    guestCount=0;
    home.innerHTML=homeCount
    guest.innerHTML=guestCount
    guest.style.border="1px solid black"
    home.style.border="1px solid black"
}









