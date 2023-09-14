import conectarBancoDeDados from 'oracledb';



// Cancelar uma reserva
export default function CancelarReserva(id) {
    // Conectar ao banco de dados
    const db = conectarBancoDeDados();
  
    // Excluir o registro
    db.collection('reservas').deleteOne({ _id: id });
}