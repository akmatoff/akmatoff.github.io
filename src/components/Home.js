import '../App.css'

function Home() {
    return(
        <div className="main-container flex-column" id="home">
            
            <div className="home-text-container">
                <h1 className="greeting">AZIM AKMATOV</h1>
                <p className="greeting-about">
                    FULL STACK DEVELOPER
                </p>

                <div className="social-links-container flex-row">
                    <a href="https://github.com/akmatoff" target="_blank" rel="noreferrer"><i className="fab fa-github social-icon"></i></a>
                    <a href="https://t.me/akmatoffexe" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane social-icon"></i></a>
                    <a href="mailto: akmatoff.exe@gmail.com"><i className="fas fa-envelope social-icon"></i></a>
                </div>
            </div>

        </div>
    )
}

export default Home;