let video;
let asciiDiv;


function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(96, 60);
  asciiDiv = createDiv();
}
function draw() {
  background(0);
  video.loadPixels();

  let density = "Ñ@#W$9876543210?!abc;:+=28._               ";
  let asciiImage = '';
  for (let j = 0; j < video.height; j++) {
    
     for (let i = 0; i < video.width; i++) {
        const pixIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixIndex + 0];
        const g = video.pixels[pixIndex + 1];
        const b = video.pixels[pixIndex + 2];  
        const avr = (r + g + b)/3;
        let len = density.length;
        const charIndex = floor(map(avr, 0, 255, len, 0));
      
  
      
        
        const c = density.charAt(charIndex);
        if (c == " ") asciiImage += "&nbsp;";
        else asciiImage += c;
    }
    asciiImage += '<br/>';

  } 
  asciiDiv.html(asciiImage);
}