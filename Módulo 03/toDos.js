/** Lista */
var listElement = document.querySelector('#app ul');
/** Input */
var inputElement = document.querySelector('#app input');
/** Botão */
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('listToDos'));

function renderToDos() {
  /** Limpar contúdo da lista HTML antes de renderizar, ou seja, limpar todo o conteúdo dentro de <ul></ul> */
  listElement.innerHTML = '';
  for(toDo of toDos) {
    /** Criando elemento <li>toDo</li> */
    var liElement = document.createElement('li');
    var textLi = document.createTextNode(toDo);
    liElement.appendChild(textLi);
    /** Criando elemento <a href="#">Excluir</a> */
    var linkElement = document.createElement('a');
    var textLink = document.createTextNode('Excluir');
    linkElement.setAttribute('href', '#');
    linkElement.appendChild(textLink);
    /** Adicionando elemento <a href="#">Excluir</a> dentro de <li>toDo</li> */
    liElement.appendChild(linkElement);

    /** Adicionando elemento completo em <ul></ul> */
    listElement.appendChild(liElement);

    var pos = toDos.indexOf(toDo);
    /** linkElement.onclick = removeToDo(pos);
     *  Não é possivel usar este comando pois ao invés de atribuir estariamos executando a função
     *  Por consequencia criando e já deletando o elemento
     */
    linkElement.setAttribute('onclick', 'removeToDo(' + pos + ')');
  }
}

renderToDos();

function addToDo() {
  var toDo = inputElement.value;
  toDos.push(toDo);
  inputElement.value = '';
  renderToDos();
  saveToStorage();
}

function removeToDo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  /** localStorage() não tem habilidade para gravar vetores e objetos, somente string
   *  Por isso é necessáio converter o nosso vetor em uma string utilizando JSON
   */
  localStorage.setItem('listToDos', JSON.stringify(toDos));
}

buttonElement.onclick = addToDo;