import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useCollection } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

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

    // Firestore
    const db = firebase.firestore()

    const [votes, votesLoading, votesError ] = useCollection(
        firebase.firestore().collection("votes"),
        {}
    )

      // Auth state
    const [user, authLoading, authError] = useAuthState(firebase.auth());

    // Create document function
    const addVoteDocument = async (vote: string) => {
        if (!user) return;
        await db.collection("votes").doc(user.uid).set({
            vote
        })
    }

    if (!votesLoading && votes) {
        votes?.docs.map((doc) => console.log(doc.data()))
    }

    if (authLoading) {
        return <p>Loading...</p>;
      }
    
    if (authError) {
        return <p>Error: {authError.message}</p>;
    }

    return (
        <div
            style={{
                display: 'flex',
                height: "100vh",
                width: "100vw",
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gridGap: 8,
                background:
                    'linear-gradient(100deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%',
            }}
            >
                <button 
                    style={{ fontSize: 32, marginRight: 8 }}
                    onClick={() => addVoteDocument("yes")}>
                    ✔️🍍🍕
                </button>
                <button 
                    style={{ fontSize: 32, marginLeft: 8 }}
                    onClick={() => addVoteDocument("no")}>
                        ❌🍍🍕
                </button>
            </div>
    )
}

