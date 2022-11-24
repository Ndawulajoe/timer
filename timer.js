class Timer{
    constructor(durationInput,startButton,pauseButton,callback){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;

        if(callback){
            this.onStart=callback.onStart
            this.onTick=callback.onTick
            this.onComplete=callback.onComplete
        }

       this.startButton.addEventListener('click',this.start)
       this.pauseButton.addEventListener('click',this.pause)
    }
    
    start=()=> {
        if(this.onStart){
           this.onStart(this.timeRemaining)
        }
        this.tick()
        this.stop=setInterval(this.tick,10)
    } 

    
    
    pause=()=>{
        clearInterval(this.stop)
        if(this.onComplete){
            this.onComplete()
        }
    }

    tick=()=>{
        if(this.onComplete){
            this.onComplete()
        }
        if(this.timeRemaining<=0){
            return this.pause()
        }else{
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
            
            this.timeRemaining=this.timeRemaining-0.01;
        }
        
        //easy way......
        //const timeRemaining = parseFloat(this.durationInput.value)
        //this.durationInput.value=timeRemaining-1
        //console.log('tick ')
        
    } 
    //just advanced way
    get timeRemaining(){
      return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time){
        this.durationInput.value=time.toFixed(2)
    }
}