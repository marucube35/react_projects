// Functions
import getCurrentDateTime from '../utils/getCurrentDateTime'

export default function UserCard(props) {
    const user = {
        avatar: props.avatar,
        check: props.check,
        name: 'Lê Minh Quân',
        title: 'Student',
        country: 'Việt Nam',
        skills: [
            'HTML',
            'CSS',
            'JS',
            'React',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'MySQL',
            'Git',
            'Gulp',
            'Webpack',
            'Babel',
            'Bower',
            'NPM',
            'Sass',
            'Bootstrap',
            'Materialize',
            'Sketch',
            'Photoshop',
            'Illustrator',
            'After Effects',
            'Premiere Pro',
            'Lightroom',
            'XD',
            'InDesign',
            'Dreamweaver',
            'Flash'
        ],
        timestamp: getCurrentDateTime()
    }
    return (
        <div className="user-wrapper">
            <div className="user-card">
                <img
                    className="user-avatar"
                    src={user.avatar}
                    alt="Avatar"
                ></img>
                <h3 className="user-name">
                    {user.name}
                    <i className="user-check-icon fas fa-check"></i>
                </h3>
                <p className="user-title-country">
                    {user.title + ', ' + user.country}
                </p>
            </div>

            <h3 className="user-skills-title">Skills</h3>
            <div className="user-skills">
                {user.skills.map((skill) => (
                    <span className="user-skill" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
            <p className="user-time-stamp">
                <i className="user-time-icon fas fa-clock-rotate-left"></i>
                Joined on {user.timestamp}
            </p>
        </div>
    )
}
