import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from './matt-logo.json';

class LottieComp extends Component {
    constructor(props){
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }


    render(){
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };
        const animationConfig = {
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRation: 'xMidYMid slice'
            }
        };

        return(
            <div className="lottie-anim">
                <Lottie 
                    options={animationConfig}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                />
            <button style={buttonStyle} onClick={() => this.setState({ isStopped: true })}>stop</button>
            <button style={buttonStyle} onClick={() => this.setState({ isStopped: false })}>play</button>
            <button style={buttonStyle} onClick={() => this.setState({ isPaused: !this.state.isPaused })}>pause</button>
            </div>
        )
    }
}
export default LottieComp;