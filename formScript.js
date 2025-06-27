import { uncheckOption, eraseAllChildTextOf, saveData, geraFicha, removeRequiredFromAllChildTextOf, setRequiredRadioFor, removeRequiredRadioFrom, geraPNG } from './functions.js';
//import { getServico } from './cardScript.js'
import { unidades, cursosMp } from './cardScript.js';


// ÁREA DE NOTA DE TRABALHO ACADÊMICO

// Tipo de trabalho acadêmico

document.getElementById("tipo").addEventListener("change", function () {
    const tipoTrabalho = document.getElementById("tipo").value;

    removeRequiredFromAllChildTextOf('curso-nome');
    eraseAllChildTextOf('curso-nome');
    document.getElementById('curso-mp-select').value = "";
    document.getElementById('curso-mp-select').removeAttribute('required');

    if (tipoTrabalho === 'dissertacao-mp') {
        document.getElementById('curso-nome-mp').style.display = 'block';
        document.getElementById('curso-mp-select').setAttribute('required', 'required');
        
        document.getElementById('curso-nome').style.display = 'none';
        document.getElementById('curso-manual').removeAttribute('required');
    } else if (
        tipoTrabalho === 'tese' ||
        tipoTrabalho === 'dissertacao' ||
        tipoTrabalho === 'tcc'
    ) {        
        document.getElementById('curso-nome-mp').style.display = 'none';
        document.getElementById('curso-mp-select').removeAttribute('required');

        document.getElementById('curso-nome').style.display = 'block';
        document.getElementById('curso-manual').setAttribute('required', 'required');    
    } else {
        document.getElementById('curso-nome-mp').style.display = 'none';
        document.getElementById('curso-mp-select').removeAttribute('required');

        document.getElementById('curso-nome').style.display = 'none';
        document.getElementById('curso-manual').removeAttribute('required');
    };

});

const unidadeSelecionada = document.getElementById('unidade-select');
const cursoMpSelect = document.getElementById('curso-mp-select');

//Unidades - carregamento da lista no formulário
unidades.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${item.local} - ${item.sigla} - ${item.unidade}`
    unidadeSelecionada.appendChild(option);
})

// A cada mudança de opção na lista de unidades
unidadeSelecionada.addEventListener("change", function () {
    const selectedIndex = this.value; // Obtém o índice selecionado
    const selectedItem = unidades[selectedIndex]; // Obtém o objeto pelo índice
    const unidadeSigla = selectedItem.sigla;

    // Limpa as opções antigas da lista de cursos
    
    cursoMpSelect.innerHTML = '<option value="">Selecione o curso</option>';

    // Filtra cursos pela sigla da unidade
    const cursosFiltrados = cursosMp.filter(item => item.sigla === unidadeSigla);

    // Cria lista de cursos de mestrado profissional que correspondam à unidade (via comparação de siglas)

    if (!selectedIndex) return; //se nenhum índice estiver selecionado, não faça nada.
    // Adiciona os cursos filtrados ao select
    cursosFiltrados.forEach(item => {
        const option = document.createElement('option');
        option.value = item.complemento
            ? `${item.curso.trim()} (${item.complemento})`
            : item.curso.trim();
        option.textContent = option.value;
        cursoMpSelect.appendChild(option);
    });

});

// arquivo

document.querySelectorAll('input[name="arquivo"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('extensao-section').style.display = 'block';
        eraseAllChildTextOf('extensao-section')
        removeRequiredFromAllChildTextOf('extensao-section');

        document.getElementById('imagem-section').style.display = 'none';

        uncheckOption('imagem-tipo');

        removeRequiredRadioFrom('il-coloracao');
        uncheckOption('il-coloracao');

        removeRequiredRadioFrom('fotos-coloracao');
        uncheckOption('fotos-coloracao');


        if (document.getElementById('texto').checked) {

            document.getElementById('paginacao').style.display = 'block';
            document.getElementById('paginas').setAttribute('required', 'required')

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required');

            document.getElementById('duracao').style.display = 'none';
            document.getElementById('duracao-do-arquivo').removeAttribute('required');

            document.getElementById('imagem-section').style.display = 'block';

        } else if (document.getElementById('video').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required');

            document.getElementById('duracao').style.display = 'block';
            document.getElementById('duracao-do-arquivo').setAttribute('required', 'required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required')

        } else if (document.getElementById('audio').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required');

            document.getElementById('duracao').style.display = 'block';
            document.getElementById('duracao-do-arquivo').setAttribute('required', 'required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required')

        } else if (document.getElementById('software').checked) {

            document.getElementById('tamanho').style.display = 'block';
            document.getElementById('tamanho-do-arquivo').removeAttribute('required');

            document.getElementById('duracao').style.display = 'none';
            document.getElementById('duracao-do-arquivo').removeAttribute('required');

            document.getElementById('paginacao').style.display = 'none';
            document.getElementById('paginas').removeAttribute('required')

        }

    })
})

// AUTORIA

//pessoa-sn

document.querySelectorAll('input[name="pessoa-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {


        document.getElementById('pessoa-qtd').style.display = 'none';
        removeRequiredRadioFrom('pessoa-qtd')
        uncheckOption('pessoa-qtd');

        document.getElementById('pessoa-outro').style.display = 'none';
        document.getElementById('pessoa-segundo').style.display = 'none';
        document.getElementById('pessoa-terceiro').style.display = 'none';
        document.getElementById('pessoa-quarto').style.display = 'none';
        removeRequiredFromAllChildTextOf('pessoa-outro');
        eraseAllChildTextOf('pessoa-outro');

        if (document.getElementById('sim').checked) {
            document.getElementById('pessoa-qtd').style.display = 'block';
            setRequiredRadioFor('pessoa-qtd')

        } else if (document.getElementById('nao').checked) {

            document.getElementById('pessoa-qtd').style.display = 'none';
            removeRequiredRadioFrom('pessoa-qtd');
            unckeckOption('pessoa-qtd');
            document.getElementById('pessoa-outro').style.display = 'none';
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';
            removeRequiredFromAllChildTextOf('pessoa-outro');
            eraseAllChildTextOf('pessoa-outro');

        } else {
            document.getElementById('pessoa-qtd').style.display = 'none';
            removeRequiredRadioFrom('pessoa-qtd');
            unckeckOption('pessoa-qtd');
            document.getElementById('pessoa-outro').style.display = 'none';
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';
            removeRequiredFromAllChildTextOf('pessoa-outro');
            eraseAllChildTextOf('pessoa-outro');
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
            document.getElementById('pessoa-outro'.style.display = 'none');
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

        document.getElementById('coorientadores').style.display = 'none';
        document.getElementById('coorientador').style.display = 'none';
        document.getElementById('coorientador-segundo').style.display = 'none';
        document.getElementById('coorientador-terceiro').style.display = 'none';
        document.getElementById('coorientador-quarto').style.display = 'none';
        uncheckOption('coorientador-qtd');
        removeRequiredRadioFrom('coorientador-qtd');
        eraseAllChildTextOf('coorientadores');
        removeRequiredFromAllChildTextOf('coorientadores');

        if (document.getElementById('coorientador-sim').checked) {
            document.getElementById('coorientador-qtd').style.display = 'block';
            setRequiredRadioFor('coorientador-qtd')
        } else if (document.getElementById('coorientador-nao').checked) {
            document.getElementById('coorientadores').style.display = 'none';
            document.getElementById('coorientador-qtd').style.display = 'none';
            uncheckOption('coorientador-qtd');
            removeRequiredRadioFrom('coorientador-qtd');
            eraseAllChildTextOf('coorientadores');
            removeRequiredFromAllChildTextOf('coorientadores');
        } else {
            document.getElementById('coorientador-qtd').style.display = 'none';
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


// PALAVRAS-CHAVE
document.getElementById('tesauro').addEventListener('click', function () {
    window.open('https://www.biblioteca.unesp.br/tesauro/vocab/index.php', '_blank');
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

// VALIDAÇÃO PARA IMPEDIR CAIXA ALTA EM TITULO E SUBTITULO
function isAllUpper(str) {
    const letters = str.replace(/[^a-zA-ZÀ-ÿ]/g, ''); //remove tudo o que não for letra
    return letters.length > 0 && letters === letters.toUpperCase();
}

function validarMaiusculas() {
    const titulo = document.getElementById('titulo');
    const subtitulo = document.getElementById('subtitulo');
    let tituloValido = !isAllUpper(titulo.value.trim());
    let subtituloValido = !isAllUpper(subtitulo.value.trim());
    const legend = document.querySelector('#titulo-section legend');

    // Adiciona ou remove classe de erro individualmente
    if (!tituloValido) {
        titulo.classList.add('invalid-field');
        legend.classList.add('legendRed');
    } else {
        titulo.classList.remove('invalid-field');
    }

    if (!subtituloValido) {
        subtitulo.classList.add('invalid-field');
        legend.classList.add('legendRed');
    } else {
        subtitulo.classList.remove('invalid-field');
    }

    if (tituloValido && subtituloValido) {
        legend.classList.remove('legendRed');
    }
}

document.getElementById('titulo').addEventListener('input', validarMaiusculas);
document.getElementById('subtitulo').addEventListener('input', validarMaiusculas);

// fim da validação de caixa alta



// VALIDAÇÃO PARA ALERTAR SOBRE SUBTÍTULO INICIADO EM MAIÚSCULA


function inicialMaiuscula(str) {

    const texto = str.trim();
    // Regex: ^[A-ZÀ-Ý][a-zà-ÿ]
    // ^           => início da string
    // [A-ZÀ-Ý]    => primeira letra maiúscula (com acento)
    // [a-zà-ÿ]    => segunda letra minúscula (com acento)
    return /^[A-ZÀ-Ý][a-zà-ÿ]/.test(texto);
}

function validarSubtitulo() {
    const subtitulo = document.getElementById('subtitulo').value.trim();

    if (inicialMaiuscula(subtitulo)) {
        alert('Atenção! Inicie o subtítulo com maiúscula apenas se a primeira palavra for um nome próprio. Por favor, verifique isso antes de prosseguir.');
    }
}

document.getElementById('subtitulo').addEventListener('input', validarSubtitulo);

// FIM DA VALIDAÇÃO DE SUBTÍTULO


// BOTÕES

// Botão Gera Ficha

document.getElementById("btn-card").addEventListener("click", function (event) {

    let formIsValid = true;

    // valida inputs de texto   

    const requiredFields = document.querySelectorAll('input[required]:not([type="radio"]), select[required], textarea[required]');
    requiredFields.forEach(field => {
        // Validação personalizada para Título e Subtítulo
        if (
            (field.id === 'titulo' && isAllUpper(field.value.trim())) ||
            (field.id === 'subtitulo' && isAllUpper(field.value.trim()))
        ) {
            field.classList.add('invalid-field');
            formIsValid = false;
        } else if (!field.checkValidity()) {
            // Validação padrão HTML5
            field.classList.add('invalid-field');
            formIsValid = false;
        } else {
            // Só remove a classe se passar por todas as validações
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

    // Verifica se título ou subtítulo estão em caixa alta
    const legend = document.querySelector('#titulo-section legend');
    if (legend.classList.contains('legendRed')) {
        console.log('legendRed está ativa');
        formIsValid = false;
    } else {
        console.log('legendRed não está ativa');
    }


    //Se FORM inválidado por qualquer verificação acima, não enviar, do contrário, gerar ficha

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        geraFicha();
        document.getElementById('ficha-catalografica-section').scrollIntoView({ behavior: 'smooth' });
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

