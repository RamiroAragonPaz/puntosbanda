import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className='brand-container'>
                    <Link to={'/'} >
                        <p className='brand'>Puntos Banda</p>
                    </Link>
                </div>
                <div className='buttons-container'>
                    <Link to={`/`} >
                        <p className='button'>Tabla</p>
                    </Link>
                    <Link to={`/CrearBanda`} >
                        <p className='button'>Crear Banda</p>
                    </Link>
                    <Link to={`/TusBandas`} >
                        <p className='button'>Tus Bandas</p>
                    </Link>
                </div>
            </nav>
            
        </div>
    )
}
export default Nav