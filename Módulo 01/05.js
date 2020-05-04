/** 5º Exercício - Dado o seguinte vetor de objetos: */

var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];

  /** Escreva uma função que produza o seguinte resultado:
    * O Diego possui as habilidades: Javascript, ReactJS, Redux
    * O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
    */

  function exibeHabilidade(usuarios) {
    for (usuario of usuarios) {
      console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', '));
    }
  }

  exibeHabilidade(usuarios);

  /** Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join. */