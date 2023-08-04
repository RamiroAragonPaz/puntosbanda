import { useContext, useEffect } from 'react'
import './TusBandas.scss'
import { Context } from '../../Context/Context'

const TusBandas = () => {

    /* const { bandas, currentBanda, setCurrentBanda } = useContext(Context)
    console.log(bandas[0])

    const selectedBanda = (e) => {
        setCurrentBanda(e.target.value)
        console.log("Banda Actual:", currentBanda)
    }    



    return (
        <div>
            <p>Tus Bandas</p>
            {bandas[0].length <= 1 ? (
                <div>
                    <button onClick={(e)=>selectedBanda(e)} value={bandas[0]}>
                        <h1>{bandas.id}</h1>
                    </button>
                </div>
            ):( bandas.map((banda)=> {
                return(
                    <div>
                        <button onClick={(e)=>selectedBanda(e)} value={banda.id}>
                            <h1>{banda.id}</h1>
                        </button>
                    </div>
                )
            })
            )}
        </div>
    ) */
}
export default TusBandas