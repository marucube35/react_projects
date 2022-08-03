import { Component } from 'react'
import getCurrentDateTime from '../utils/getCurrentDateTime'
import '../styles/user_card.scss'

class UserCard extends Component {
    render() {
        const { avatar, name, title, country, skills } = this.props.user_infos

        return (
            <div className="user-wrapper">
                <div className="user-card">
                    <img src={avatar} alt="Avatar"></img>
                    <h3>
                        {name}
                        <i className="fas fa-check"></i>
                    </h3>
                    <p>{title + ', ' + country}</p>
                </div>

                <h3>Skills</h3>
                <div className="user-skills">
                    {skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>

                <p>
                    <i className="fas fa-clock-rotate-left"></i>
                    Joined on {getCurrentDateTime()}
                </p>
            </div>
        )
    }
}

export default UserCard
