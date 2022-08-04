import { Component } from 'react'
import validator from 'validator'
import options from '../data/options'
import '../styles/ultimate_validation.scss'

const validators = {
    firstName: [
        { func: 'isAlpha' },
        { func: 'isLength', options: { min: 3, max: 12 } }
    ],
    lastName: [
        { func: 'isAlpha' },
        { func: 'isLength', options: { min: 3, max: 12 } }
    ],
    email: [{ func: 'isEmail' }],
    tel: [{ func: 'isMobilePhone' }],
    weight: [{ func: 'isAlphanumeric' }],
    country: [{ func: 'isAlpha' }]
}
const messages = {
    firstName:
        "Name's length must be between 3 and 12 and only characters are accepted.",
    lastName:
        "Name's length must be between 3 and 12 and only characters are accepted.",
    email: 'Email is invalid, valid format: example@domain.com',
    tel: "Telephone's length must be between 6 and 12 and only numbers are accepted.",
    weight: 'Weight must be positive number.',
    country: 'You have not selected the country.'
}

export default class UltimateValidation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            dateOfBirth: '',
            favoriteColor: '#ffffff',
            weight: '',
            country: '',
            gender: '',
            file: '',
            bio: '',
            skills: {
                html: false,
                css: false,
                javascript: false
            },
            focused: {
                firstName: false,
                lastName: false
            },
            errors: {}
        }
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked }
            })
        } else if (type === 'file') {
            this.setState({ [name]: e.target.files[0] })
        } else {
            this.setState({ [name]: value })
        }

        this.setState(
            { focused: { ...this.state.focused, [name]: false } },
            () => this.isValid(name)
        )
    }
    handleBlur = (e) => {
        const { name } = e.target

        this.setState(
            { focused: { ...this.state.focused, [name]: true } },
            () => this.isValid(name)
        )
    }

    isValid = (name) => {
        if (this.state.focused[name]) {
            const rules = validators[name]

            for (const rule of rules) {
                const { func, options } = rule
                if (!validator[func](this.state[name], options))
                    this.setError(name, messages[name])
            }
        } else this.setError(name, '')
    }
    isEmpty = (name) => {
        if (validator.isEmpty(this.state[name]))
            return { [name]: 'This field can not be empty' }
        return { [name]: '' }
    }
    setError = (name, error) => {
        this.setState({
            errors: { ...this.state.errors, [name]: error }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // Get data
        const { focused, errors, skills, ...data } = this.state

        // Validate
        this.validate(data)

        // Format data
        data.skills = this.formatSkills(this.state.skills)

        // Transfer data
        console.log(data)
    }
    validate(data) {
        let newErrors = {}
        for (const name in data) {
            console.log(name)
            newErrors = { ...newErrors, ...this.isEmpty(name) }
        }

        this.setState({ errors: { ...this.state.errors, ...newErrors } })
    }
    formatSkills = (skills) => {
        const formattedSkills = []
        for (const key in skills) {
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        return formattedSkills
    }

    render() {
        return (
            <div className="validation-wrapper">
                <h3 className="validation-title">Ultimate Form</h3>
                <form onSubmit={this.handleSubmit} className="validation-form">
                    <div className="form-groups">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="First Name"
                            />
                            <small>{this.state.errors.firstName}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Last Name"
                            />
                            <small>{this.state.errors.lastName}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Email"
                            />
                            <small>{this.state.errors.email}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tel">Telephone</label>
                            <input
                                type="tel"
                                name="tel"
                                value={this.state.tel}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Tel"
                            />
                            <small>{this.state.errors.tel}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date of birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={this.state.dateOfBirth}
                                onChange={this.handleChange}
                                placeholder="Date of Birth"
                            />
                            <small>{this.state.errors.dateOfBirth}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="favoriteColor">
                                Favorite Color
                            </label>
                            <input
                                type="color"
                                id="favoriteColor"
                                name="favoriteColor"
                                value={this.state.favoriteColor}
                                onChange={this.handleChange}
                                placeholder="Favorite Color"
                            />
                            <small>{this.state.errors.favoriteColor}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={this.state.weight}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Weight in Kg"
                            />
                            <small>{this.state.errors.weight}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select
                                name="country"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                id="country"
                            >
                                {options.map(({ value, label }) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                            <small>{this.state.errors.country}</small>
                        </div>

                        <div className="form-group">
                            <p>Gender</p>
                            <div>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === 'Female'}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input
                                    id="male"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === 'Male'}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input
                                    id="other"
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    onChange={this.handleChange}
                                    checked={this.state.gender === 'Other'}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                            <small>{this.state.errors.gender}</small>
                        </div>

                        <div className="form-group">
                            <p>Select your skills</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="html"
                                    name="html"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="html">HTML</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="css"
                                    name="css"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="css">CSS</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="javascript"
                                    name="javascript"
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="javascript">JavaScript</label>
                            </div>
                            <small>{this.state.errors.skills}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.handleChange}
                                cols="120"
                                rows="10"
                                placeholder="Write about yourself ..."
                            />
                            <small>{this.state.errors.bio}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">File</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                value={this.state.file}
                                onChange={this.handleChange}
                            />
                            <small>{this.state.errors.file}</small>
                        </div>
                    </div>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
