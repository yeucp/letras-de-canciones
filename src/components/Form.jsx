import { useState } from "react";
import useLyrics from "../hooks/useLyrics";


const Form = () => {

    const { setAlert, searchLyrics } = useLyrics()

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('Ingrese un nombre de artista y canción')
            return
        }
        setAlert('')
        searchLyrics(search)
    } 
    return (
        <form
            onSubmit={handleSubmit}
        >
            <legend>Busca por artistas y canción</legend> 
            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input 
                        type="text" 
                        name="artist"
                        value={search.artist}
                        onChange={e => setSearch({
                            ...search,
                            [e.target.name]: e.target.value
                        })} 
                        placeholder="Escribe un nombre"
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input 
                        type="text" 
                        name="song"
                        value={search.song}
                        onChange={e => setSearch({
                            ...search,
                            [e.target.name]: e.target.value
                        })} 
                        placeholder="Escribe el nombre de una canción"
                    />
                </div> 
                <input type="submit" />
            </div>
            

           
        </form>
    );
};

export default Form;