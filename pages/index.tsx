import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useCollection } from "react-firebase-hooks/firestore"

export default function Home() {  
    const clientCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
    
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
    }

    const [votes, votesLoading, votesError ] = useCollection(
        firebase.firestore().collection("votes"),
        {}
    )

    if (!votesLoading && votes) {
        votes?.docs.map((doc) => console.log(doc.data()))
    }

    return (
        <div
            style={{
                display: 'flex',
                height: "100vh",
                width: "100vw",
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <button style={{ fontSize: 32, marginRight: 8 }}>yes</button>
                <button style={{ fontSize: 32, marginLeft: 8 }}>no</button>
            </div>
    )
}

