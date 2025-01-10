import "./About.css"

export function About() {
    return(
    <section id="about">
        <div>
            <h1>About</h1>
        </div>
        <div className="img-container">
            <img src={"/static/images/apollo-mattos-suit.png"}  />
        </div>
    </section>
    )
}
