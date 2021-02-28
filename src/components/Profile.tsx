import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const avatarUrl = "https://github.com/josephribeirosantos.png"
let userAvatar = avatarUrl ? avatarUrl : "/assets/userAvatar.svg";

export function Profile() {

    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src={userAvatar} alt="Joseph Santos" />

            <div>
                <strong>Joseph Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>

            </div>
        </div>
    );
}