import { useEffect, useRef, useState} from "react";
import { useLocationUpdate } from "../../hooks/LocationContext";
import styles from "./Header.module.scss"
import citiesJson from '../../cities-json/cities500.json';

export default function Header(prop) {
    const updateLocation = useLocationUpdate();
    const citiesData = citiesJson;
    const [input, setInput] = useState("Los Angeles");
    const inputRef = useRef(null);

    const isValidLocation = (input) => {
        // If valid set location
        if(citiesData.some((city) => city.name === input)){
            updateLocation(input);
        } else {
            updateLocation(null)
        }
    }

    useEffect(() => {
        // Set input 
        inputRef.current.style.width = `${200 + (inputRef.current.value.length*20)}px`
    }, [input])

    return(
        <header className={styles.Header}>
            <h1>
                The Weather in 
                <input 
                    id="city-input"
                    value={input}
                    className={styles.Header__input}
                    onChange={e => {
                            setInput(e.target.value)
                            isValidLocation(e.target.value)
                        }
                    }
                    ref={inputRef}
                />
                 is <span>{prop.data?.main?.temp || " . . ."}</span>
            </h1>
        </header>
    )
}
