import React, { Component } from "react";

class Timer extends Component{
    constructor(props) {
        super(props)
        let time = new Date()
        time = time.toLocaleTimeString('id-ID', { hour12:true })
        this.state = {
            timer: 100,
            timeNow: time,
            showTime: true
        }
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.timeNow = setInterval(() => this.now(), 1000)
    }
    
    componentDidUpdate() {
        if (this.state.timer === 0 && this.state.showTime) {
            this.hideTime()
            this.stopTime()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        
    }

    now() {
        let time = new Date()
        time = time.toLocaleString('ID', { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: true })
        this.setState({ timeNow: time })
    }
    
    tick() {
        this.setState({
            timer: this.state.timer - 1
        });
    }

    stopTime() {
        this.componentWillUnmount()
    }
    
    hideTime() {
        this.setState({ showTime: false })
    }
    
    render() {
        return (
            <>
                {
                    this.state.showTime && (
                        <h1 style={{display:"flex",backgroundColor:"red",justifyContent:"Center",margin:"30px"}}>
                            <p style={{margin:"30px"}}>Real Time  {this.state.timeNow}</p>
                            <p style={{margin:"30px"}}>Countdown  {this.state.timer}</p>
                        </h1>
                    )
                }
            </>
        )
    }
}

export default Timer