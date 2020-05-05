/** Lista */
var listElement = document.querySelector('#app ul');
/** Input */
var inputElemet = document.querySelector('#app input');
/** Botão */
var buttonElement = document.querySelector('#app button');

var toDos = [
  "Fazer Café",
  "Estudar JavaScript",
  "Acessar Comunidade da Rocketseat"
]

for (each of toDos) {
  addLi(each);
}

function addLi(text) {
  var liElement = document.createElement('li');
  var textLiElement = document.createTextNode(text);
  liElement.appendChild(textLiElement);

  var linkElement = document.createElement('a');
  var textLinkElement = document.createTextNode('Excluir');
  linkElement.setAttribute('href', '#');
  linkElement.appendChild(textLinkElement);

  linkElement.onclick = function() {
    listElement.removeChild(liElement);
  }

  liElement.appendChild(linkElement);

  listElement.appendChild(liElement);
}

buttonElement.onclick = function() {
  addLi(inputElemet.value);
  inputElemet.value = '';
}