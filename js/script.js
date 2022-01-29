const c4 = 261.6,
	d4 = 293.7,
  e4 = 329.6,
  f4 = 349.2,
  g4 = 392.0,
  a4 = 440.0,
  b4 = 493.9;

let context,
    oscillator,
    contextGain,
    x = 1,
    type = 'sine',
    frequency;

function start(){
    context = new AudioContext();
	oscillator = context.createOscillator();
    contextGain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start(0); 
}

function aciona(){
    start();
    contextGain.gain.exponentialRampToValueAtTime(
  	0.00001, context.currentTime + x
	)
}

function clicadonotaDo(){
    frequency = c4;
    aciona();
}
function clicadonotaRe(){
    frequency = d4;
    aciona();
}
function clicadonotaMi(){
    frequency = e4;
    aciona();
}
function clicadonotaFa(){
    frequency = f4;
    aciona();
}
function clicadonotaSol(){
    frequency = g4;
    aciona();
}
function clicadonotaLa(){
    frequency = a4;
    aciona();
}
function clicadonotaSi(){
    frequency = b4;
    aciona();
}





function gerarNota(){
    var pega = document.getElementById('melodia').value;
    if(pega == 'parabens'){
        document.getElementById('notas').innerHTML = 'DO-DO-RE-DO-FA-MI' + '<br>' +'DO-DO-RE-DO-SOL-FA' + '<br>' + 'LA-LA-DO-LA-FA-MI-RE' + '<br>' + 'LA-LA-SOL-FA-SOL-FA';
    }else if(pega == 'asa-branca'){
        document.getElementById('notas').innerHTML = 'DO-RE MI-SOL SOL-MI' + '<br>' + 'FA-FA DO-RE MI-SOL' + '<br>' + 'SOL-FA MI DO-DO-RE';
    }
    else{
        document.getElementById('notas').innerHTML = '';
    }
    
        
}



