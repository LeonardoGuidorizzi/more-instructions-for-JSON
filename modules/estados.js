/************************************************************
 * objetivo:Obter uma lista de estados 
 * Data: 29/08/2022
 * Autor:Marcel
 * 
 ***********************************************************/
//simulando o resultado de uma API
var getlistEstados = [
    {
        sigla:'SP',
        nome: 'Sao Paulo'
    },
    {
        sigla: 'AC',
        nome: 'Acre'
    },
    {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    },
    {
        sigla: 'BA',
        nome: 'Bahia'
    },
    {
        sigla: 'CE',
        nome: 'Ceara'
    },
    {
        sigla: 'MG',
        nome: 'Minas Gerais'
    },
    {
        sigla: 'GO',
        nome: 'Goias'
    },
    {
        sigla: 'SC',
        nome: 'Santa Catarina '
    }
]

//Retorna os dados  de um  estados tendo como base a sigla
const getEstados = function(siglaEstados){
    //converte a chegada da string maiuscula 
    let sigla = siglaEstados
    //cria um objetp do tipo JSON
    let estado ={}
    let erro = true

    if(typeof(sigla)!= 'undefined'){

    
        //tratamento para a validacao de sigla vazia e com diferenca de carcteres
        if (sigla != '' && sigla.length == 2){

    
            getlistEstados.forEach(item =>{
                //localiza um item no array (index()) // se achar ele retorna 0
            if (item.sigla.indexOf(sigla.toUpperCase())==0){
                // Criamos as chaves uf e descricao descricao enviar pelo JSON
                estado.uf = item.sigla,
                estado.descricao = item.nome
                erro = false
            }
            })
        }
    } 
    if(erro){
        return false
    }else{
        return estado
    }
}
console.log(getEstados('SP'))




//Retorna os dados  de um  estados tendo como base a sigla
// const getEstados = function(){
//     let listaEstados = []
//     erro = true
   
//     estados.forEach(item => {
//        listaEstados.push(item.sigla)
//        erro = false    
//     });
//     if (erro){
//        return false
//     }else{
//        return listaEstados
//     }
//    }
//   console.table(getEstados()) 