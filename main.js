let userscore = 0;
let compscore = 0;


let choices= document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")



const gencompchoice = () =>{
    const options = ["rock","paper","scissors"]
    const idx = Math.floor(Math.random()*3)
    return options[idx]
}

const drawgame = ()=>{
    console.log("game was draw")
    msg.innerText = "Game was Draw "
    msg.style.backgroundColor = "#081b31"
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++
        userscorepara.innerText = userscore
        msg.innerText = `you win! Your ${userchoice} beats  ${compchoice}`
        msg.style.backgroundColor = "green"
    }else{
        compscore++
        compscorepara.innerText = compscore
        msg.innerText = `you lose!  ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const playgame = (userchoice)=>{
    console.log("user choice = ",userchoice)
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice)

    if(userchoice===compchoice){
        //Draw Game
        drawgame()
    }else{
        let userwin = true ;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true ;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true ;
        }else{
            userwin = compchoice === "paper" ? true : true ;
        }
        showwinner(userwin,userchoice,compchoice)
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id")
        console.log(userchoice)
        playgame(userchoice)
    })
})