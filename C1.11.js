const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const reload = document.querySelector('.reload');
const insert = document.querySelector('.insert');

let countSec = 0;
let countMin = 0;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
    if (total <= 0) {
      clearInterval(timeinterval);
      timer.style.display = 'none';
      plus.style.display = 'none';
      minus.style.display = 'none';
      start.style.display = 'none';
      message.innerHTML = '<p>I am done...</p>';
      document.getElementById('input').style.display = "none";
      reload.style.display = 'inline';
    }
    if(countSec > 0) { 
      countSec--;
    } else{
    	countSec = 59;
      countMin--;
    } 
    updateText();
}

plus.onclick = () =>{
  if(countSec < 59) {
    ++countSec;
  }
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

insert.onclick = () => {
  countSec = document.getElementById("Seconds").value;
  countMin = document.getElementById("Minutes").value;
  updateText()
}

start.onclick = () => {
    start.style.display = 'none';
    insert.style.display = 'none';
    document.getElementById('input').style.display = "none";
    countDown();
}

reload.onclick = () => {
  window.location.reload()
}

  

