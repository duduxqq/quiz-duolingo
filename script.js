let perguntas = [
  {
  titulo: "Gato",
  alternativas: ["Gat", "Cat", "Gate", "Dog"],
  correta: 1
},
{
  titulo: 'Fire',
  alternativas: ['Fogo', 'Agua', 'Terra', 'Ar'],
  correta: 0
},
{
  titulo: 'Bird',
  alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
  correta: 3
}
]

let app = {
  mostraResposta: function (correto) {
    let resultDiv = document.querySelector('#result')
    let result = ''
    
    if (correto) {
      result = 'Resposta Correta!'
    }else {
      let pergunta = perguntas[this.Atualpos]
      let indice = pergunta.correta
      let texto = pergunta.alternativas[indice]
      result = `Incorreto! Resposta Correta: ${texto}`
    }
    resultDiv.textContent = result
  },
  mostraQuestao: function (q) {
    this.qatual = q
    let titleDiv = document.getElementById("titulo")
    titleDiv.textContent = q.titulo

    let alts = document.querySelectorAll(".alternativa")
    alts.forEach(function (element, index) {
      element.textContent = q.alternativas[index]
  })
},
atualizaPontos: function() {
  let scoreDiv = document.querySelector('#pontos')
  scoreDiv.textContent = `Sua pontuação: ${this.Totalpontos}`
},
proximaPerg: function() {
  this.Atualpos++
  if(this.Atualpos == perguntas.length){
    this.Atualpos = 0
  }
}, 
checaResposta: function (user) {
  if (this.qatual.correta == user) {
    console.log("Correta")
    this.Totalpontos++
    this.mostraResposta(true)
  }else {
    console.log("Errada")
    this.mostraResposta(false)
  }
  this.atualizaPontos()
  this.proximaPerg()
  this.mostraQuestao(perguntas[this.Atualpos])
},
  start: function() {
    this.Atualpos = 0
    this.Totalpontos = 0

      let alts = document.querySelectorAll('.alternativa')
      alts.forEach((element, index) => {
        element.addEventListener("click", () => {
          this.checaResposta(index)
        })
      })
      this.atualizaPontos()
      app.mostraQuestao(perguntas[this.Atualpos])
  },
}
app.start()
