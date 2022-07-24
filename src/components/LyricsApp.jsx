import useLyrics from "../hooks/useLyrics";
import Alert from "./Alert";
import Form from "./Form";
import Lyrics from "./Lyrics";

const LyricsApp = () => {
    const { alert, lyrics, loading} = useLyrics()
    return (
        <>
            <header>Búsqueda de letras de canciones</header>

            <Form/>

            <main>
                {alert ? <Alert>{alert}</Alert> : lyrics ? <Lyrics/> : loading ? 'Cargando...' : <p className="text-center">Busca letras de tus artistas favoritos</p>}
            </main>
        </>
    );
};

export default LyricsApp;