// import conectarBancoDeDados from 'oracledb';
import ListaReservas from './ListaReservas';


// Criar uma nova reserva
export function CriarReserva(id, dia, mes, ano, horario, espaco, departamento, responsavel, telefone, modalidade, ) {
    // Conectar ao banco de dados
    // const db = conectarBancoDeDados();

    
    // Criar um novo registro

    ListaReservas.push({
        key: id,
        value: {
            id: id,
            data: { dia, mes, ano },
            horario: horario,
            espaco: espaco,
            departamento: departamento,
            responsavel: responsavel,
            telefone: telefone,
            modalidade: modalidade,
        } 
    })

    console.log(ListaReservas);
}
