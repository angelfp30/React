import { useState, useEffect } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState()

    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { _id } = response
            const url = `/cat/${_id}/says/${firstWord}`
            setImageURL(url)
        })
    }, [fact])

    return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}