

const startButton=document.querySelector("#start");
const durationInput=document.querySelector("#duration");
const pauseButton=document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter=circle.getAttribute('r')*2*Math.PI;

circle.setAttribute("stroke-dasharray",perimeter);

let duration;
const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(totolTime){
        duration=totolTime;
        //console.log('THANK YOU FOR CALLING ')
    },
    onTick(timeRemaining){
        circle.setAttribute("stroke-dashoffset",
        perimeter*timeRemaining/duration-perimeter)
        
        //console.log('TICKED')
    },
    onComplete(){
        console.log('COMPLETED THANK YOU')
    }


})
//timer.start()
