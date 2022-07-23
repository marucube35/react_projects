// CSS
import '../styles/subcribe_form.css'

// Subcribe form
const inputs = ['First name', 'Last name', 'Email']
export const Subcribe = () => (
    <div className="subcribe-wrapper">
        <form className="subcribe-form">
            <h1 class="subcribe-title">Subcribe</h1>
            <p className="subcribe-message">
                Sign up with your email address to receive news and updates.
            </p>
            <div className="subcribe-inputs">
                {inputs.map((input) => (
                    <input
                        type={input === 'Email' ? 'email' : 'text'}
                        placeholder={input}
                        className="subcribe-input"
                    ></input>
                ))}
            </div>
            <button type="submit" className="subcribe-button">
                Subcribe
            </button>
        </form>
    </div>
)
