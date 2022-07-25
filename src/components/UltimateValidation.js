// index.js
import React, { Component } from 'react'

const options = [
    {
        value: '',
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
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
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

        this.setState({ focused: { ...this.state.focused, [name]: false } })
    }
    handleBlur = (e) => {
        const { name } = e.target
        this.setState({ focused: { ...this.state.focused, [name]: true } })
    }
    validate = () => {
        const state = this.state
        const patterns = this.props.patterns
        const errors = {}

        function isName(nameType) {
            if (
                state[nameType] &&
                state.focused[nameType] &&
                !state[nameType].match(patterns.names)
            ) {
                errors[nameType] =
                    'Name must be between 3 and 12 and only characters are accepted'
            }
        }

        function isEmail() {
            if (
                state.email &&
                state.focused.email &&
                !state.email.match(patterns.email)
            ) {
                errors.email = 'Email is invalid'
            }
        }

        isName('firstName')
        isName('lastName')
        isEmail()
        return errors
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { skills, ...data } = this.state

        const formattedSkills = []
        for (const key in skills) {
            console.log(key)
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        data.skills = formattedSkills

        console.log(data)
    }

    render() {
        const errors = this.validate()
        return (
            <div className="validation-wrapper">
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name </label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="First Name"
                        />
                        <br />
                        <small>{errors.firstName}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name </label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="Last Name"
                        />
                         <br />
                        <small>{errors.lastName}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tel">Telephone </label>
                        <input
                            type="tel"
                            name="tel"
                            value={this.state.tel}
                            onChange={this.handleChange}
                            placeholder="Tel"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of birth </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                            placeholder="Date of Birth"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="favoriteColor">Favorite Color</label>
                        <input
                            // type="color"
                            id="favoriteColor"
                            name="favoriteColor"
                            value={this.state.favoriteColor}
                            onChange={this.handleChange}
                            placeholder="Favorite Color"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight </label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleChange}
                            placeholder="Weight in Kg"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label> <br />
                        <select
                            name="country"
                            onChange={this.handleChange}
                            id="country"
                        >
                            {selectOptions}
                        </select>
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
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Bio</label> <br />
                        <textarea
                            id="bio"
                            name="bio"
                            value={this.state.bio}
                            onChange={this.handleChange}
                            cols="120"
                            rows="10"
                            placeholder="Write about yourself ..."
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="file"
                            name="file"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
