// CSS
import './index.css'

// Subcribe form
const inputs = ['First name', 'Last name', 'Email']
export const Subcribe = (props) => {
    const { ...style } = props.state

    // ignore light mode
    if (style.backgroundColor === '#f0f1f7') style.backgroundColor = ''

    return (
        <div style={style} className="subcribe-wrapper">
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
                <button type="submit" className="subcribe-button">
                    Subcribe
                </button>
            </form>
        </div>
    )
}
