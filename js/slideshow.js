let index = 1;

sliderShow(index);

function sliderShow (n){
	let slider = document.querySelectorAll('.myslider');
	if(n>slider.length) index=1;
	if(n<1) index = slider.length ;
	for (let i = 0; i < slider.length; i++) {
		slider[i].style.display ='none';
	}
	slider[index-1].style.display ='block';	
}


function plusSlider(n){
	sliderShow(index+=n)
}

