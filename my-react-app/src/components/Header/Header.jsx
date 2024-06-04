import { useEffect, useRef, useState} from "react";
import { LocationProvider, useLocationUpdate } from "../../LocationContext";
import styles from "./Header.module.scss"
import citiesJson from '../../cities-json/cities500.json';

export default function Header(prop) {
    const updateLocation = useLocationUpdate();
    const citiesData = citiesJson;
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const isValidLocation = (input) => {
        console.log(input);
        // If valid set location
        if(citiesData.some((city) => city.name === input)){
            console.log(`New Location ${input}`)
            updateLocation(input);
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
