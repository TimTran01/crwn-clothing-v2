import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRed = await createUserDocumentFromAuth(user);
        createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}> sign in w/ Google Popup</button>
        </div>
    )
}

export default SignIn;