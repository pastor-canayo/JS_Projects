const btnEl = document.getElementById("btn");

function fetchImage(){
// 	const inputValue = document.getElementById("input").value;
// 	fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=xfLte0jsb7bep20dOLnWQQMXhbofJ4nt0FlSl5X9sko`).then((res)=>res.json().then((data)=>{
// 		console.log(data);
// 	})
  // );
	console.log("clciked");
}
btnEl.addEventListener("click", fetchImage, false);