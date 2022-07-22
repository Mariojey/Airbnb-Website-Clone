import React from "react"
export default function Card() {
    return (
        <div className="card">
            <div className="card-img"></div>
            <div className="card-content">
                <div className="star-content">
                    <img src="../images/star.png" className="star-img" />
                </div>
                <div className="card-content-text">
                    <p>Life lessons with Katie Zaferes</p>
                    <div className="price">
                        <b>From 136</b>
                        <p>/ Perason</p>
                    </div>
                </div>
            </div>
        </div>
    )
}