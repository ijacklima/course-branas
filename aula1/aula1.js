window.onload = function()
{
  var objTxtNota = document.getElementById("nota");
  var objDivResult = document.getElementById("result");
  var objBotao = document.getElementById("botao");

  objBotao.onclick = function()
  {
    var objFloNota = parseFloat(objTxtNota.value);
    if(objFloNota >= 6.0)
    {
      objDivResult.innerHTML = "Aluno aprovado.";
      console.log("Aluno aprovado com nota " +objFloNota);
    } else {
      if(objFloNota >= 4.0) {
        objDivResult.innerHTML = "Aluno em exame.";
        console.log("Aluno em exame com nota " +objFloNota);
    } else{
      objDivResult.innerHTML = "Aluno reprovado.";
      console.log("Aluno reprovado com nota " +objFloNota);
    }
  }
}

setTimeout(()=> {
    console.log("Essa mensagem é exibida após 3 segundos");
}, 3000);
}
