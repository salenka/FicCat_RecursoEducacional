/*  ...................................... TRATAMENTO DE DADOS DO FORMULÁRIO */

// ÁREA DE TÍTULO

function getTitulo() {

    let titulo = document.getElementById("titulo").value.trim();

    let subtitulo = document.getElementById("subtitulo").value.trim();
    subtitulo = subtitulo ? ': ' + subtitulo : "";

    let areaTitulo = `${titulo} [recurso eletrônico] ${subtitulo}`;

    return { areaTitulo }
}

/*
if (document.getElementById("digital").checked) {
    areaTitulo = areaTitulo + " [recurso eletrônico]"
} */



/*/ ÁREA DE EDIÇÃO

function getEdicao() {

let edicao = document.getElementById("edicao").value.trim();
let areaEdicao = edicao ? '. — ' + edicao + ' ed' : "";

if (edicao) {
    areaEdicao = areaEdicao + "."
}

return { areaEdicao }
}

*/

//ÁREA DE RESPONSABILIDADE INTELECTUAL

// Tipo de responsável

function getRespInt() {

    /*
        let entidade = document.getElementById("entidade-nome").value.trim();
    entidade = entidade ? entidade : "";
    
    let evento = document.getElementById("evento-nome").value.trim();
    evento = evento ? evento : "";
    
    const respInt = document.querySelector('input[name="resp-int"]:checked')?.value;
    
    if (respInt === "pessoa") {
        console.log("radio pessoa selecionado");
    } else if (respInt === "entidade") {
        console.log("radio entidade selecionado");
    } else if (respInt === "evento") {
        console.log("radio evento selecionado");
        const num = document.getElementById("evento-numero").value.trim() || "";
        const ano = document.getElementById("evento-ano").value.trim() || "";
        const local = document.getElementById("evento-local").value.trim() || "";
        evento = evento ? evento + " (" + num + ". : " + ano + " : " + local + ")" : "";
    }
        
    
    // Tipo de pessoa
    let autor = "";
    let autorEntrada = "";
    let organizador = "";
    let coordenador = "";
    let compilador = "";
    let editor = "";
    
    const tipoPessoa = document.querySelector('input[name="pessoa-tipo"]:checked')?.value;
    if (tipoPessoa === "autor") {
    
    */
    let nome = document.getElementById("nome").value.trim();
    nome = nome ? nome : "";
    let sobrenome = document.getElementById("sobrenome").value.trim();
    sobrenome = sobrenome ? sobrenome : "";
    let autorEntrada = sobrenome + ", " + nome;
    let autor = nome + " " + sobrenome;

    /*

} else if (tipoPessoa === "organizador") {
    const org = document.getElementById("organizador-nome").value.trim();
    organizador = org ? 'organizado por ' + org : '';

} else if (tipoPessoa === "coordenador") {
    const coord = document.getElementById("coordenador-nome").value.trim();
    coordenador = coord ? 'coordenado por ' + coord : '';

} else if (tipoPessoa === "compilador") {
    const comp = document.getElementById("compilador-nome").value.trim();
    compilador = comp ? 'compilado por ' + comp : '';

} else if (tipoPessoa === "editor") {
    const ed = document.getElementById("editor-nome").value.trim();
    editor = ed ? 'editado por ' + ed : '';
}

//Mais pessoas com a mesma função
const maisPessoa = document.querySelector('input[name="pessoa-sn"]:checked')?.value;
const qtdPessoa = document.querySelector('input[name="pessoa-qtd"]:checked')?.value;
let pessoa2 = "";
let pessoa3 = "";
let pessoa4 = "";

if (maisPessoa === "sim") {
    if (qtdPessoa === "2") {
        const p2 = document.getElementById("pessoa-2").value.trim();
        pessoa2 = ' e ' + p2;
    } else if (qtdPessoa === "3") {
        const p2 = document.getElementById("pessoa-2").value.trim();
        const p3 = document.getElementById("pessoa-3").value.trim();
        pessoa2 = ', ' + p2;
        pessoa3 = ' e ' + p3;
    } else if (qtdPessoa === "4") {
        pessoa2 = " ... [et al.]";
    }
}
    

//Contribuidores - Apresentador  
let apresentador = "";
if (document.getElementById("apresentador-checkbox").checked) {
    const nApresentador = document.getElementById("apresentador-1").value.trim();
    apresentador = ' ; apresentado por ' + nApresentador;
}

const maisApresentador = document.querySelector('input[name="apresentador-sn"]:checked')?.value;
const qtdApresentador = document.querySelector('input[name="apresentador-qtd"]:checked')?.value;
let apresentador2 = "";
let apresentador3 = "";

if (maisApresentador === "sim") {
    if (qtdApresentador === "2") {
        apresentador2 = document.getElementById("apresentador-2").value.trim();
        apresentador2 = ' e ' + apresentador2;
    } else if (qtdApresentador === "3") {
        apresentador2 = document.getElementById("apresentador-2").value.trim();
        apresentador3 = document.getElementById("apresentador-3").value.trim();
        apresentador2 = ', ' + apresentador2;
        apresentador3 = ' e ' + apresentador3;
    } else {
        apresentador2 = " ... [et al.]";
    }
}*/

    //Contribuidores - Ilustrador

    let orientador = document.getElementById("orientador-nome").value.trim();
    orientador = orientador ? ' ; orientado por ' + orientador : "";
    
    const coorientador = document.querySelector('input[name="coorientador-sn"]:checked')?.value;
    const qtdCoorientador = document.querySelector('input[name="coorientador-qtd"]:checked')?.value;
    
    let coorientador1 = document.getElementById("coorientador-1").value.trim();
    coorientador1 = coorientador1 ? coorientador1 : "";

    let coorientador2 = document.getElementById("coorientador-2").value.trim();
    coorientador2 = coorientador2 ? coorientador2 : "";
    
    let coorientador3 = document.getElementById("coorientador-3").value.trim();
    coorientador3 = coorientador3 ?  coorientador3 : "";

    if (coorientador === "sim") {
        if (qtdCoorientador === "1") {
            coorientador1 = ' ; coorientado por ' + coorientador1;
        } else if (qtdCoorientador === "2") {
            coorientador1 = ' ; coorientado por ' + coorientador1;
            coorientador2 = ' e ' + coorientador2;
        } else if (qtdCoorientador === "3") {
            coorientador1 = ' ; coorientado por ' + coorientador1;          
            coorientador2 = ', ' + coorientador2;
            coorientador3 = ' e ' + coorientador3;
        } else {
            coorientador1 = ' ; coorientado por ' + coorientador1;
            coorientador2 = " ... [et al.]";
        }
    }

    const coorientadores = coorientador1 + coorientador2 + coorientador3;

    /*
    //Contribuidores - Organizador
    let organizador1 = "";
    if (document.getElementById("organizador-checkbox").checked) {
        const nOrganizador = document.getElementById("organizador-1").value.trim();
        organizador1 = ' ; organizado por ' + nOrganizador;
    }
    
    const maisOrganizador = document.querySelector('input[name="organizador-sn"]:checked')?.value;
    const qtdOrganizador = document.querySelector('input[name="organizador-qtd"]:checked')?.value;
    let organizador2 = "";
    let organizador3 = "";
    
    if (maisOrganizador === "sim") {
        if (qtdOrganizador === "2") {
            organizador2 = document.getElementById("organizador-2").value.trim();
            organizador2 = ' e ' + organizador2;
        } else if (qtdOrganizador === "3") {
            organizador2 = document.getElementById("organizador-2").value.trim();
            organizador3 = document.getElementById("organizador-3").value.trim();
            organizador2 = ', ' + organizador2;
            organizador3 = ' e ' + organizador3;
        } else {
            organizador2 = " ... [et al.]";
        }
    }
    
    //Contribuidores - Prefaciador  
    let prefaciador = "";
    if (document.getElementById("prefaciador-checkbox").checked) {
        const nPrefaciador = document.getElementById("prefaciador-1").value.trim();
        prefaciador = ' ; prefaciado por ' + nPrefaciador;
    }
    
    const maisPrefaciador = document.querySelector('input[name="prefaciador-sn"]:checked')?.value;
    const qtdPrefaciador = document.querySelector('input[name="prefaciador-qtd"]:checked')?.value;
    let prefaciador2 = "";
    let prefaciador3 = "";
    
    if (maisPrefaciador === "sim") {
        if (qtdPrefaciador === "2") {
            prefaciador2 = document.getElementById("prefaciador-2").value.trim();
            prefaciador2 = ' e ' + prefaciador2;
        } else if (qtdPrefaciador === "3") {
            prefaciador2 = document.getElementById("prefaciador-2").value.trim();
            prefaciador3 = document.getElementById("prefaciador-3").value.trim();
            prefaciador2 = ', ' + prefaciador2;
            prefaciador3 = ' e ' + prefaciador3;
        } else {
            prefaciador2 = " ... [et al.]";
        }
    }
    
    //Contribuidores - Tradutor  
    let tradutor = "";
    if (document.getElementById("tradutor-checkbox").checked) {
        const nTradutor = document.getElementById("tradutor-1").value.trim();
        tradutor = ' ; traduzido por ' + nTradutor;
    }
    
    const maisTradutor = document.querySelector('input[name="tradutor-sn"]:checked')?.value;
    const qtdTradutor = document.querySelector('input[name="tradutor-qtd"]:checked')?.value;
    let tradutor2 = "";
    let tradutor3 = "";
    
    if (maisTradutor === "sim") {
        if (qtdTradutor === "2") {
            tradutor2 = document.getElementById("tradutor-2").value.trim();
            tradutor2 = ' e ' + tradutor2;
        } else if (qtdTradutor === "3") {
            tradutor2 = document.getElementById("tradutor-2").value.trim();
            tradutor3 = document.getElementById("tradutor-3").value.trim();
            tradutor2 = ', ' + tradutor2;
            tradutor3 = ' e ' + tradutor3;
        } else {
            tradutor2 = " ... [et al.]";
        }
    }
        */

    //Saída da função getRespInt

    let entradaPrincipal = `\n${autorEntrada}`;
    entradaPrincipal = entradaPrincipal ? entradaPrincipal : ""; //vazio se pessoa != autor 

    let areaResponsabilidade = ` / ${autor}${orientador}${coorientadores}`;

    return { entradaPrincipal, areaResponsabilidade }
}

// ÁREA DE PUBLICAÇÃO

function getPublicacao() {

    let publicador = document.getElementById("publicador").value.trim();
    publicador = publicador ? ' : ' + publicador : ' : [s.n.]';

    let loc = document.getElementById("local").value.trim();
    const local = loc ? '. — ' + loc : ". — [S.l.]";

    let ano = document.getElementById("ano").value.trim();
    ano = ano ? ', ' + ano + '.' : ', [s.d.].';

    //Mais publicador

    /*
    const maisPublicador = document.querySelector('input[name="publicador-sn"]:checked')?.value;
    
    let publicador2 = document.getElementById("publicador-2").value.trim();
    publicador2 = publicador2 ? ' : ' + publicador2 : "";
    
    let loc2 = document.getElementById("local-2").value.trim();
    let local2 = loc2 ? ' ; ' + loc2 : "";
    
    if (maisPublicador === "sim") {
        if (loc2 === loc) {
            local2 = "";
        }
    } 
        */

    const areaPublicacao = `${local}${publicador}${ano}`;

    return { areaPublicacao }

}

// ÁREA DE DESCRIÇÃO FÍSICA

//Paginação

function getDescricaoFisica() {

    const texto = document.getElementById('texto').checked;

    const software = document.getElementById('software').checked;

    let formato = document.getElementById("formato").value.trim();
    
    let pag = document.getElementById("paginas")?.value.trim();
    const paginacao = pag ? `${pag} p.` : "";

    let dur = document.getElementById("duracao-do-arquivo")?.value.trim();
    const duracao = dur ? ` ; ${dur}` : "";

    let tam = document.getElementById("tamanho-do-arquivo")?.value.trim();
    const tamanho = tam ? ` ; ${tam}` : "";

    if (texto) {
        formato = formato ? ` ; ${formato}` : "";
    } else {
        formato = formato ? formato : "";
    }

    //Material gráfico (Imagens)

    const coloracaoIl = document.querySelector('input[name="il-coloracao"]:checked')?.value;
    const coloracaoFotos = document.querySelector('input[name="fotos-coloracao"]:checked')?.value;
    const mapasChecked = document.querySelector('#img-mapas:checked');
    const formulasChecked = document.querySelector('#img-formulas:checked');

    let ilustracoes = "";
    let fotos = "";
    let mapas = "";
    let formulas = "";

    if (coloracaoIl === "il-cores") {
        ilustracoes = "il. color."
    } else if (coloracaoIl === "il-pb") {
        ilustracoes = "il. p&b"
    } else if (coloracaoIl === "il") {
        ilustracoes = "il."
    } else {
        ilustracoes = "";
    }

    if (coloracaoFotos === "foto-cores") {
        fotos = "fotos color."
    } else if (coloracaoFotos === "foto-pb") {
        fotos = "fotos p&b"
    } else if (coloracaoFotos === "foto") {
        fotos = "fotos"
    } else {
        fotos = "";
    }

    if (mapasChecked) {
        mapas = "mapas"
    }

    if (formulasChecked) {
        formulas = "formulas"
    }

    // Cria uma lista com as imagens possíveis:
    const listaImagens = [ilustracoes, fotos, mapas, formulas];

    // Filtra lista de imagens para remover as que não estão presentes no livro:
    const imagensPresentes = listaImagens.filter(imagem => imagem);

    // Cria uma string formatada para o resultado final:
    let imagens = "";

    if (imagensPresentes.length > 0) {
        imagens = " : " + imagensPresentes[0];
    }

    if (imagensPresentes.length > 1) {
        // Adiciona as próximas imagens intermediárias precedidas com ", ":
        for (let i = 1; i < imagensPresentes.length; i++) {
            imagens += ", " + imagensPresentes[i];
        }
    }

    imagens = imagens ? imagens : '';


    return { formato, paginacao, imagens, tamanho, duracao }

}

// ÁREA DE NOTAS

// Notas descritivas
function getNota() {

    //const isbnSN = document.querySelector('input[name="isbn-sn"]:checked')?.value;
    let areaNotaISBN = "";


    let nota1 = document.getElementById("nota-1").value.trim();
    nota1 = nota1 ? `\n    ${nota1}` : "";


    let nota2 = document.getElementById("nota-2").value.trim();
    nota2 = nota2 ? `\n    ${nota2}` : "";


    return { nota1, nota2 };
}
// ISBN
function getIdentificador() {


    let isbn = document.getElementById("isbn").value.trim();
    isbn = isbn ? `\n    ISBN ${isbn}` : "";

    let doi = document.getElementById("doi").value.trim();
    doi = doi ? `\n    DOI ${doi}` : "";

    return { isbn, doi };
}

// ASSUNTOS             
function getAssunto() {
    let assunto1 = document.getElementById("assunto-1").value.trim();
    assunto1 = assunto1 ? `1. ${assunto1}` : "";

    let assunto2 = document.getElementById("assunto-2").value.trim();
    assunto2 = assunto2 ? `2. ${assunto2}` : "";

    let assunto3 = document.getElementById("assunto-3").value.trim();
    assunto3 = assunto3 ? `3. ${assunto3}` : "";

    let assunto4 = document.getElementById("assunto-4").value.trim();
    assunto4 = assunto4 ? `4. ${assunto4}` : "";

    let assunto5 = document.getElementById("assunto-5").value.trim();
    assunto5 = assunto5 ? `5. ${assunto5}` : "";

    const assuntos = `${assunto1} ${assunto2} ${assunto3} ${assunto4} ${assunto5}`;

    return { assuntos };
}

/*  .......................................................... FUNÇÕES EXPORTADAS  */

// FICHA

export function getFicha() {

    //chamada de funções de cada área (para obter o valor preenchido após carregamento)
    const areaTitulo = getTitulo().areaTitulo;
    //const areaEdicao = getEdicao().areaEdicao;
    const entradaPrincipal = getRespInt().entradaPrincipal;
    const areaResponsabilidade = getRespInt().areaResponsabilidade;
    const areaPublicacao = getPublicacao().areaPublicacao;
    const formato = getDescricaoFisica().formato;
    const paginacao = getDescricaoFisica().paginacao;
    const tamanho = getDescricaoFisica().tamanho;
    const duracao = getDescricaoFisica().duracao;
    const imagens = getDescricaoFisica().imagens;
    //const materialAdicional = getDescricaoFisica().materialAdicional;
    //const areaSerie = getSerie().areaSerie;
    const isbn = getIdentificador().isbn;
    const doi = getIdentificador().doi;
    const nota1 = getNota().nota1;
    const nota2 = getNota().nota2;
    const assuntos = getAssunto().assuntos;

    //Configuração da ficha catalográfica
    let ficha = `${entradaPrincipal}
    ${areaTitulo}${areaResponsabilidade}${areaPublicacao}
    ${paginacao}${formato}${duracao}${tamanho}${imagens}
    ${nota1}${nota2}${isbn}${doi}
    
    ${assuntos}
    `
    // Ajustes finais da ficha
    ficha = ficha.replace('.. — ', ' . — ') // Elimina ponto final que é seguido de marcador de nova seção
    ficha = ficha.replace('il..', 'il.') // Elimina ponto final da área de série após abreviação il.
    ficha = ficha.replace('p..', 'p.') // Elimina ponto final da área de série após abreviação p.
    ficha = ficha.replace('color..', 'color.') // Elimina de ponto final da área de série após abreviação color.
    ficha = ficha.replace('/  ; ', '/ ');
    ficha = ficha.replace('/ .', '.');

    ficha = JSON.stringify(ficha);

    localStorage.setItem('ficha', ficha);

    return { ficha }
}

/*/ CÓDIGOS

export function getCodigos() {

    let cdd = document.getElementById('cdd').value.trim();
    cdd = cdd ? `CDD ${cdd}` : "";

    let cdu = document.getElementById('cdu').value.trim();
    cdu = cdu ? `CDU ${cdu}` : "";

    let cutter = document.getElementById('cutter').value.trim();
    cutter = cutter ? `Cutter ${cutter}` : "";

    let pha = document.getElementById('pha').value.trim();
    pha = pha ? `PHA ${pha}` : "";

    let codigos = `${cdd} ${cdu} ${cutter} ${pha}`

    codigos = JSON.stringify(codigos);

    localStorage.setItem('codigos', codigos);

    return { codigos }
}
    */

// IDENTIFICAÇÃO

export function getServico() {

    const servicoNome = document.getElementById("servico-nome").value.trim();
    const servico = servicoNome ? `${servicoNome}` : "";

    localStorage.setItem("servico", servico);

    return { servico }
}

/*
export function getBibliotecario() {

    const genero = document.querySelector('input[name="bibliotecario-genero"]:checked')?.value;
    let bibGenero = "";

    if (genero === "feminino") {
        bibGenero = "bibliotecária";
    } else if (genero === "masculino") {        
        bibGenero = "bibliotecário";
    } else {        
        console.log("Gênero do bibliotecário não selecionado");
    }

    let bibliotecarioNome = document.getElementById("bibliotecario-nome").value.trim();
    bibliotecarioNome = bibliotecarioNome ? `${bibliotecarioNome} (${bibGenero} responsável)` : "";

    let crb = document.getElementById("crb").value.trim();
    crb = crb ? ` - CRB ${crb}` : "";

    let bibliotecario = `${bibliotecarioNome}${crb}` 
  
    localStorage.setItem("bibliotecario", bibliotecario); 

    return { bibliotecario }
} */

// CRÉDITOS

export function getCreditos() {
    let creditos = document.getElementById("creditos").value.trim();
    creditos = creditos ? creditos : "";

    creditos = JSON.stringify(creditos);

    localStorage.setItem("creditos", creditos);

    return { creditos }

}
