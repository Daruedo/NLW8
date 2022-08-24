import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import io from 'socket.io-client';

import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';


type Feedback = {
    id: string;
    type: string;
    comment: string;
}

const feedbackQueue: Feedback[] = [];

// const socket = io('http://localhost:3333');

// socket.on('new_feedback', (newFeedback: Feedback) => {
//     feedbackQueue.push(newFeedback)
// })

export function MessageList() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

    // useEffect(() => {
    //     setInterval(() => {
    //         if (feedbackQueue.length > 0) {
    //             setFeedbacks(prevState => [
    //                 feedbackQueue[0],
    //                 prevState[0],
    //                 prevState[1],
    //             ].filter(Boolean))

    //             feedbackQueue.shift()
    //         }
    //     }, 3000)
    // }, [])

    useEffect(() => {
        api.get<Feedback[]>('feedbacks').then((response: any) => {
            setFeedbacks(response?.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                {feedbacks.map(feedback => {
                    return (
                        <li key={feedback.id} className={styles.message}>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src="https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg" alt="Anon" />
                                </div>
                                <span>{feedback.comment}</span>
                            </div>
                            <p className={styles.messageContent}>Tipo de feedback: {feedback.type}</p>
                        </li>
                    );
                })}
                
            </ul>
        </div>
    )
}