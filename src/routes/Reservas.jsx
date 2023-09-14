import { Link } from 'react-router-dom';
import { ListaReservas } from "../components/ListaReservas"
import { useState } from 'react';

export default function Reservas() {

    const [reserva, setReserva] = useState({
        id: null,
        data: {dia: null, mes: null, ano: null},
        horario: null,
        espaco: null,
        departamento: null,
        responsavel: null,
        telefone: null,
        modalidade: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Obter os valores dos inputs
        const id = event.target.id === "id" ? event.target.value : null;
        const data = event.target.id === "data" ? event.target.value : null;
        const horario = event.target.id === "horario" ? event.target.value : null;
        const espaco = event.target.id === "espaco" ? event.target.value : null;
        const departamento = event.target.id === "departamento" ? event.target.value : null;
        const responsavel = event.target.id === "responsavel" ? event.target.value : null;
        const telefone = event.target.id === "telefone" ? event.target.value : null;
        const modalidade = event.target.id === "modalidade" ? event.target.value : null;

        try {
            // Adicionar a reserva à lista
            const [dia, mes, ano] = data.split('/');
            const reserva = {
                id,
                data: { dia: dia, mes: mes, ano: ano },
                horario,
                espaco,
                departamento,
                responsavel,
                telefone,
                modalidade,
            };
            ListaReservas.push(reserva);
                    
        } catch (error) {
            console.log();    
        } finally {
            const reserva = {
                id: null,
                data: { dia: null, mes: null, ano: null },
                horario: null,
                espaco: null,
                departamento: null,
                responsavel: null,
                telefone: null,
                modalidade: null,
            };
            // Limpar os campos do formulário
            setReserva({
                id: null,
                data: { dia: null, mes: null, ano: null },
                horario: null,
                espaco: null,
                departamento: null,
                responsavel: null,
                telefone: null,
                modalidade: null,
            });

            ListaReservas.push(reserva);
        }
      };
      
    
    return (
        <>
        <aside>
            <h2>CRIAR RESERVAS</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="id" placeholder="ID" />
                <input type="date" id="data" placeholder="Data" />
                <input type="time" id="horario" placeholder="Horário" />
                <input type="text" id="espaco" placeholder="Espaço" />
                <input type="text" id="departamento" placeholder="Departamento" />
                <input type="text" id="responsavel" placeholder="Responsável" />
                <input type="text" id="telefone" placeholder="Telefone" />
                <input type="text" id="modalidade" placeholder="Modalidade" />
                
                <button type="submit">RESERVAR</button>
            </form>
        </aside>
        <main>
            <h2>RESERVAS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Espaço</th>
                        <th>Horario</th>
                        <th>Departamento</th>
                        <th>Responsável</th>
                        <th>Telefone Celular</th>
                        <th>Modalidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaReservas.map( (reserva, indice)=>(
                    <tr key={indice} >
                        <td>{reserva.data.dia}/{reserva.data.mes}/{reserva.data.ano}</td>
                        <td>{reserva.espaco}</td>
                        <td>{reserva.horario} às {reserva.horario + 1}</td>
                        <td>{reserva.departamento}</td>
                        <td>{reserva.responsavel}</td>
                        <td>{reserva.telefone}</td>
                        <td>{reserva.modalidade}</td>
                        <td>
                            <Link to={`/reservas/${reserva.id}/editar`}>Editar</Link>
                            <Link to={`/reservas/${reserva.id}/cancelar`}>Cancelar</Link>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </main>
        </>
    )
}