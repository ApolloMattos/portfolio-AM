
import "./home.css"

export function Home() {
    return(
    <>
        <section className="home" id="home">

            <div className="text-container">
                <h1>Transformo suas ideias<br/>em experiências digitais</h1>
                <h2>Ajudo empresas e profissionais a transformar ideias em experiências digitais de alta qualidade. Combino design, front-end e, ocasionalmente, back-end para garantir resultados robustos e funcionais.</h2>
            </div>

            <span className="video-blur"></span>
            <video className="background-clip" loop autoPlay muted playsInline>
                <source src="/static/video/plexus-clip.webm" type="video/webm" />
                <source src="/static/video/plexus-clip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
        
    </>
        
    ) 
}
