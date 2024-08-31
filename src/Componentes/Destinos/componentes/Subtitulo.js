import '../css/Destino.css'

function Subtitulo(props){
    return(
        <div className='Subtitulo'>
            <h2 className='h2-subtitulo'>{props.texto}</h2>
        </div>
    )
}

export default Subtitulo