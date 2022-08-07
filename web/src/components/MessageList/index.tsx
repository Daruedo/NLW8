import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Estou ansioso para que essa nova funcionalidade de tudo certo!!!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Daruedo.png" alt="Daruedo" />
                        </div>
                        <span>Daruedo</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Vai ficar muito bom sim 🥰</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AdrianeRibeiro.png" alt="Adriane Ribeiro" />
                        </div>
                        <span>Adriane Ribeiro</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Está ficando top, só continuar assim que vai dar boa.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/tiagofilipe3.png" alt="Tiago Filipe" />
                        </div>
                        <span>Tiago Filipe</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}