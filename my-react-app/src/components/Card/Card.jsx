import styles from "./Card.module.scss"

export default function Card({link, img, alt}) {
    return (
    <>
        <a href={link} className={styles.Card}>
            <img src={img} alt={alt} />
        </a>
    </>
    )
}