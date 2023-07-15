import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


class Timer extends Component {

    state = {
        second: 0,
        minute: 0,
        hour: 0,
        disabled: true,
        start:false,
        interval:'',
        startDisabled:true
    }
    changeSecondPlus = () => {
        if (this.state.second === 59) {
            this.setState({
                second: 0
            })
        } else {
            this.setState({
                second: this.state.second + 1
            })
        }
        this.setState({
            startDisabled:false
        })
    }
    changeSecondMinus = () => {
        if (this.state.second === 0) {
            this.setState({
                second: 59
            })
        } else
            this.setState({
                second: this.state.second - 1
            })
        this.setState({
            startDisabled:false
        })
    }
    changeMinutePlus = () => {
        if (this.state.minute === 59) {
            this.setState({
                minute: 0
            })
        } else {
            this.setState({
                minute: this.state.minute + 1
            })
        }
        this.setState({
            startDisabled:false
        })
    }
    changeMinuteMinus = () => {
        if (this.state.minute === 0) {
            this.setState({
                minute: 59
            })
        } else
            this.setState({
                minute: this.state.minute - 1
            })
        this.setState({
            startDisabled:false
        })
    }
    changeHourPlus = () => {

        this.setState({
            hour: this.state.hour + 1,
            disabled: false,
            startDisabled:false
        })
    }
    changeHourMinus = () => {
        if (this.state.hour === 1) {
            this.setState({
                disabled: true,
                hour: 0
            })
        } else {
            this.setState({
                hour: this.state.hour - 1
            })
        }
    }

    changeStartButton=()=>{
        this.setState({
            startDisabled:true
        })
       let a = setInterval(()=>{
          if (this.state.second===0){
            if (this.state.minute===0){
               if (this.state.hour!==0){
                   this.setState({
                       hour:this.state.hour-1,
                       minute:59
                   })
               }
               else {
                   alert('vaqt tugadi')
                   this.onStopClicked()
                   this.setState({
                       startDisabled:true
                   })
               }
            }
            else {
                this.setState({
                    second:59,
                    minute:this.state.minute-1
                })
            }
          }
          else {
              this.setState({
                  second:this.state.second-1
              })
          }
       },1000)
        this.setState({
            interval: a
        })
    }
    onStopClicked=()=>{
        clearInterval(this.state.interval)
        this.setState({
            startDisabled:false
        })
    }
    clearButton=()=>{
        this.onStopClicked()
        this.setState({
            second: 0,
            minute: 0,
            hour: 0,
            disabled: true,
            start:false,
            interval:'',
            startDisabled:true
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6 offset-3">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className={'text-center'}>Timer</h1>
                                </div>
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-success'} onClick={this.changeHourPlus}>
                                                <h3>+</h3></button>
                                            <h1>{this.state.hour}</h1>
                                            <button className={'btn btn-danger'} disabled={this.state.disabled}
                                                    onClick={this.changeHourMinus}> <h3>-</h3>
                                            </button>
                                        </div>
                                        <div className="col-md-1 d-flex align-items-center"><h1>:</h1></div>
                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-success'} onClick={this.changeMinutePlus}><h3>+</h3>
                                            </button>

                                            <h1> {this.state.minute}</h1>
                                            <button className={'btn btn-danger'} onClick={this.changeMinuteMinus}><h3>-</h3>
                                            </button>

                                        </div>
                                        <div className="col-md-1  d-flex align-items-center"><h1>:</h1></div>
                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-success'} onClick={this.changeSecondPlus}><h3>+</h3>
                                            </button>

                                            <h1>{this.state.second}</h1>
                                            <button className={'btn btn-danger '} onClick={this.changeSecondMinus}><h3>-</h3>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className={'card-footer'}>
                                    <div className="row">
                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-success'} onClick={this.changeStartButton} disabled={this.state.startDisabled}>Start</button>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-danger'} onClick={this.onStopClicked}>Stop</button>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-3 text-center">
                                            <button className={'btn btn-warning'} onClick={this.clearButton}>Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;