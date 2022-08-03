import { Component } from 'react'
import '../styles/subcribe_form.scss'
import capitalize from '../utils/capitalize.js'

const inputs = ['First name', 'Last name', 'Email']
class SubcribeForm extends Component {
    render() {
        return (
            <div className="subcribe-wrapper">
                <form>
                    <h1>Subcribe</h1>
                    <p>
                        Sign up with your email address to receive news and
                        updates.
                    </p>
                    <div>
                        {inputs.map((input) => (
                            <input
                                type={input}
                                placeholder={capitalize(input)}
                                key={input}
                            ></input>
                        ))}
                    </div>
                    <button type="button">Subcribe</button>
                </form>
            </div>
        )
    }
}
export default SubcribeForm
