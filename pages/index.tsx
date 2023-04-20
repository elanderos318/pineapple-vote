export default function Home() {   
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

