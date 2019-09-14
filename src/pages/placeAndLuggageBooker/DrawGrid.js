import  React from "react";
import ReservedList from './ReservedList'

class DrawGrid extends React.Component {
    render() {
        return (
            <div>
                <div className="userProfile-form">
                    <p className='userSpace'>Traveler : <span className='travelerDiv'>Mr. Typical Placeholder</span></p>
                    <p className=''>Plane: <span className='travelerDiv'>Id of the best plane out there</span></p>
                    <ReservedList reserved = { this.props.reserved } />
                </div>

                <div className='bookLuggage-form'>
                    Choose extra luggage services:
                    <div>Luggage choice 1</div>
                    <div>Luggage choice 2</div>
                    <div>Luggage choice 3</div>
                </div>

            <div className="container">

                <h2></h2>
                <table className="grid">
                    <tbody>
                    <tr>
                        { this.props.seat.map( row =>
                            <td
                                className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                                key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                    </tr>
                    </tbody>
                </table>
                <div className="text-box">
                    <a href="#" className="btn btn-white btn-animate">Continue</a>
                </div>
            </div>
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}

export default DrawGrid