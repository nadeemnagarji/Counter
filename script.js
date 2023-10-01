const input = document.querySelectorAll("input")
const btn = document.getElementById("set-btn")
const displayField = document.getElementById("display")

let timedata =  []
let uniqueId = 0;

   

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    let hour = document.getElementById("hour-input")
    let min = document.getElementById("min-input")
    let sec = document.getElementById("sec-input")


    createTimer(hour.value,min.value,sec.value)
    hour.value=""
    min.value=""
    sec.value=""
})

function createTimer(hour,min,sec){
    let interval = null
    hour = Number(hour)
    min = Number(min)
    sec = Number(sec)
    let timeCard = document.createElement('div')
    const currId = uniqueId++
    timeCard.id=`${currId}`
    console.log(timeCard.id);
    timeCard.innerHTML =`  
    <p>Time Left:</p>
    <div id="timer"> <div><div id="hour-${currId}">${hour}</div><span id="dots">:</span> <div id="min-${currId}">${min}<span id="dots"></div>:</span> <div id="sec-${currId}">${sec}</div></div>
    <button id="del-btn" onclick=Delete(this)>Delete</button></div>
    
`  
    
   timeCard.classList.add("displayTimer")
   displayField.appendChild(timeCard)

   let totalTime = (hour*3600)+(min*60) +(sec)

    console.log(totalTime);
    function timeChange (countDown){
        if(countDown>=0){
            let hours = Math.floor(countDown/3600)
            const remainingSeconds = countDown % 3600
            console.log(hour);
            let mins = Math.floor(remainingSeconds/60)
            console.log(mins);
            let secs = remainingSeconds % 60 
            console.log(secs);
            document.getElementById(`hour-${currId}`).innerText = hours
            document.getElementById(`min-${currId}`).innerText = mins
           let sc =  document.getElementById(`sec-${currId}`)
           sc.innerText =`${secs}`
            countDown--
            }else{
                    timeCard.innerHTML =`<h1 style="color:black;">Timer is Up!</h1>`
                   
                   timeCard.style.backgroundColor="#F0F757"
            }
    }

 timer = ()=>{
        totalTime
        timeChange(totalTime)
        totalTime--
        
 }

 setInterval(timer,1000)


   }
   

   function Delete(button){
        console.log(button.parentNode.parentNode);
        let card = button.parentNode.parentNode
        card.remove()
   }






// function validateForm() {

//     const hour = document.getElementById("hour-input")
//     const min = document.getElementById("min-input")
//     const sec = document.getElementById("sec-input")
//     log(hour.value)
//    // if (isNaN(hour.value) || hour < 0 || hour> 24) {
//     //     alert("Please enter a valid age (0-120).");
//     //     ageInput.focus();
//     //     return false;
//    // }
    
//     // return true; // Form submission proceeds if validation passes
// }




















