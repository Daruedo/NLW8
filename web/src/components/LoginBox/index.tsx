import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { GoogleLogin } from 'react-google-login';
import styles from './styles.module.scss';

const clientId = '391846306883-dkm6u81038vo156fhrn4a8lpe9p8iki8.apps.googleusercontent.com';

export function LoginBox() {

    const onSuccess = (res) => {
        console.log('[Login Success currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com Github
            </a>
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Entrar com Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                />
            </div>
        </div>
    )
}

