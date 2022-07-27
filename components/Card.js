import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="../images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}
/*Life Lessons with Katie Zaferes*/
/* From $136 */