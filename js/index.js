function cadastrar(){

  const form = document.querySelector("#form-cadastro");
  const exibir = document.querySelector("#exibir");

  function cadastro(evento){
    
    evento.preventDefault();
    
  }

    let nomeAluno = document.querySelector("#txNome").value;
    let nota1 = parseFloat(form.querySelector("#txNota1").value);
    let nota2 = parseFloat(form.querySelector("#txNota2").value);
    let nota3 = parseFloat(form.querySelector("#txNota3").value);
    let nota4 = parseFloat(form.querySelector("#txNota4").value);
    let media;
    let nomeValido;

    if(nomeAluno.length > 3 && nomeAluno.length <= 25){
      nomeValido = true;
    } else{
      nomeValido = false;
    }

    if(nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10 && nota4 >= 0 && nota4 <= 10 && nomeValido){
      media = (nota1+nota2+nota3+nota4)/4;
      exibir.innerHTML += `<div class="exibir-row"><div class="cell"><span>${nomeAluno}</span></div><div class="cell"><span>${nota1}</span></div><div class="cell"><span>${nota2}</span></div><div class="cell"><span>${nota3}</span></div><div class="cell"><span>${nota4}</span></div><div class="cell"><span>${media}</span></div></div>`;
    } else{
      alert("Nome E/OU Nota Inválida!");
    }

  form.addEventListener('submit', cadastro);
}