import  React from "react";
import DrawGrid from './DrawGrid'


class bookPlaceAndLuggage extends React.Component {

    constructor() {
        super();
        this.state = {
            seat: [
                'A','B','C',
                '1','2','3',
                '4','5','6',
                '7','8','9',
                '10','11','12',
                'exit 1','13','exit 2',
                '14','15','16'
            ],
            seatAvailable: [
                '1','2','3',
                '4','5','6',
                '7','8','9',
                '10','11','12',
                '13',
                '14','15','16',
                '17','18','19',
                '20','21','22',
                '23','24','25',
                '26','27','28',
                '29','30','31'

            ],
            seatReserved: []
        }
    }

    onClickData(seat) {
        if(this.state.seatReserved.indexOf(seat) > -1 ) {
            console.log(seat);
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
