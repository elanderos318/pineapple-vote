import React from "react"
import SyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
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

