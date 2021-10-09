import React from "react";
import "./Home.css";



function Home() {


    return (
        <>
            <div className="arrange">
                <i className="fas fa-arrow-left"></i>

                <div className="all">
                    <h1>New Booking</h1>
                    <h6>Fill in the information below to get a quote or create a new booking</h6>

                    <div className="beast">
                        <p>Select a service</p>

                        <div className="flip">
                            <button className="colorblue">
                                <h4>Air Freight</h4>
                                <i className="fas fa-plane fa-rotate-270" style={{fontSize:"45px"}}></i>
                            </button>

                            <button className="colors">
                                <h4>Sea Freight</h4>
                                <i className="fas fa-ship" style={{fontSize:"60px"}}></i>
                            </button>

                            <button className="color">
                                <h4>Inland(Truck & Barge)</h4>
                                <i className="fas fa-truck" style={{fontSize:"60px"}}></i>
                            </button>

                            <button className="color">
                                <h4>Customs Clearance</h4>
                                <i className="fas fa-user-secret" style={{fontSize:"60px"}}></i>
                            </button>

                        </div>
                    </div>

                    <div className="second">
                        <i className="fas fa-info-circle"></i>

                        <div className="flexy">
                            <div>
                                <button className="btn">Import</button>
                                <button className="btns">Import</button>
                            </div>

                            <div className="wow">
                                <i className="fas fa-map-marker-alt"></i>
                                <input className="inputss" type="text" placeholder="From City or Port" />
                            </div>

                            <div className="wow">
                                <i className="fas fa-map-marker-alt"></i>
                                <input className="inputss" type="text" placeholder="To City or Port" />
                            </div>

                            <div>
                                <i className="fas fa-calendar"></i>
                                <input className="inputsss" type="text" placeholder="Ready Date" />
                            </div>

                            <div>
                                <input className="inputsss" type="text" placeholder="Incoterms" />
                                <i className="fas fa-caret-down"></i>
                            </div>

                            <div>
                                <input className="inputsss" type="text" placeholder="Total Cargo Value" />

                            </div>
                        </div>

                    </div>

                    <div className="third">
                        <div className="separate">
                            <p>Cargo Details</p>

                            <div class="slider-content">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <span className="wiz">Dangerous Cargo<small className="grey">(ex, Chemicals,Battery)</small></span>
                            </div>

                            <div className="swell">
                                <input className="word" type="text" placeholder="Total Dimensions" />
                                <button>Package Details</button>
                            </div>

                            <div className="up">
                                <p clasName="sweet">Total Volume</p>
                                <input className="yes" type="text" placeholder="cbm" />
                            </div>

                            <div className="down">
                                <p clasName="sweett">Total Weight</p>
                                <input className="yess" type="text" placeholder="kg" />
                            </div>

                        </div>

                    </div>

                    <div className="fourth">
                        <p className="swim">Additional Services</p>
                        <div className="gridy">
                            <div class="slider-contents">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="sliders round"></span>
                                </label>
                                <span className="words">Export Forwarding</span>
                                <p>We handle customs clearance and documentation.</p>
                            </div>

                            <div class="slider-contents">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="sliders round"></span>
                                </label>
                                <span className="words">Import Customs Clearance</span>
                                <p>We handle import customs and regulatory requirements.</p>
                            </div>

                            <div class="slider-contents">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="sliders round"></span>
                                </label>
                                <span className="words">Cargo Insurance</span>
                                <p>Protect your cargo from logistics risks up to its value.</p>
                            </div>

                            <div class="slider-contents">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="sliders round"></span>
                                </label>
                                <span className="words">Transport/Delivery</span>
                                <p>We deliver the cargo to your door step from the ports.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;
