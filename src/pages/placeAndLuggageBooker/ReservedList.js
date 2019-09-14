import  React from "react";

class ReservedList extends React.Component {
    render() {
        return(
            <div className="right">
                <h4>Your Reserved Seats: ({this.props.reserved.length})</h4>
                    { this.props.reserved.map(res => <div className="seatChoice" key={res} >{res}</div>) }
            </div>
        )
    }
}

export default ReservedList