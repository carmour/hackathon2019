import React from "react";

export default function SocMedData() {
    return (
        <div className="data">
            <a href="https://mashable.com/2013/11/26/sprout-battery/" target="_blank">
                <h3>Number of Words in Title</h3>
            </a>
            <div className="card__card">
                <div className="card__data">
                    <div className="data__number">10</div>
                    <div className="data__status">WORST</div>
                </div>
                <div className="card__data">
                    <div className="data__number">10</div>
                    <div className="data__status">AVERAGE</div>
                </div>
                <div className="card__data">
                    <div className="data__number">10</div>
                    <div className="data__status">BEST</div>
                </div>
            </div>
            <h3>Number of Words in Content</h3>
            <div className="card__card">
                <div className="card__data">
                    <div className="data__number">579</div>
                    <div className="data__status">WORST</div>
                </div>
                <div className="card__data">
                    <div className="data__number">628</div>
                    <div className="data__status">AVERAGE</div>
                </div>
                <div className="card__data">
                    <div className="data__number">654</div>
                    <div className="data__status">BEST</div>
                </div>
            </div>
            <h3>Number of Images</h3>
            <div className="card__card">
                <div className="card__data">
                    <div className="data__number">5</div>
                    <div className="data__status">WORST</div>
                </div>
                <div className="card__data">
                    <div className="data__number">4</div>
                    <div className="data__status">AVERAGE</div>
                </div>
                <div className="card__data">
                    <div className="data__number">4</div>
                    <div className="data__status">BEST</div>
                </div>
            </div>
            <h3>Number of Links</h3>
            <div className="card__card">
                <div className="card__data">
                    <div className="data__number">13</div>
                    <div className="data__status">WORST</div>
                </div>
                <div className="card__data">
                    <div className="data__number">14</div>
                    <div className="data__status">AVERAGE</div>
                </div>
                <div className="card__data">
                    <div className="data__number">12</div>
                    <div className="data__status">BEST</div>
                </div>
            </div>
        </div>
    );
}
