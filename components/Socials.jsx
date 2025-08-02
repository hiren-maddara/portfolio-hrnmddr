import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram, FaStackOverflow,} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, 
    path: "https://github.com/hiren-maddara"
},
    {icon: <FaLinkedin />, 
    path: "https://linkedin.com/in/hiren-mwanje-maddara-732aa9321"
},
    {icon: <FaStackOverflow />, 
    path: "https://stackoverflow.com/users/20578523/hiren-madara"
},
    {icon: <FaInstagram />, 
    path: "https://instagram.com/hrn_mddr/"
},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>)
}

export default Socials
