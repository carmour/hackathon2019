import React from "react";
import Card from "./Card";
import BottomHalf from './BottomHalf';
import SocMedGraph from '../assets/social_media_positive.png';
import SocMedGraph2 from '../assets/social_media_negative_polarity.png';

export default function MainSocMed() {
    return (
        <div className="main">
            <h2>SocMed</h2>
            <img src={SocMedGraph}></img>
            <img src={SocMedGraph2}></img>
            {/* <div className="image__row">
                <div className="image__component image__component--margin">
                    <h3>Positive</h3>
                    <div className="image">Graph1</div>
                    <p className="image__description">
                        Once the printer ink runs dry it has to be replaced with another
                        inkjet cartridge. There are many reputed companies like Canon,
                        Epson, Dell, and Lexmark that provide the necessary cartridges to
            replace the empty cartridges.{" "}
                    </p>
                </div>
                <div className="image__component">
                    <h3>Negative</h3>
                    <div className="image">Graph2</div>
                    <p className="image__description">
                        Once the printer ink runs dry it has to be replaced with another
                        inkjet cartridge. There are many reputed companies like Canon,
                        Epson, Dell, and Lexmark that provide the necessary cartridges to
            replace the empty cartridges.{" "}
                    </p>
                </div>
            </div> */}
            {/* <BottomHalf /> */}
            {/* <div className="card--flex">
                <Card />
                <Card />
                <Card />
            </div> */}
        </div>
    );
}
