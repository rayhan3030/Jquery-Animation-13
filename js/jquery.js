

//Fade Toggle

$(document).ready(function(){
	$("#fadetoggle").click(function(){
		$("#cool1").fadeToggle(2000);
		$("#cool2").fadeToggle(3000);
		$("#cool3").fadeToggle(4000);
	});
});


//Click to slide

$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle(2000);
	});
});


//Click TO Animate

$(document).ready(function(){
	$("#animate").click(function(){
		$("#boom").animate({
			width: '400px',
			height: '400px',
			left: '400px',
			bottom: '400px'
		});
	});
});


//Advance Animation
$(document).ready(function(){
	$("#start-animation").click(function(){
		var fitAnimation = $("#fit");
		fitAnimation.animate({width: '250px'}, 1000);
		fitAnimation.animate({height: '250px'}, 1000);
		fitAnimation.animate({width: '350px'}, 2000);
		fitAnimation.animate({height: '350px'}, 1000);
		fitAnimation.animate({width: '450px'}, 2000);
		fitAnimation.animate({height: '450px'}, 1000);
		fitAnimation.animate({width: '750px'}, 2000);
		fitAnimation.animate({height: '550px'}, 1000);
		fitAnimation.animate({width: '950px'}, 2000);
		fitAnimation.animate({height: '570px'}, 1000);
		fitAnimation.animate({width: '1370px'}, 2000);
		fitAnimation.animate({fontSize: '10em'}, 3000);
	});
	
	$("#stop-animation").click(function(){
		$("#fit").stop(true);
	});
});

// $(document).ready(function(){
// 	$("#start-animation").click(function(){
// 		var fitAnimation = $("#fit");
// 		fitAnimation.animate({width: '250px'},1000);
	
// 		fitAnimation.animate({height: '250px'},1000);
// 		fitAnimation.animate({width: '350px'},2000);
// 		fitAnimation.animate({height: '350px'},1000);
// 		fitAnimation.animate({width: '450px'},2000);
// 		fitAnimation.animate({height: '450px'},1000);
// 		fitAnimation.animate({width: '750px'},2000);
// 		fitAnimation.animate({height: '550px'},1000);
// 		fitAnimation.animate({width: '950px'},2000);
// 		fitAnimation.animate({height: '570px'},1000);
// 		fitAnimation.animate({width: '1370px'},2000);
// 		fitAnimation.animate({fontSize: '10em'}, 3000, function() {
// 			// After fontSize animation, add 360-degree rotation
// 			fitAnimation.animate({rotate: '360deg'}, 1000);
// 		}); 	
	

// 	});
// 	$("#stop-animation").click(function(){
// 		$("#fit").stop(true);
// 	});

// });




// Typewritter effect js 
const introText = "Assignment - 13 Jquery";
const introElement = document.getElementById("intro");
const interval = 80; // Adjust the interval to control typing speed

function typeWriterEffect(text, element) {
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, interval);
    } else {
      element.innerHTML += `<span class="typewriter-cursor"></span>`;
      setTimeout(reset, interval * 2); // Wait for cursor to blink, then reset
    }
  }

  function reset() {
    element.innerHTML = "";
    charIndex = 0;
    type();
  }

  type();
}

typeWriterEffect(introText, introElement);


// Javascript experiment

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    
    // Add 'active' class to clicked button and show related content
    const tabId = button.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    
    button.classList.add('active');
    tabContent.style.display = 'block';
  });
});
