import { useEffect, useRef, useState} from "react";
import styles from "./Header.module.scss"

export default function Header() {
    const [input, setInput] = useState("Los Angeles");
    const inputRef = useRef(null);
    const [cityData, setCityData] = useState(null);
    // Api fetch
    const fetchCityData = async (city) => {
        try {
            const response = await fetch(`/api/${city}`);
            if (!response.ok) {
                throw new Error("Failed to fetch city data");
            }
            const data = await response.json();
            setCityData(data);
        } catch (error) {
            console.error("Error fetching city data:", error);
            setCityData(null);
        }
    };
    
    useEffect(() => {
        // Set input size
        
        inputRef.current.style.width = `${25 + inputRef.current.value.length * 10}px`;
        
        fetchCityData(input);
    }, [input])

    return(
        <header className={styles.Header}>
            <h1>
                The Temperature in 
                <input 
                    id="city-input"
                    value={input}
                    className={styles.Header__input}
                    ref={inputRef}
                    onChange={e => {
                            setInput(e.target.value)
                        }
                    }
                />
                 is <span>{cityData ? cityData.data :" . . ."}</span>
            </h1>
        </header>
    )
}
