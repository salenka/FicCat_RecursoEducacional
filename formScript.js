import { uncheckOption, eraseAllChildTextOf, saveData, geraFicha, removeRequiredFromAllChildTextOf, setRequiredRadioFor, removeRequiredRadioFrom, geraPNG } from './functions.js';
//import { getServico } from './cardScript.js'
import { unidades } from './cardScript.js';


// ÁREA DE PUBLICAÇÃO

const unidadeSelecionada = document.getElementById('unidade-select');

unidades.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${item.local} - ${item.sigla} - ${item.unidade}`
    unidadeSelecionada.appendChild(option);
})

// Definir variáveis com base na seleção
unidadeSelecionada.addEventListener("change", function () {
    const selectedIndex = this.value; // Obtém o índice selecionado
    const selectedItem = unidades[selectedIndex]; // Obtém o objeto correspondente

    // Define as variáveis
    const local = selectedItem.local;
    const unidade = selectedItem.unidade;

    console.log("Local:", local);
    console.log("Unidade:", unidade);
});


// arquivo

document.querySelectorAll('input[name="arquivo"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('extensao-section').style.display = 'block';
        document.getElementById('imagem-section').style.display = 'none';
        eraseAllChildTextOf('extensao-section')
        removeRequiredFromAllChildTextOf('extensao-section');

        if (document.getElementById('texto').checked) {

            document.getElementById('paginacao').style.display = 'block';
            document.getElementById('paginas').setAttribute('required', 'required')

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('duracao').style.display = 'none';
            document.getElementById('duracao-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('imagem-section').style.display = 'block';

        } else if (document.getElementById('video').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('duracao').style.display = 'block';
            document.getElementById('duracao-do-arquivo').setAttribute('required', 'required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required', 'required')

        } else if (document.getElementById('audio').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('duracao').style.display = 'block';
            document.getElementById('duracao-do-arquivo').setAttribute('required', 'required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required', 'required')

        } else if (document.getElementById('software').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('duracao').style.display = 'none';
            document.getElementById('duracao-do-arquivo').removeAttribute('required', 'required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required', 'required')

        }

    })
})

// AUTORIA

//pessoa-sn

document.querySelectorAll('input[name="pessoa-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-qtd');
        eraseAllChildTextOf('pessoa-outro');

        if (document.getElementById('sim').checked) {
            document.getElementById('pessoa-qtd').style.display = 'block';
            setRequiredRadioFor('pessoa-qtd')
        } else {
            document.getElementById('pessoa-qtd').style.display = 'none';
            removeRequiredRadioFrom('pessoa-qtd')
        }
    });
});

// pessoa-outro

document.querySelectorAll('input[name="pessoa-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('pessoa-outro');
        removeRequiredFromAllChildTextOf('pessoa-outro');
        


        if (document.getElementById('pessoa-qtd-2').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';

            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-2').setAttribute('required', 'required');

            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';

        } else if (document.getElementById('pessoa-qtd-3').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';

            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-2').setAttribute('required', 'required');

            document.getElementById('pessoa-terceiro').style.display = 'block';
            document.getElementById('pessoa-3').setAttribute('required', 'required');

            document.getElementById('pessoa-quarto').style.display = 'none';

        } else if (document.getElementById('pessoa-qtd-4').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'block';

        } else {
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';
        }
    });
});








// ORIENTAÇÃO

// coorientador-sn

document.querySelectorAll('input[name="coorientador-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('coorientador').style.display = 'none';
        uncheckOption('coorientador-qtd');
        removeRequiredRadioFrom('coorientador-qtd');
        eraseAllChildTextOf('coorientador');
        removeRequiredFromAllChildTextOf('coorientador');

        if (document.getElementById('coorientador-sim').checked) {
            document.getElementById('coorientador-qtd').style.display = 'block';
            setRequiredRadioFor('coorientador-qtd')
        } else {
            document.getElementById('coorientador-qtd').style.display = 'none';
            //removeRequiredRadioFrom('coorientador-qtd')
        }
    });
});

//outro-coorientador

document.querySelectorAll('input[name="coorientador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('coorientadores').style.display = 'block';
        eraseAllChildTextOf('coorientadores');
        removeRequiredFromAllChildTextOf('coorientadores');

        if (document.getElementById('coorientador-qtd-1').checked) {
            document.getElementById('coorientador').style.display = 'block';
            document.getElementById('coorientador-1').setAttribute('required', 'required');

            document.getElementById('coorientador-segundo').style.display = 'none';
            document.getElementById('coorientador-terceiro').style.display = 'none';
            document.getElementById('coorientador-quarto').style.display = 'none';

        } else if (document.getElementById('coorientador-qtd-2').checked) {
            document.getElementById('coorientador').style.display = 'block';
            document.getElementById('coorientador-1').setAttribute('required', 'required');

            document.getElementById('coorientador-segundo').style.display = 'block';
            document.getElementById('coorientador-2').setAttribute('required', 'required');

            document.getElementById('coorientador-terceiro').style.display = 'none';
            document.getElementById('coorientador-quarto').style.display = 'none';

        } else if (document.getElementById('coorientador-qtd-3').checked) {
            document.getElementById('coorientador').style.display = 'block';
            document.getElementById('coorientador-1').setAttribute('required', 'required');

            document.getElementById('coorientador-segundo').style.display = 'block';
            document.getElementById('coorientador-2').setAttribute('required', 'required');

            document.getElementById('coorientador-terceiro').style.display = 'block';
            document.getElementById('coorientador-3').setAttribute('required', 'required');

            document.getElementById('coorientador-quarto').style.display = 'none';

        } else if (document.getElementById('coorientador-qtd-4').checked) {
            document.getElementById('coorientador-segundo').style.display = 'none';
            document.getElementById('coorientador-terceiro').style.display = 'none';

            document.getElementById('coorientador-quarto').style.display = 'block';
            document.getElementById('coorientador').style.display = 'block';
            document.getElementById('coorientador-1').setAttribute('required', 'required');

        }

    })
})


//IMAGENS  

document.querySelectorAll('input[name="imagem"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('imagem-sim').checked) {
            document.getElementById('imagem-tipo').style.display = 'block';
            document.getElementsByName('imagem-tipo').setAttribute('required', 'required')


        } else {
            document.getElementById('imagem-tipo').style.display = 'none';
        }
    });
});


//Checkbox ILUSTRAÇÕES
document.getElementById('img-ilustracoes').addEventListener('change', function () {

    const ilColoracaoRadios = document.querySelectorAll('input[type="radio"][name="il-coloracao"]');

    if (document.getElementById('img-ilustracoes').checked) {

        document.getElementById('il-coloracao').style.display = 'block';
        setRequiredRadioFor('il-coloracao');


    } else {
        document.getElementById('il-coloracao').style.display = 'none';
        removeRequiredRadioFrom('il-coloracao');
        uncheckOption('il-coloracao');
    }

})

//Checkbox FOTOS
document.getElementById('img-fotos').addEventListener('change', function () {
    const fotosColoracaoRadios = document.querySelectorAll('input[type="radio"][name="fotos-coloracao"]');

    if (document.getElementById('img-fotos').checked) {
        document.getElementById('fotos-coloracao').style.display = 'block';
        setRequiredRadioFor('fotos-coloracao')

    } else {
        document.getElementById('fotos-coloracao').style.display = 'none';
        removeRequiredRadioFrom('fotos-coloracao')
        uncheckOption('fotos-coloracao');
    }
})

//ÁREA DE NOTAS

// ISBN - sim ou não

document.querySelectorAll('input[name="isbn-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {


        eraseAllChildTextOf('isbn-section');

        if (document.getElementById('isbn-sim').checked) {

            document.getElementById('isbn').style.display = 'block';
            document.getElementById('isbn-1').setAttribute('required', 'required');

            document.getElementById('isbn-2-sn').style.display = 'block';
            setRequiredRadioFor('isbn-2-sn');

        } else {

            document.getElementById('isbn').style.display = 'none';
            document.getElementById('isbn-1').removeAttribute('required', 'required');

            document.getElementById('isbn-2-sn').style.display = 'none';
            document.getElementById('isbn-outro').style.display = 'none';


            uncheckOption('isbn-2-sn');
            removeRequiredRadioFrom('isbn-2-sn');
        }


    });
});

// ISBN-2 - sim ou não

document.querySelectorAll('input[name="isbn-2-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('isbn-outro');

        if (document.getElementById('isbn-2-sim').checked) {

            document.getElementById('isbn-outro').style.display = 'block';

            document.getElementById('isbn-2').setAttribute('required', 'required');
            document.getElementById('qualificador-2').setAttribute('required', 'required');


        } else {

            document.getElementById('isbn-outro').style.display = 'none';

            document.getElementById('isbn-2').removeAttribute('required', 'required');
            document.getElementById('qualificador-2').removeAttribute('required', 'required');
        }
    });
});

// Nota - sim ou não

document.querySelectorAll('input[name="nota-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        removeRequiredFromAllChildTextOf, ('notas-section');
        eraseAllChildTextOf('notas-section');
        uncheckOption('nota-2-sn');


        if (document.getElementById('nota-sim').checked) {

            document.getElementById('nota').style.display = 'block';
            document.getElementById('nota-1').setAttribute('required', 'required');

            document.getElementById('nota-2-sn').style.display = 'block';

        } else {

            document.getElementById('nota').style.display = 'none';
            document.getElementById('nota-1').removeAttribute('required', 'required')
            document.getElementById('nota-2-sn').style.display = 'none';
            document.getElementById('nota-outro').style.display = 'none';


        }
    });
});

// Segunda nota - sim ou não

document.querySelectorAll('input[name="nota-2-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('nota-outro');

        if (document.getElementById('nota-2-sim').checked) {

            document.getElementById('nota-outro').style.display = 'block';
            document.getElementById('nota-2').setAttribute('required', 'required');

        } else {

            document.getElementById('nota-outro').style.display = 'none';
            document.getElementById('nota-2').removeAttribute('required', 'required');
        }
    });
});

// OPCIONAIS DO PDF


// LICENCA - Salva em localStorage
const ccSelect = document.getElementById('cc-select');
ccSelect.addEventListener('change', function () {
    localStorage.setItem("licenca", ccSelect.value);
    console.log(`Licença salva em localStorage: ${localStorage.getItem("licenca")}`);
});

// CREDITOS - Salva em localStorage (diferente de input[type="text"])
document.getElementById("creditos").addEventListener("change", function () {
    let creditos = document.getElementById("creditos").value.trim();

    if (creditos) {
        creditos = JSON.stringify(creditos);
        localStorage.setItem('creditos', creditos); // Store the *value* of the element, not the whole element
        console.log(`Créditos salvos em localStorage: ${localStorage.getItem("creditos")}`);
    } else {
        console.error("Créditos não encontrados")
    }

})

// JavaScript para limitar a quantidade máxima de linhas em #creditos (acho que não funciona mais com Quilljs
document.getElementById('creditos').addEventListener('input', function () {
    const maxLines = 20;
    const textarea = this;
    const lines = textarea.value.split('\n');

    if (lines.length > maxLines) {
        textarea.value = lines.slice(0, maxLines).join('\n');
    }
});


// SALVA EM LOCAL STORAGE 'input[type="text"]' de todos os campos do formulário
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('input[type="text"]').forEach(campo => {
        campo.addEventListener("input", saveData);
    });
})


// BOTÕES

// Botão Gera Ficha

// valida inputs de texto
document.getElementById("btn-card").addEventListener("click", function (event) {

    let formIsValid = true;

    const requiredFields = document.querySelectorAll('input[required]:not([type="radio"]), select[required], textarea[required]');
    requiredFields.forEach(field => {
        if (!field.checkValidity()) {
            field.classList.add('invalid-field');
            formIsValid = false;
        } else {
            field.classList.remove('invalid-field');
        }
    });

    // valida grupos de rádio
    const radioGroups = document.querySelectorAll('input[type="radio"][required]');
    let radiosPorGrupo = {};

    // agrupa rádios pelo atributo "name"
    radioGroups.forEach(radio => {

        if (!radiosPorGrupo[radio.name]) {
            radiosPorGrupo[radio.name] = []; 	//cria um grupo em radiosPorGrupo
        }
        radiosPorGrupo[radio.name].push(radio); //add o rádio atual ao array correspondente dentro de radiosPorGrupo
    });

    // Verifica se pelo menos um rádio de cada grupo está marcado
    Object.values(radiosPorGrupo).forEach(radios => { // itera sobre cada grupo de radios
        if (!radios.some(radio => radio.checked)) { //.some() retorna true se ao menos 1 elemento do array estiver marcado
            formIsValid = false;
            radios.forEach(radio => radio.classList.add('invalid-radio'));
        } else {
            radios.forEach(radio => radio.classList.remove('invalid-radio'));
        }
    });

    //daqui pra baixo vale pra inputs de texto e radio tb

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        geraFicha();
    }
})

/* *********************************************************************************
Este código está indisponível enquanto não se resolver o blob de html2pdf
document.getElementById("btn-pdf").addEventListener("click", function (event) {
    // Botão Abrir PDF

    let formIsValid = true;

    // Validação específica para os rádios bibliotecario-genero
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"][required]');

    if (bibGenero.length > 0 && !Array.from(bibGenero).some(radio => radio.checked)) {
        formIsValid = false;
        bibGenero.forEach(radio => radio.classList.add('invalid-radio'));

    } else {

        bibGenero.forEach(radio => radio.classList.remove('invalid-radio'));
    }

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');

    } else {

        geraPDF();
    }
});

**************************************************************************************** */

// Botão Baixar PNG
document.getElementById("btn-png").addEventListener("click", function (event) {

    let formIsValid = true;

    geraPNG();

});



// Botão Abrir HTML A4

document.getElementById("btn-A4").addEventListener("click", function (event) {

    // Salva as variáveis processadas em cardScript

    //localStorage.setItem('bibliotecario', getBibliotecario().bibliotecario);
    //localStorage.setItem('servico', getServico().servico);

    // Salva conteúdo formatado do campo Créditos

    const delta = quill.getContents();
    const deltaString = JSON.stringify(delta);

    localStorage.setItem('quillContent', deltaString);

    // Validação específica para os rádios bibliotecario-genero

    let formIsValid = true;
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"][required]');

    if (bibGenero.length > 0 && !Array.from(bibGenero).some(radio => radio.checked)) {
        formIsValid = false;
        bibGenero.forEach(radio => radio.classList.add('invalid-radio'));
    } else {
        bibGenero.forEach(radio => radio.classList.remove('invalid-radio'));
    }

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {

        console.log("Botão Abrir Página HTML A4 acionado");
        window.open("a4.html", "_blank");
        console.log("janela aberta");

    }

});

// Controles de fonte

document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('font-select');
    const fontSizeInput = document.getElementById('font-size');
    const fichaAqui = document.getElementById('ficha-aqui');
    const codigosAqui = document.getElementById('codigos-aqui');

    fontSelect.addEventListener('change', function () {
        fichaAqui.style.fontFamily = fontSelect.value;
        localStorage.setItem("fontSelect", fontSelect.value);
    });

    fontSizeInput.addEventListener('input', function () {
        fichaAqui.style.fontSize = fontSizeInput.value + 'px';
        localStorage.setItem("fontSizeInput", fontSizeInput.value);
    });

    fontSizeInput.addEventListener('input', function () {
        codigosAqui.style.fontSize = (fontSizeInput.value - 1) + 'px';

    });
});

// Inicialize o Quill
const quill = new Quill('#creditos', {
    theme: 'snow', // Tema do editor
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // Ferramentas de formatação
            //[{ 'align': [] }], alinhamento não está funcionando
            [{ 'list': 'ordered' }], // Listas { 'list': 'bullet' } não está funcionando
            ['link', 'image'] // Links e imagens
        ]
    }
});

