import React, { Component } from 'react';
import samsung from '../images/slider/samsung.jpg';
import iphone from '../images/slider/iphone.jpg';
import htc from '../images/slider/htc.jpg';
import huawei from '../images/slider/huawei.jpg';
import xiaomi from '../images/slider/xiaomi.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';





export default class Slider extends Component {

    state = {
        phones: [samsung, iphone, htc, huawei, xiaomi],
        active: 0,
    }



    changeDot = () => {
        const dots = [...document.querySelectorAll('.slider__dots span')];
        const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
        if (this.state.active < 0) return;
        dots[activeDot].classList.remove('active');
        dots[this.state.active].classList.add('active');
    }



    handleRightClick = () => {
        const { active } = this.state
        clearInterval(this.interval)
        this.setState({
            active: active + 1,

        })
        this.interval = setInterval(this.slideChange, 2000)
    }


    handleLeftClick = () => {
        const { active } = this.state;
        clearInterval(this.interval)
        this.setState({
            active: active - 1,
        })
        this.interval = setInterval(this.slideChange, 2000)
    }

    slideChange = () => {
        const { phones, active } = this.state;
        this.setState({
            active: this.state.active + 1
        })
        if (active >= phones.length) {
            this.setState({
                active: 0
            })
        }
        this.changeDot()
    }
    componentDidMount() {
        this.interval = setInterval(this.slideChange, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidUpdate() {
        const { phones, active } = this.state;
        if (active === phones.length) {
            this.setState({
                active: 0,

            })
        } else if (active < 0) {
            this.setState({
                active: phones.length - 1,

            })
        }
        this.changeDot()
    }



    render() {
        const { phones, active, } = this.state

        return (


            <div className="slider">
                <img src={phones[active]} alt="phones" />
                <button className="slider__direction slider__direction--right" onClick={this.handleRightClick}>
                    <MdKeyboardArrowRight className="slider__icon" />
                </button>
                <button className="slider__direction slider__direction--left">
                    <MdKeyboardArrowLeft className="slider__icon" onClick={this.handleLeftClick} />
                </button>
                <div className="slider__dots">
                    <span className='active'></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

