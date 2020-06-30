import React from "react"
import "../styles/WhoAmI.scss"

const WhoAmI = () => {
    return (
        <div className="WhoAmI">
            <img
                src="https://uisidict.sirv.com/Images/GiacomoPasin.jpeg?w=1134&h=2016"
                width="1134"
                height="2016"
                // srcset="https://uisidict.sirv.com/Images/GiacomoPasin.jpeg?w=1134&h=2016 1x, https://uisidict.sirv.com/Images/GiacomoPasin.jpeg?w=2268&h=4032 2x"
                alt=""
                className="image"
            />
            <h2>Who am I?</h2>
            <p>
                I'm a high-school student @{" "}
                <a href="https://h-is.com" className="link" target="_blank">
                    H-International School of Treviso
            </a>
            , but at the same time I am the CTO of{" "}
                <a href="https://twin.services" className="link" target="_blank">
                    T.W.I.N srl
            </a>
            </p>
        </div>
    )
}

export default WhoAmI