import { useEffect, useRef, useState} from "react";
import getCityData from "../../api/getCity.jsx";
import styles from "./Header.module.scss"

export default function Header() {
    const [input, setInput] = useState("Los Angeles");
    const inputRef = useRef(null);
    const [cityData, setCityData] = useState(null);
    let temp = null;

    useEffect(() => {
        // Set input size
        inputRef.current.style.width = `${25 + (inputRef.current.value.length*25)}px`;
        // Api fetch
        setCityData(getCityData(input));
        console.log(cityData);
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
                 is <span>{temp || " . . ."}</span>
            </h1>
        </header>
    )
}
