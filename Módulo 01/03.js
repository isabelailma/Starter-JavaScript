/** 3º Exercício - Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.*/
  
function temHabilidade(skills) {
  return (skills.indexOf("Javascript") != -1);
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills)); // true ou false

/** Dica: para verificar se um vetor contém um valor, utilize o método indexOf */