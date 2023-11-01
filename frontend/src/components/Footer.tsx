import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div
                style={{
                    width: "100%",
                    paddingTop: 20,
                    minHeight: "20vh",
                    maxHeight: "30vh",
                    marginTop: 50
                }}
            >
                <p style={{ fontSize: '30px', textAlign: 'center' }}>
                   TALK-gpt A MERN Application<Link style={{ color: 'white' }} className="nav-link" to={"https://github.com/sheeluofficial/talk-gpt"}>Github</Link> <br />
                    
                </p>
            </div>
        </footer>
    )
}

export default Footer