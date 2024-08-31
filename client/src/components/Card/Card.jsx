import styles from "./Card.module.scss"

export default function Card({link, img, alt}) {
    return (
    <>
        <a href={link} className={styles.Card} target="_blank" rel="noopener noreferrer">
            <img className={styles.Card__img} src={img} alt={alt} />
        </a>
    </>
    )
}
