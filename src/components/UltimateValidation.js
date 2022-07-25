// index.js
import React, { Component } from 'react'

const options = [
    {
        value: '0',
        label: '-- Select Country--'
    },
    {
        value: 'Finland',
        label: 'Finland'
    },
    {
        value: 'Sweden',
        label: 'Sweden'
    },
    {
        value: 'Norway',
        label: 'Norway'
    },
    {
        value: 'Denmark',
        label: 'Denmark'
    }
]

const selectOptions = options.map(({ value, label }) => (
    <option key={value} value={value}>
        {label}
    </option>
))

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
            errors: {
                firstName: '',
                lastName: ''
            }
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
    setError = (name, error) => {
        this.setState({
            errors: { ...this.state.errors, [name]: error }
        })
    }
    isValid = (name) => {
        if (
            this.state.focused[name] &&
            !this.state[name].match(this.props.patterns[name])
        )
            this.setError(name, this.props.messages[name])
        else this.setError(name, '')
    }
    isEmpty = (name) => {
        if (!this.state[name]) {
            this.setError(name, 'This field can not be empty')
        }

        if (name === 'skills') {
            for (const skill in this.state.skills) {
                if (this.state.skills[skill]) {
                    this.setError(name, '')
                    return
                }
            }
            this.setError(name, 'This field can not be empty')
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

        // Validate
        for (const name in this.state) {
            console.log(name)
            setTimeout(() => {
                this.isEmpty(name)
            }, 0)
        }

        // Get data
        const { skills, errors, ...data } = this.state

        // Format data
        const formattedSkills = []
        for (const key in skills) {
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        data.skills = formattedSkills

        // Transfer data
        console.log(this.state)
    }

    render() {
        return (
            <div className="validation-wrapper">
                <h3 className="validation-title">Ultimate Form</h3>
                <form
                    onSubmit={this.handleSubmit}
                    noValidate
                    className="validation-form"
                >
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
                            <small className="form-error">
                                {this.state.errors.firstName}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.lastName}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.email}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.tel}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.dateOfBirth}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.favoriteColor}
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={this.state.weight}
                                onChange={this.handleChange}
                                placeholder="Weight in Kg"
                            />
                            <small className="form-error">
                                {this.state.errors.weight}
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select
                                name="country"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                id="country"
                            >
                                {selectOptions}
                            </select>
                            <small className="form-error">
                                {this.state.errors.country}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.gender}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.skills}
                            </small>
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
                            <small className="form-error">
                                {this.state.errors.bio}
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">File</label>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
