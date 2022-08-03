export default function FETechs({ fe_techs: logos }) {
    return (
        <div className={`techs-wrapper`}>
            <h1 className="techs-title">Front End Technologies</h1>
            <div className="techs-logos">
                {logos.map((logo, index) => (
                    <img
                        className="techs-logo"
                        key={index}
                        src={logo}
                        alt="Front-end Techology"
                    ></img>
                ))}
            </div>
        </div>
    )
}
