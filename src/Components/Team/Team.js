import React from 'react';
import './Team.css';
import bgImage from '../../athena-design-resources/Illustration/Group 46@2x.png';

const Team = () => {
    return (
        <div className="bg-color pt-5 pb-5">
            <img className='team-bg img-fluid' src={bgImage} alt="" />
            <h1 className='text-center mt-5 mb-5' style={{ fontFamily: 'normal' }}>Choose Your Dedicated Team</h1>
            <div className="container-xl ">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="teamBox">
                            <h1 className='pt-5 price'>$199</h1>
                            <h5 className="text-muted">For Basic</h5>
                            <div className="underLine"></div>
                            <h5 className="features">Homepage</h5>
                            <h5 className="features">No Inner Page</h5>
                            <h5 className="features">Asset file</h5>
                            <h5 className="features">Source file</h5>
                            <h5 className="features">Free Stock Photos</h5>
                            <h5 className="features">10 Days Free Support</h5>
                            <h5 className="features">24/7 Support</h5>
                            <button className='orderButton'>Order Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="teamBox">
                            <h1 className='pt-5 price'>$399</h1>
                            <h5 className="text-muted">For Preferred</h5>
                            <div className="underLine"></div>
                            <h5 className="features">Homepage</h5>
                            <h5 className="features">4 Inner Page</h5>
                            <h5 className="features">Asset file</h5>
                            <h5 className="features">Source file</h5>
                            <h5 className="features">Free Stock Photos</h5>
                            <h5 className="features">20 Days Free Support</h5>
                            <h5 className="features">24/7 Support</h5>
                            <button className='orderButton'>Order Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="teamBox">
                            <h1 className='pt-5 price'>$599</h1>
                            <h5 className="text-muted">For Elite</h5>
                            <div className="underLine"></div>
                            <h5 className="features">Homepage</h5>
                            <h5 className="features">8 Inner Page</h5>
                            <h5 className="features">Asset file</h5>
                            <h5 className="features">Source file</h5>
                            <h5 className="features">Free Stock Photos</h5>
                            <h5 className="features">30 Days Free Support</h5>
                            <h5 className="features">24/7 Support</h5>
                            <button className='orderButton'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;