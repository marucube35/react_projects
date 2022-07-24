export default function FETechs(props) {
    const logos = props.logos
    return (
        <div className={`techs-wrapper`}>
            <h1 className="techs-title">Front End Technologies</h1>
            <div className="techs-logos">
                {logos.map((logo) => (
                    <img
                        className="techs-logo"
                        src={logo}
                        alt="Tech Logo"
                        key={logo}
                    ></img>
                ))}
            </div>
        </div>
    )
}
