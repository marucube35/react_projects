export default function SubcribeForm() {
    const inputs = ['First name', 'Last name', 'Email']
    return (
        <div className={`subcribe-wrapper`}>
            <form className="subcribe-form">
                <h1 className="subcribe-title">Subcribe</h1>
                <p className="subcribe-message">
                    Sign up with your email address to receive news and updates.
                </p>
                <div className="subcribe-inputs">
                    {inputs.map((input) => (
                        <input
                            type={input === 'Email' ? 'email' : 'text'}
                            placeholder={input}
                            className="subcribe-input"
                            key={input}
                        ></input>
                    ))}
                </div>
                <button type="button" className="subcribe-button">
                    Subcribe
                </button>
            </form>
        </div>
    )
}
