import React from "react";
import Card from "./Card";
import BottomHalf from './BottomHalf';
import EntertainmentGraph from '../assets/entertainment_positive.png'
import EntertainmentGraph2 from '../assets/entertatinemnt_negative_polarity.png'

export default function MainEntertainment() {
    return (
        <div className="main">
            <h2>Entertainment</h2>
            <img src={EntertainmentGraph}></img>
            <img src={EntertainmentGraph2}></img>
            {/* <div className="image__row">
                <div className="image__component image__component--margin">
                    <h3>Positive</h3>
                    <div className="image">
                        <img src={EntertainmentGraph}></img>
                    </div>
                    <p className="image__description">
                        Once the printer ink runs dry it has to be replaced with another
                        inkjet cartridge. There are many reputed companies like Canon,
                        Epson, Dell, and Lexmark that provide the necessary cartridges to
            replace the empty cartridges.{" "}
                    </p>
                </div>
            </div> */}
            {/* <BottomHalf />
            <div className="card--flex">
                <Card />
                <Card />
                <Card /> */}
            {/* </div> */}
        </div >
    );
}
