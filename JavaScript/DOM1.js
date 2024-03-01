//window is global object and created by browser
document.getElementById('para');
document.getElementsByClassName('hidden');



let myDiv=document.createElement('div');
function paraStatus(event){
    console.log('I have clicked on para');

}

for(let i=0;i<100;i++){
  let newElemenet = document.createElement("p");
  newElemenet.textContent = "This is para " + i;
  newElemenet.addEventListener("click", paraStatus); // all para refering the same listener(event function)
  myDiv.appendChild(newElemenet);
}
document.body.appendChild(myDiv);
// myDiv.addEventListener("click", paraStatus);