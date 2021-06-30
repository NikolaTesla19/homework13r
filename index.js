//Вёрстка
function createMain(){
  let mainDiv = createElement('div', 'mainDiv');
  let blockDiv;
  for (var i = 0; i < 13; i++) {
    let miniDiv = createElement('div', 'miniDiv');
    blockDiv = createElement('div', 'blockDiv');
    blockDiv.style = 'transform: rotate(' + (i * 30) + 'deg);';
    let p = createElement('p', 'numbers');
    p.innerText = i;
    p.style = 'transform: rotate(' + (-i * 30) + 'deg);';
    miniDiv.appendChild(p)
    mainDiv.appendChild(blockDiv).append(miniDiv);
  }
  blockDiv = createElement('div', 'blockDiv', 'secBlock');
  let sec = createElement('div', 'secArrow');
  mainDiv.appendChild(blockDiv).append(sec);
  blockDiv = createElement('div', 'blockDiv', 'minBlock');
  let min = createElement('div', 'minArrow');
  mainDiv.appendChild(blockDiv).append(min);
  blockDiv = createElement('div', 'blockDiv', 'hourBlock');
  let hour = createElement('div', 'hourArrow');
  mainDiv.appendChild(blockDiv).append(hour);
  document.body.appendChild(mainDiv);
}
function createElement(element, classList, id){
  let el = document.createElement(element);
  el.classList = classList;
  if (id !== undefined) {
    el.id = id;
  }
  return el
}
function interval(k){
  let dSec = 0;
  let dMin = 0;
  let dHour = 0;
  let sec = document.getElementById('secBlock');
  setInterval(function(){
    dSec += 6;
    sec.style = 'transform: rotate(' + dSec + 'deg);';
  }, 1000 / k)
  let min = document.getElementById('minBlock');
  setInterval(function(){
    dMin += 6;
    min.style = 'transform: rotate(' + dMin + 'deg);';
  }, 60000 / k)
  let hour = document.getElementById('hourBlock');
  setInterval(function(){
    dHour += 6;
    hour.style = 'transform: rotate(' + dHour + 'deg);';
  }, 3600000 / k)
}
createMain();
//создал воэффициент для возможности ускорения времени, необходимо только для более удобной проверки что всё рабтатет
interval(1);
