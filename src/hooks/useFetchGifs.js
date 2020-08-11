import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // si el ultimo array esta vacio, lo va a ejecutar una vez, si no, lo
    // va a ejecutar cada vez que haya un cambio en ese elemento del array
    useEffect(() => {

        getGifs(category)

        .then(gifs => {
            setState({
                data: gifs,
                loading: false
            })
        })
    }, [category])

    return state; // {data:[], loading: ture}
}