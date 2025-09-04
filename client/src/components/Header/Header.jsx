import { useEffect, useRef, useState} from "react";
import useDebounce from "../../hooks/useDebounce";
import styles from "./Header.module.scss";

export default function Header() {
    const [input, setInput] = useState("Los Angeles");
    const inputRef = useRef(null);
    const defaultCityData = { main: {temp: 0}};
    const [cityData, setCityData] = useState(null);
    const debouncedInput = useDebounce(input, 500);

    // Api fetch
    const fetchCityData = async (city) => {
        if (!city) {
            setCityData(defaultCityData);
            return;
        };
        fetch(`/api/${city}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Status Code : ${response.status}`);
                }
                return response.json();
            })
            .then(data => setCityData(data))
            .catch(error => console.error("Error fetching city data:", error));
    };

    // Format Temperature for rendering
    const formatTemperature = (temp, unit) => {
        if (!temp || temp === 0) return ". . .";
        if (unit === "C") return (temp - 273.15).toFixed(2);
        if (unit === "F") return ((temp - 273.15) * 9/5 + 32).toFixed(2);
        if (unit === "K") return temp;
    };

    // initial fetch
    useEffect(() => {
        fetchCityData(input);
    }, []);

    // Input Sizer
    useEffect(() => {
        inputRef.current.style.width = `${100 + inputRef.current.value.length * 15}px`;
    }, [input]);

    // Input debouncing
    useEffect(() => {
        if (debouncedInput) {
            fetchCityData(debouncedInput);
        }
    }, [debouncedInput]);

    return(
        <header className={styles.Header}>
            <h1>
                The Temperature in 
                <input 
                    id="city-input"
                    value={input}
                    className={styles.Header__input}
                    ref={inputRef}
                    onChange={e => {setInput(e.target.value);}}
                />
                 is <span className={styles.Header__temperature}>{formatTemperature(cityData?.main?.temp, "F")}&deg; F</span>
            </h1>
        </header>
    )
}
