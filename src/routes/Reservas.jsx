import { ListaReservas } from "../components/ListaReservas";



export default function Reservas() {

  return (
    <>

    <div>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Espaço</th>
                    <th>Horario</th>
                    <th>Departamento</th>
                    <th>Nome Completo do Responsavel</th>
                    <th>Telefone Celular</th>
                    <th>Modalidade</th>
                </tr>
            </thead>
            <tbody>
                {ListaReservas.map( (reserva, indice)=>(
                    <tr key={indice}>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    </>
  )
}
