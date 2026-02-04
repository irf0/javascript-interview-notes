import React from 'react'

export default function searchComponent() {
    const [apiData, setApiData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const api = () => {
        const result = fetch('https://dummyjson.com/products/search?q={query}')
        setApiData(result)
    }
    console.log("hi")

    return (
        <></>
    )
}
