import Card from "../Card/Card";
import styles from "./Footer.module.scss"
import GithubSVG from "../../assets/Octicons-mark-github.svg"
import LinkedinSVG from "../../assets/linkedin.svg"

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            <Card link="https://github.com/Git-Senin" img={GithubSVG} alt="github"/>
            <Card link="https://www.linkedin.com/in/8a392424a/" img={LinkedinSVG} alt="linkedin"/>
        </footer >
    );
}