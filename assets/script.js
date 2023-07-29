
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowLeft = document.getElementById(".arrow_left");
const arrowRight = document.getElementById(".arrow_right");
let imageBanner = document.querySelector(".banner-img");
const banner = document.getElementById("banner");
let tagLine = document.querySelector('#banner p');
let slideInit = 0;
let dots = document.querySelector('#banner .dots'); 



document.querySelector('.arrow_left').addEventListener('click', function() {
	
	if(slideInit == 0) { 
		dotTable[slideInit].classList.remove('dot_selected'); 
		slideInit = slides.length - 1; 
		dotTable[slideInit].classList.add('dot_selected'); 
	}
	else { 
		
		dotTable[slideInit].classList.remove('dot_selected'); 
		slideInit--; 
		dotTable[slideInit].classList.add('dot_selected'); 
	};
});


document.querySelector('.arrow_right').addEventListener('click', function() {
	
	if(slideInit == slides.length - 1) { 
		dotTable[slideInit].classList.remove('dot_selected'); 
		slideInit = 0; 
		dotTable[slideInit].classList.add('dot_selected'); 
	}
	else { 
		dotTable[slideInit].classList.remove('dot_selected'); 
		slideInit++; 
		dotTable[slideInit].classList.add('dot_selected');
	};
});


function dotCreation() {
	let dot = document.createElement('div'); 
	dot.classList.add("dot"); 
	dots.appendChild(dot); 
};

for(let i = 0; i < slides.length; i++){ 
    dotCreation();
};
let dotTable = document.querySelectorAll('.dots .dot');	
dotTable[slideInit].classList.add('dot_selected');


