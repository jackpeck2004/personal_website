import React from "react"
import { Link } from "gatsby"

const dll = ({ link, content }) => {
    return (
        <Link to={link} className="link">{content}</Link>
    )
}

export default dll