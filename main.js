const loder = document.querySelector('.loader-wrapper');
window.addEventListener('load', () => {
  loder.style.display = 'none';
})

const singleImg = document.querySelectorAll('.single-img img');
var magnifying_img =  document.getElementById("magnifying_img");

singleImg.forEach((item) => {
	item.addEventListener("mouseover", () => {

		const imgAttr = item.getAttribute('src');

		const contImg = document.querySelector('.my img');
 		contImg.setAttribute('src', imgAttr);
 		magnifying_img.setAttribute('src', imgAttr);

	})
})

singleImg[0].addEventListener('mouseover', () => {
  singleImg[0].style.border = '3px solid orange';
  singleImg[1].style.border = 'none';
  singleImg[2].style.border = 'none';
  singleImg[3].style.border = 'none';
  singleImg[4].style.border = 'none';
  singleImg[5].style.border = 'none';

})
singleImg[1].addEventListener('mouseover', () => {
  singleImg[0].style.border = 'none';
  singleImg[1].style.border = '3px solid orange';
  singleImg[2].style.border = 'none';
  singleImg[3].style.border = 'none';
  singleImg[4].style.border = 'none';
  singleImg[5].style.border = 'none';

})
singleImg[2].addEventListener('mouseover', () => {
  singleImg[0].style.border = 'none';
  singleImg[1].style.border = 'none';
  singleImg[2].style.border = '3px solid orange';
  singleImg[3].style.border = 'none';
  singleImg[4].style.border = 'none';
  singleImg[5].style.border = 'none';

})
singleImg[3].addEventListener('mouseover', () => {
  singleImg[0].style.border = 'none';
  singleImg[1].style.border = 'none';
  singleImg[2].style.border = 'none';
  singleImg[3].style.border = '3px solid orange';
  singleImg[4].style.border = 'none';
  singleImg[5].style.border = 'none';

})
singleImg[4].addEventListener('mouseover', () => {
  singleImg[0].style.border = 'none';
  singleImg[1].style.border = 'none';
  singleImg[2].style.border = 'none';
  singleImg[3].style.border = 'none';
  singleImg[4].style.border = '3px solid orange';
  singleImg[5].style.border = 'none';

})
singleImg[5].addEventListener('mouseover', () => {
  singleImg[0].style.border = 'none';
  singleImg[1].style.border = 'none';
  singleImg[2].style.border = 'none';
  singleImg[3].style.border = 'none';
  singleImg[4].style.border = 'none';
  singleImg[5].style.border = '3px solid orange';

})






var magnifying_area =  document.querySelector('.my');


   magnifying_area.addEventListener("mousemove",function(event){
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop

    var mWidth = magnifying_area.offsetWidth
    var mHeight = magnifying_area.offsetHeight
    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100

  //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
  magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)';

})

   magnifying_area.addEventListener("mouseleave",function(){
    magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'
})