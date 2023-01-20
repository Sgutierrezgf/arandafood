import { useEffect, useState } from 'react'
import axios from 'axios';
import start from '../styles/icons/ic_star.svg'
import favorite from '../styles/icons/ic-favorite.svg'
// import portion from '../styles/icons/ic_portion.svg'
// import time from '../styles/icons/ic_time.svg'
// import chef from '../styles/icons/ic_chef.svg'
import '../styles/Recetas.scss'

const Recetas = () => {

    interface DataType {
        strCategoryThumb: string;
        strCategory: string;
        strCategoryDescription: string;
    }

    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const [recetas, setRecetas] = useState<Array<DataType>>([]);

    useEffect(() => {
        getRecetas();
        console.log(recetas)
    }, [recetas]);

    const getRecetas = async () => {
        const respuesta = await axios.get(url);
        setRecetas(respuesta.data.categories);
    }
    return (
        <div className="middle">
            <div className="middleTitle">Nuevas Recetas</div>
            <div className="contCarrusel">
                <div className="carrusel">
                    {
                        recetas.map((data, index) => {
                            return (
                                <div className="tarjet" >
                                    <img className="plate" src={data.strCategoryThumb} alt='' />
                                    <div className="normalTarjet">
                                        <div className="textFood">
                                            <span className="food">{data.strCategory}</span>
                                            {/* <span className="foodDesc1">{data.strCategoryDescription}</span> */}
                                        </div>
                                        <div className="score">
                                            <img className="star" src={start} alt='start' />
                                            <span>5.0</span>
                                            <img className="heart" src={favorite} alt='favorite' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div >
            </div >
        </div >
    )
}

export default Recetas