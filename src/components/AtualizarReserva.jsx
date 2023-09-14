import conectarBancoDeDados from 'oracledb';



// Atualizar uma reserva
export default function AtualizarReserva(id,data, horario, espaco, departamento, responsavel, telefone, modalidade, ) {
    // Conectar ao banco de dados
    const db = conectarBancoDeDados();
  
    // Atualizar o registro
    db.collection('reservas').updateOne({ _id: id }, {
        data, 
        horario, 
        espaco, 
        departamento, 
        responsavel, 
        telefone, 
        modalidade, 
    });
}