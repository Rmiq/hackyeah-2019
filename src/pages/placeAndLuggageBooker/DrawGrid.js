import  React from "react";
import ReservedList from './ReservedList'

class DrawGrid extends React.Component {
    render() {
        return (
            <div className='main-container'>

                <div className="userProfile-form">
                    <div className="header"></div>
                    <p className='userSpace'>Traveler : <span className='travelerDiv'>Mr. Typical Placeholder</span></p>
                    <p className='planeId'>Plane: <span className='travelerDiv'>LO 6724</span></p>
                    <ReservedList reserved = { this.props.reserved } />
                </div>


            <div className="container">
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