//Initialize the variable
let songIndex = 1;
let audioElement = new Audio("./songs/1.mp3");



// getting Elements
let masterPlayE1=document.getElementById('masterPlay');
let playE1=Array.from(document.getElementsByClassName('Play'));
let myProgressBarE1=document.getElementById('myProgressBar');
let minE1=document.getElementById('min');
let secE1=document.getElementById('sec');
let songItemE1= Array.from(document.getElementsByClassName('songItem'));


// Array of List OF Songs
let songs=[
        {songName: "Lemonade", filePath: "./songs/1.mp3 ", coverPath: "covers/1.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Vibe", filePath: "./songs/2.mp3 ", coverPath: "covers/2.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Luna", filePath: "./songs/3.mp3 ", coverPath: "covers/3.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Goat", filePath: "./songs/4.mp3 ", coverPath: "covers/4.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Born To Shine", filePath: "./songs/5.mp3 ", coverPath: "covers/5.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Peed", filePath: "./songs/6.mp3 ", coverPath: "covers/6.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Chauffeur", filePath: "./songs/7.mp3 ", coverPath: "covers/7.jpeg", pl:"Play", pa:"Pause"},
        {songName: "Navi Navi Yaari", filePath: "./songs/8.mp3 ", coverPath: "covers/8.jpeg", pl:"Play", pa:"Pause"},
]

// Dynamically assign value to song Items
songItemE1.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;     
})


//Listen to Events

//Handle play/pause click(Main play button)
masterPlayE1.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        let x="Pause";
        masterPlayE1.innerText=x;
        gifVol.style.opacity=1;
        document.getElementById(`${songIndex}`).innerText=x;      
    }
    else{
        audioElement.pause();
        let x="Play";
        masterPlayE1.innerText=x;
        gifVol.style.opacity=0;
        makeAllPlays();
    }
})


//Time Stamp
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBarE1.value = progress;
    let x=audioElement.currTime = myProgressBarE1.value;
    let mind = x % (60 * 60);
    let m= Math.floor(mind / 60);
         
    var secd = mind % 60;
    let s = Math.ceil(secd);

    minE1.innerText = m;
    secE1.innerText = s;
})


//change progressbar
myProgressBarE1.addEventListener('change',()=>{
    audioElement.currentTime =  myProgressBarE1.value * audioElement.duration/100;
    let x=audioElement.currTime = myProgressBarE1.value * audioElement.duration/60;
})


//Make all buttons to play State
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("Play")).forEach((element)=>{
        element.innerText="Play";
    })
}


//Change the state of button at real-time(Play-Pause)
Array.from(document.getElementsByClassName("Play")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        
        let x="Play";
        let y="Pause";
        if(e.target.innerText=="Play"){
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            e.target.innerText=y;
            masterPlayE1.innerText=y;
            gifVol.style.opacity=1;
            audioElement.src=`./songs/${songIndex}.mp3`;
        //  we use songIndex-1 because in below line we addressing array index
            document.getElementById('nameE').innerText = songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
        }
        else{
            makeAllPlays();
            e.target.innerText=x;
            audioElement.pause();
            masterPlayE1.innerText=x;
            gifVol.style.opacity=0;            
        }
        
    })
})
 

