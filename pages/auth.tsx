import React from "react"
import SyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"

// Configure FirebaseUI.
const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
}

const Auth = () => {
    return (
        <div
            style={{
                maxWidth: "320px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h1>Pineapple Login</h1>
            <p>Please sign-in:</p>
            <SyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default Auth

