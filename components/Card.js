import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="../images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}
/*Life Lessons with Katie Zaferes*/
/* From $136 */