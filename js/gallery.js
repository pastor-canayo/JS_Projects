//const btnEl = document.getElementById("btn");

async function fetchImage(){
	const inputValue = document.getElementById("input").value;
	const errorMessageEl = document.getElementById("errorMessage");
	const galleryEl = document.getElementById("gallery");
	if(inputValue > 10 || inputValue < 1){
		
		errorMessageEl.style.display = "block";
		return;
	}
	try{
		await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=xfLte0jsb7bep20dOLnWQQMXhbofJ4nt0FlSl5X9sko`).then((res)=>res.json().then((data)=>{
		     if(data){
		   		data.forEach((pic)=>{
		   			console.log(pic.url.small);
		   		}) 
		   }
		})
	  );
		errorMessageEl.style.display = "none";
	}
	catch(error){
		errorMessageEl.style.display = "block";
		errorMessageEl.innerText = "An error happened, try again later";
	}
	
}
window.onload=function(){
  var btnEl = document.getElementById("btn");

  btn.addEventListener("click", fetchImage, true);
}
