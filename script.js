const btnOn = document.querySelector('#btnOn');
const btnOff = document.querySelector('#btnOff');
const lamp = document.querySelector('#lamp');

function isLampBroken(){
  return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn(){
  if(!isLampBroken()){
    lamp.src = 'ligada.jpg';
  }
}

function lampOff(){
  if(!isLampBroken()){
    lamp.src = 'desligada.jpg';
  }
}

function lampBroken(){
  lamp.src = 'quebrada.jpg';
}

btnOn.addEventListener('click', lampOn);
btnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
