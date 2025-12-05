var database = require("../database/config");

function cadastrarTentativa(fkUsuario, acertos, erros) {
    var instrucao = `
        insert into tentativa (fkusuario, fkquiz, acertos, erros)
        values (${fkUsuario}, 1, ${acertos}, ${erros});
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarTentativasPorUsuario(fkUsuario) {
    var instrucao = `
        select 
            idtentativa,
            acertos,
            erros,
            datatentativa
        from tentativa
        where fkusuario = ${fkUsuario} and fkquiz = 1
        order by datatentativa;
    `;
    console.log("Executando SQL listarTentativasPorUsuario:\n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarTentativa,
    listarTentativasPorUsuario
};
