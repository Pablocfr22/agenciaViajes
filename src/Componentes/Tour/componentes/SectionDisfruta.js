import '../css/SectionDisfruta.css'
import ListaDisfruta from './ListaDisfruta'
import icon1 from '../imagenes/iconos/Location.svg'
import icon2 from '../imagenes/iconos/estrella.svg'
import icon3 from '../imagenes/iconos/cafe.svg'
import icon4 from '../imagenes/iconos/heart.svg'


function SectionDisfruta(props){
    const paquetes=ListaDisfruta.map(x =>(
        <div class="paquete uno">
            <div class="image-paquete">
                <img src={x.imagen}/>
            </div>
            <div class="contenido-paquete">
                <div class="contenido-superior">
                    <div class="contenido-izquierdo">
                        <h3>CVK Park Bosphrus Hotel Instanbul</h3>
                        <p class="location">
                            <img src={icon1}/>
                            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                        </p>
                        <div class="estrellas">
                            <p>
                                <img src={icon2}/>
                                <img src={icon2}/>
                                <img src={icon2}/>
                                <img src={icon2}/>
                                <img src={icon2}/>
                                Hotel 5 estrellas
                            </p>
                            <p>
                                <img src={icon3}/> 
                                20+ Comodidades
                            </p> 
                        </div>
                        <div class="opiniones">
                            <p>4.2</p>
                            <p>{x.opinion}</p>
                        </div>
                    </div>
                    <div class="contenido-derecho">
                        <p>desde</p>
                        <p>{x.precio}<span class="noche">/noche</span></p>
                    </div>
                </div>
                <hr></hr>
                <div class="contenido-inferior">
                    <div class="corazon"> 
                        <img src={icon4}/>
                    </div>
                    <button class="ver-lugar">Ver Lugar</button>
                </div>
            </div>
        </div>
    ))
    return(
        <div class="disfruta">
            <h2><span>Disfruta</span> con nuestros tours</h2>
            <div class="paquetes">
                {paquetes}
            </div>
            <div class="boton">
            <button class="boton-destinos">MÁS PAQUETES</button>
        </div>
        </div>
    )
}
export default SectionDisfruta