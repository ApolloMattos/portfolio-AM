
import "./home.css"


export function Home() {
    const componentsTxt: { name: string }[] = [
        {item: "Vite"}, 
        {item: "React"},
        {item: "Typescript"},               
        {item: "Javascript"},
        {item: "HTML"},
        {item: "CSS"},
        {item: "Python"},
    ]
    

    return(
    <>
        <section className="home" id="home">
        <span className="background-overlay"></span>
            <div className="hero">
                <div className="hero-container">
                    <h1>Olá, eu sou <span>Apollo Mattos</span>,</h1>
                    <h2>Desenvolvedor Front-end</h2>
                    <h3>PR - BRASIL</h3>
                    <p>Desenvolvo Websites combinando o Design, o Front-end e, ocasionalmente, Back-end para garantir resultados robustos e funcionais.</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-title">
                        <span className="grey-clr">
                        {'<'}
                        <span className="div-clr">div </span>
                        <span className="class-clr">className </span>
                        <span className="quotes-clr">"minhas-habilidades"</span>
                        {componentsTxt.map((item) => )}
                        {'/>'}
                        </span>
                        <span className="grey-clr">
                        {'<'}
                        <span className="component-clr">Vite</span>
                        {' />'}
                        <br/>                    
                        {'<'}
                        <span className="component-clr">React</span>
                        {' />'}
                        <br/>
                        {'<'}
                        <span className="component-clr">Typescript</span>
                        {' />'}
                        <br/>
                        {'<'}
                        <span className="component-clr">Javascript</span>
                        {' />'}
                        <br/>
                        {'<'}
                        <span className="component-clr">HTML</span>
                        {' />'}
                        <br/>
                        {'<'}
                        <span className="component-clr">CSS</span>
                        {' />'}
                        <br/>
                        {'<'}
                        <span className="component-clr">Python</span>
                        {' />'}
                        <br/>

                        </span>
                        <span>{'< Vite />'}</span><br />
                        <span>{'< React />'}</span><br />
                        <span>{'< Typescript />'}</span><br />
                        <span>{'< Javascript />'}</span><br />
                        <span>{'< HTML />'}</span><br />
                        <span>{'< CSS />'}</span><br />
                        <span>{'< Python />'}</span>
                    </h1>
                </div>
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
