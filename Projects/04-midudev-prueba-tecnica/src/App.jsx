import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App(){

    const { fact, getFactAndUpdate } = useCatFact()
    const { imageURL } = useCatImage({ fact })
   
    const handleClick = async () => {
        getFactAndUpdate()
    }

    return(
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt={`Image extracted using the first three words for ${fact}`} />}
        
        </main>
    )
}