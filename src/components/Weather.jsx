import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchWeather() {
    const apiKey = "fe68ed87f0de9121280983afdb6f81f3"
    const [data, setData] = useState(null)
    const [query, setQuery] = useState('') //sets the location the user enters

    
        const fetchData = async (loc) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`)
            setData(response.data)
            console.log(response)
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.status);
            } else if (error.request) {
                console.error("No response received:", error.request)
            } else { 
                console.error("Error setting up request", error.message)
            } 
        }
    }
        
    useEffect(() => {
        fetchData()
    },[])

    const handleSearch = () => {
        fetchData(query)
    }
    return (
        <>
        <div className="header">
            <h1>⛅Weather app</h1>
        </div>
        <div className="container">
            <input type="text" id="location-input" placeholder="Enter a location" onChange={(e) => setQuery(e.target.value)}/>
            <button id="search-btn" onClick={handleSearch}>Search🔍</button>
        
        {/* Error handling since initially the data is set to null and wont be read when the oage renders */}
        {data && (
            <div className="weather">
            <h2>Location: {data.name}</h2>
            <p>Temperature: {data.main.temp}</p>
            <p>Humidity: {data.main.humidity}</p>
        </div>
        )}
            
            
        </div>
        </>
    )
}