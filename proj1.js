// DOM Selection
const disp1El = document.querySelector('.disnum1');
const disp2El = document.querySelector('.disnum2');
const resultEl = document.querySelector('.tempResult');
const allKeysEl = document.querySelectorAll('.keys');
const operatorsEl = document.querySelectorAll('.operate');
const equalEl = document.querySelector('.equals');
const clearAllEl = document.querySelector('.allClear');
const deleteEl = document.querySelector('.delete');

// declaring variabels 
let disnum1 = '';
let disnum2 = '';
let result = null;
let lastOperate = '';
let isDot = false;

allKeysEl.forEach(allkeys =>{
  allkeys.addEventListener('click',(e) =>{
    if(e.target.innerText === '.' && !isDot){
      isDot = true;
    }else if(e.target.innerText === '.' && isDot){
      return;
    }
    disnum2 += e.target.innerText;
    disp2El.innerText = disnum2;
  })
});

//Operate
operatorsEl.forEach(operate =>{
  operate.addEventListener('click',(e) =>{
    if(!disnum2) result;
    isDot = false;
    const operationName = e.target.innerText;
    if(disnum1 && disnum2 && lastOperate) {
      mathCalculate();
    }else{
      result = parseFloat(disnum2);
    }
    clearVar(operationName);
    lastOperate = operationName;
    lastOperate = operationName;
    console.log(result);
  })
});

function clearVar(name = '') {
  disnum1 += disnum2 + ' ' + name + ' ';
  disp1El.innerText = disnum1;
  disp2El.innerText = '';
  disnum2 = '';
  resultEl.innerText = result;
}

function mathCalculate(){
  if(lastOperate === 'x'){
    result = parseFloat(result) * parseFloat(disnum2);
  }else if(lastOperate === '+'){
    result = parseFloat(result) + parseFloat(disnum2);
  }else if(lastOperate === '/'){
    result = parseFloat(result) / parseFloat(disnum2);
  }else if(lastOperate === '%'){
    result = parseFloat(result) % parseFloat(disnum2);
  }else if(lastOperate === '-'){
    result = parseFloat(result) - parseFloat(disnum2);
  }
}

equalEl.addEventListener('click',(e)=>{
  if(!disnum1 || !disnum2) return;
  isDot = false;
  mathCalculate();
  clearVar();
  disp2El.innerText = result;
  resultEl.innerText = '';
  disnum2 = result;
  disnum1 = '';
});

clearAllEl.addEventListener('click', (e) =>{
  disp1El.innerText = '0';
  disp2El.innerText = '0';
  resultEl.innerText = '';
  disnum1 = '';
  disnum2 = '';
  result ='';
});

deleteEl.addEventListener('click', (e) =>{
  disp2El.innerText = '';
  disnum2 = '';
})

/* FOR BUTTONS */

/*
window.addEventListener('keydown',(e) =>{
  if(
    e.key === '0' ||
    e.key === '1'||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
    ){
    clickButtonEl(e.key);
    }else if{
      e.key === '+' ||
      e.key === '-' ||
      e.key === '/' ||
      e.key === '%'
    }{
    clickOperation(e.key);
    }else if(e.key === "*"){
      clickButtonEl('X');
    }else if(e.key == 'Enter' || e.key === "="){
      clickEquals();
    }
});

function clickButtonEl(key){
  allKeysEl.forEach(button =>{
    if(button.innerText === key){
      button.click();
    }
  })
}

function clickOperation(key){
  operatorsEl.forEach(button =>{
    if(button.innerText === key){
      button.click();
    }
  })
}

function clickEquals(){
  equalEl.click();
}
*/
