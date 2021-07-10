const makeAsteroid = (x, y, size, {fill, stroke}={fill: 'none',stroke: 'red'}) => {
  var element = document.createElementNS(namespaceURI, 'g');
  var polygon =  document.createElementNS(namespaceURI, 'polygon');

  const points = [
    [5,5],
    [0,10],
    [0,20],
    [5,25], 
    [10,30],
    [20,30],
    [25,25],
    [30,20],
    [30,10],
    [25,5],
    [20,0], 
    [10,0]
  ]
  polygon.setAttribute("points", points.map(coord => 
  [(coord[0] + (Math.random() * 10)) / (32 / size), (coord[1] + (Math.random() * 10)) / (32 / size)].join(','))
  .join(' '));
  element.setAttribute("x", `${x}`);
  element.setAttribute("y", `${y}`);
  polygon.setAttribute("fill", `${fill}`);
  polygon.setAttribute("stroke", `${stroke}`);
  element.appendChild(polygon);
  return element;
}

const makeShip = (x, y, {fill, stroke}={fill: 'none',stroke: 'lightblue'}) => {
  var element = document.createElementNS(namespaceURI, 'g');
  var polygon =  document.createElementNS(namespaceURI, 'polygon');
  polygon.setAttribute("points", `5,0 10,10 5,7 0,10`);
  element.setAttribute("x", `${x}`);
  element.setAttribute("y", `${y}`);
  polygon.setAttribute("fill", `${fill}`);
  polygon.setAttribute("stroke", `${stroke}`);
  element.appendChild(polygon)
  return element;
}

const makeBullet = (x, y, {fill, stroke}={fill: 'none',stroke: 'lightblue'}) => {
  var element = document.createElementNS(namespaceURI, 'g');
  var rect =  document.createElementNS(namespaceURI, 'rect');
  element.setAttribute("x", `${x}`);
  element.setAttribute("y", `${y}`);
  rect.setAttribute("width", `3`);
  rect.setAttribute("height", `12`);
  rect.setAttribute("fill", `${fill}`);
  rect.setAttribute("stroke", `${stroke}`);
  element.appendChild(rect)
  return element;
}

const makeCircle = (x, y, {fill, stroke}={fill: 'none',stroke: 'green'}) => {
  var element = document.createElementNS(namespaceURI, 'g');
  var circ =  document.createElementNS(namespaceURI, 'circle');
  element.setAttribute("x", `${x}`);
  element.setAttribute("y", `${y}`);
  circ.setAttribute("cx", `${x}`);
  circ.setAttribute("cy", `${y}`);
  circ.setAttribute("r", `10`);
  circ.setAttribute("fill", `${fill}`);
  circ.setAttribute("stroke", `${stroke}`);
  element.appendChild(circ)
  return element;
}

const makeRect = (x,y,h,w, {fill}={
    fill: 'black'
  }) => {
  var element = document.createElementNS(namespaceURI, 'rect');
  element.setAttribute("x", `${x}`);
  element.setAttribute("y", `${y}`);
  element.setAttribute("width", `${w}`);
  element.setAttribute("height", `${h}`);
  element.setAttribute("fill", `${fill}`);
  return element;
}

const makeLayer = () => {
  var element = document.createElementNS(namespaceURI, 'g');
  return element;
}

const makeText = ({text,x,y}={text: 'myText', x: 0, y: 0}) => {
  var element = document.createElementNS(namespaceURI, 'text');
  element.textContent = text
  element.setAttribute('x', x);
  element.setAttribute('y', y);
  return element;
}