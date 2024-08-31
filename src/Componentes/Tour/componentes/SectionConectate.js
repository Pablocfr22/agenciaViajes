import '../css/SectionConectate.css'
import ListaConectate from './ListaConectate'
import icon1 from '../imagenes/iconos/persona.svg'
import icon2 from '../imagenes/iconos/estrella.svg'
import icon3 from '../imagenes/iconos/hora.svg'


function SectionConectate(props){
    const cards=ListaConectate.map(x =>(
        <div class="card-comunidad">
            <div class="imagen-card-comunidad">
                <img src={x.imagen}/>
            </div>
            <p>{x.titulo}</p>
            <p>{x.descripcion}</p>
            <p>{x.viajeros}</p>
        </div>
    ))
    return(
        <div class="contectate">
        <h2><span>Conéctate</span> con la comunidad viajera</h2>
        <div class="cards-comunidad">
            {cards}
        </div>
        <div class="boton">
            <button class="boton-destinos">VER MÁS COMUNIDAD</button>
        </div>
     </div>
    )
}
export default SectionConectate