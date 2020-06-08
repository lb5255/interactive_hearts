let hearts = [];
//let heart;
let song;
let vol; 
let img1;
let counter = 10;
let timer;
let seconds, minutes;

let textfile;
let wordsofLea = [];
let textIndex = 0;
let textRect;
function preload() {
    song = loadSound("SUMMER.mp3");
    textFile = loadStrings('word.txt', fileLoaded);
    
}
function loadFile(){
    loadStrings('word.txt');
    
}
function fileLoaded(data){
    
    print(data.toString());

    wordsofLea = data;
    print(wordsofLea);
   
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    var context = new AudioContext();
    song.loop();
    amp = new p5.Amplitude();
    for(let i = 0; i < 60; i++){
            hearts.push(new Heart());
    }
    setInterval(timeIt, 600);
    
}
function timeIt(){
    if(counter > 0){
        counter--;
    }
    minutes = floor(counter/60);
    seconds = counter % 60;
    if(counter ===0){
        textIndex++;
        counter = 10;
        if(textIndex > wordsofLea.count){
            textIndex = 0;
        }
    }
    
}
function draw() {
    background("pink");
    fill("white");
   
   
    //event to trigger the audio
  if (keyIsDown(ENTER)) {
        //starts tracking what audio is getting played
        getAudioContext().resume();
        
}    
    noFill();
    noStroke();
    textRect = rect(windowWidth /2, windowHeight /2, 100,50);

    vol = amp.getLevel();
    for(let i = 0; i < hearts.length; i++){
        hearts[i].width = 350*vol;
        hearts[i].height = 350*vol;
        hearts[i].display(hearts[i].img, 350*vol, 350*vol);

    }
  
    fill("white");
    words = wordsofLea[textIndex];
    text(words, windowWidth / 2, windowHeight / 2, windowWidth /2, windowHeight /2);
}

function mouseClicked(){
    print("test");
    for(let i = 0; i < hearts.length; i++){
        if(hearts[i].intersects(mouseX, mouseY)){
            hearts[i].swapImage();
            print("heart");
        }
    }
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    
}