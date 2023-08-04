import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Main.scss';
import { useState, useEffect, useContext } from 'react'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import db from '../firebase/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

const MySwal = withReactContent(Swal)

const Main = () => {
    
    const [loading, setLoading] = useState(false)
    const [newMiembros, setNewMiembros] = useState(null)    
    const bmCollection = collection( db, 'BuenosMuchachos')

    

    const getMiembros = async () => {
        setLoading(true)
        const bmSnapshot = await getDocs(bmCollection);
        const oldMembers = bmSnapshot.docs.map((doc) =>{
            let member = doc.data();
            member.id = doc.id;
            return member
        })
        console.log(oldMembers)
        const list = [...oldMembers].sort((a,b)=>(a.puntos > b.puntos ? 1 : a.puntos < b.puntos ? -1 : 0))
        setNewMiembros(list.reverse())
        setLoading(false)
    }

    const sumPoints = async(id, puntos) => {
        const miembro = doc(bmCollection , id)
        const puntajeAnt = puntos;
        const puntajeNuevo = puntajeAnt + 10
        await updateDoc(miembro, { puntos: puntajeNuevo })
        getMiembros();
    }


    const restPoints = async(id, puntos) => {
        const miembro = doc(bmCollection , id)
        const puntajeAnt = puntos;
        const puntajeNuevo = puntajeAnt - 10
        await updateDoc(miembro, { puntos: puntajeNuevo })
        getMiembros()
    }


    const confirmSum = (id, puntos) => {
        MySwal.fire({
            title: `Merece ${id} sumar puntos?`,
            text: 'Se merece 10 puntos banda',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Sumar 10 puntos'
        }).then((result)=>{
            if(result.isConfirmed){
                sumPoints(id, puntos)
                Swal.fire(
                    'Sumado!',
                    `${id} sumo 10 puntos`,
                    'success'
                )
            }
        })
    }


    const confirmRes = (id, puntos) => {
        MySwal.fire({
            title: `Merece ${id} restar puntos?`,
            text: 'Se merece 10 puntos banda menos',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: 'Restar 10 puntos'
        }).then((result)=>{
            if(result.isConfirmed){
                restPoints(id, puntos)
                Swal.fire(
                    'Resto!',
                    `${id} resto 10 puntos`,
                    'success'
                )
            }
        })
    }

    
        

    useEffect (() => {
        getMiembros()
    },[])
        

    return(
        <div className='body-container'>
            {loading ? 
            <div className='brand-container loader'>
                <p>Banca mientras se carga la banda...</p>
            </div> : (
            <div>
                <div className='brand-container'>
                    <h1 className='brand'>Puntos Banda</h1>
                    {newMiembros && <h3>Actualmente el mas hijo de puta es: {newMiembros[10].id}</h3>}
                </div>
                <div>
                    <div className='table' >
                        <h1>Ranking</h1>
                        {newMiembros && newMiembros.map((miembro, index)=>{
                            return(
                                <div className='table-row' key={index}>
                                    <button className="button res" onClick={()=> {confirmRes(miembro.id, miembro.puntos)} } >
                                        <p>Bajar 10 puntos</p>
                                        <FontAwesomeIcon icon={faThumbsDown} />
                                    </button>
                                    <div>
                                        <p>Puesto {index + 1}</p>
                                    </div>
                                    <h3>{miembro.id}</h3>
                                    <p>{miembro.puntos}</p>
                                    <button className="button sum" onClick={()=> {confirmSum(miembro.id, miembro.puntos)} } >
                                        <p>Agregar 10 puntos</p> 
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </button>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
export default Main;