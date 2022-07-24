import axios from "axios";
import { createContext, useState } from "react";

const LyricsContext = createContext()

const LyricsProvider = ({children}) => {
    const [alert, setAlert] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [loading, setLoading] = useState(false)

    const searchLyrics = async search => {
        setLoading(true)
        try {
            const {artist, song} = search
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const {data} = await axios(url)
            setLyrics(data.lyrics)
            setAlert('')
        } catch (err) {
            setAlert('Canción no encontrada')
        }
        setLoading(false)
    }
    return(
        <LyricsContext.Provider 
        value={{
            alert,
            lyrics,
            loading,
            setAlert,
            searchLyrics
        }}>
            {children}
        </LyricsContext.Provider>
    )
}

export {
    LyricsProvider
}

export default LyricsContext