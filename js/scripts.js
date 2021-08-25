/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function mostrarVagas(){
    fetch(`https://localhost:8080/Vagas`).then(async function (response) {
            let Vagas = await response.json();
            console.log(Vagas);
            let html = "";
            for(let i=0;i<Vagas.length;i++){ html +=` <tr>
                <td>${Vagas[i].vagaId}</td>
                <td>${Vagas[i].nomeVaga} </td>
                <td>${Vagas[i].descricaoVaga}</td>
                </tr>
                `

                }
            
            document.getElementById("tabelaVaga").innerHTML = html
        }).catch(function (err) {
            console.warn('Algo deu errado', err);
        });
}

function mostrarCandidato(){
    fetch(`https://localhost:8080/Candidatos`).then(async function (response) {
            let Candidatos = await response.json();
            console.log(Candidatos);
            let html = "";
            for(let i=0;i<Candidatos.length;i++){ html +=` <tr>
                <td>${Candidatos[i].candidatoId}</td>
                <td>${Candidatos[i].nomeCandidato}</td>
                <td>${Candidatos[i].estadoCivil}</td>
                <td>${Candidatos[i].genero}</td>
                <td>${Candidatos[i].dataNascimento}</td>
                <td>${Candidatos[i].vagaId}</td>
                `
                }
            document.getElementById("tabelaCandidato").innerHTML = html
        }).catch(function (err) {
            console.warn('Algo deu errado', err);
        });
}

function adicionarCandidato()
{
  let stringConexao="https://localhost:8080/Candidatos";

  const candidato={
    nomeCandidato : document.getElementById("nome").value,
    estadoCivil : document.getElementById("estadoCivil").value,
    genero: document.getElementById("sexo").value,
    dataNascimento: document.getElementById("dataNascimento").value,
    cep: document.getElementById("cep").value,
    endereco: document.getElementById("endereco").value,
    numero: document.getElementById("numero").value,
    complemento: document.getElementById("complemento").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    uf: document.getElementById("estado").value,
    telefoneFixo: document.getElementById("telFixo").value,
    telefoneMovel: document.getElementById("telCelular").value,
    emailCandidato: document.getElementById("email").value,
    cpf: document.getElementById("cpf").value,
    rg: document.getElementById("rg").value,
    possuiVeiculo: document.getElementById("veiculo").value ,
    tipoHabilitacao: document.getElementById("habilitacao").value,
    vagaId: document.getElementById("vaga").value,
  };



  const opcoes = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(candidato)
  };
   console.log(candidato);
  
  fetch(stringConexao,opcoes)
  .then(response => response.json())
  .catch(error => console.error('Unable to add item.', error));
  //fetch(stringConexao,opcoes);
}