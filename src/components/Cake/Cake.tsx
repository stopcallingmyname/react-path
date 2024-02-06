import './Cakes.scss'

function Cake() {
    return(
        <>
        <div className="wrapper">
            <div className="greeting">Happy Birthday</div>
            <div className="plate">
                <div className="cake-wrap">
                <div className="cake-topping">
                    <div className="topping-top">
                    <div className="candle-container">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="candle-wrap">
                        <div className="flame-wrap"></div>
                        <div className="candle-base">
                            <div className="candle-top"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="topping-front">
                    <div className="top-layer"></div>
                    <div className="bottom-layer"></div>
                    </div>
                </div>
                <div className="cake-base">
                    <div className="base-front"></div>
                    <div className="base-top"></div>
                </div>
                
                </div>
                </div>
            </div>
            
            <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0,0 V0.481 s0.021,0.37,0.078,0.404 s0.035,-0.296,0.102,-0.27 s0.007,0.363,0.096,0.354 s0.028,-0.466,0.1,-0.487 S0.406,0.999,0.457,0.999 s0.03,-0.502,0.075,-0.518 s0.041,0.488,0.081,0.274 c0.007,-0.038,0.021,-0.187,0.044,-0.215 c0.014,-0.017,0.038,0.401,0.075,0.392 s0.023,-0.28,0.074,-0.392 c0.022,-0.04,0.072,0.359,0.1,0.344 c0.057,-0.029,0.094,-0.405,0.094,-0.405 V-0.001"></path></clipPath>
            <clipPath id="my-flame-path" clipPathUnits="objectBoundingBox"><path d="M0.501,0 s0.188,0.101,0.295,0.238 s0.123,0.15,0.169,0.286 S1,0.74,0.928,0.838 S0.711,1,0.501,1 S0.216,0.937,0.09,0.838 s-0.083,-0.149,0,-0.29 s0.23,-0.139,0.333,-0.276 S0.501,0,0.501,0"></path></clipPath>
            <clipPath id="my-star-path" clipPathUnits="objectBoundingBox"><path d="M0.5,0.846 l-0.309,0.154,0.044,-0.357 L0,0.382 l0.336,-0.067 L0.5,0 l0.164,0.315,0.336,0.067,-0.235,0.261,0.044,0.357"></path></clipPath>
            </svg>
                    </>
                )
}

export default Cake