import  React from "react";
import DrawGrid from './DrawGrid'


class bookPlaceAndLuggage extends React.Component {

    constructor() {
        super();
        this.state = {
            seat: [
                '1','   ','2',
                '3','    ','4',
                '5','     ','6',
                '7','      ','8',
                'exit 1','       ','exit 2',
                '9','        ','10'
            ],
            seatAvailable: [

            ],
            seatReserved: []
        }
    }

    onClickData(seat) {
        if ((seat.length < 3 && seat.length > 0)) {
            if(this.state.seatReserved.indexOf(seat) > -1 ) {
                this.setState({
                    seatAvailable: this.state.seatAvailable.concat(seat),
                    seatReserved: this.state.seatReserved.filter(res => res != seat)
                })
            } else {
                this.setState({
                    seatReserved: this.state.seatReserved.concat(seat),
                    seatAvailable: this.state.seatAvailable.filter(res => res != seat)
                })
            }
        }
    }

    render() {
        return (
            <div className='seatViewContainer'>
                <div>

                </div>
                <div>

                </div>
                <h1 className="reservationHeader">Book your seat</h1>
                <DrawGrid
                    seat = { this.state.seat }
                    available = { this.state.seatAvailable }
                    reserved = { this.state.seatReserved }
                    onClickData = { this.onClickData.bind(this) }
                />
            </div>
        )
    }
}

export default bookPlaceAndLuggage

