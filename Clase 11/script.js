//si queremos seleccionar una etiqueta por su nombre usamos querySelector
  const h1 = document.querySelector('h1');
  const p = document.querySelector('p');
  const parrafito = document.getElementsByClassName('parrafito');
  const pid = document.getElementById('pid');
  const input = document.querySelector('input');

  console.log(input.value)

  console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
  });

// .innerHTML podemos insertar texto y etiquetas html
  h1.innerHTML = "Patito <br> Feo";

// .innerText podemos insertar solamente texto
  p.innerText = "Patito <br> Feo";

// getAttribute() nos retorna el valor del atibuto que le demos
  console.log(h1.getAttribute('class'))//tittle

// .setAttribute(atributo, valor) agrega o remplaza un atributo con el valor que le damos
  h1.setAttribute('class' , 'titulo')
  console.log(h1.getAttribute('class'))//titulo 

// .classList.add('class-name') agrega una clase al elemento
  h1.classList.add('other-tittle');

// .classList.remove('class-name') remueve una clase al elemento si es que la tiene
  h1.classList.remove('other-tittle');

//classList.toggle('class-name') dependiendo de si tiene o no la clase la va a sacar o agregar
// es como un interruptor de encendido y apagad, muy util a la hora de hacer eventos
  h1.classList.toggle('other-tittle');

// classList.contains('class -name') dependiendo de si tiene o no la clase su valor va a ser true o false
  h1.classList.contains('other-tittle');

// .createElement ('element') crea un elemento HTML
  const img = document.createElement ('img');

  img.setAttribute ('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg');

  console.log(img);

// .appendChild(elemento) inserta un elemento que nosotros le demos
  pid.appendChild(img);