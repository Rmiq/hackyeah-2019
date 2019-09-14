import React from "react";
import "./index.scss";
import "../../components/Checkbox/index.scss"
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Checkbox } from "../../components/Checkbox";


export function FormCreator() {
	const [startDatePick, setStartDate] = React.useState(null);
	const [endDatePick, setEndDate] = React.useState(null);
	const [focusedInput, setFocusedInput] = React.useState(null);
	const [singleDate, setSingleDate] = React.useState(null);
	const [focusedSingleInput, setFocusedSingleInput] = React.useState(null);
	const [isChecked, setCheck] = React.useState(false);
	const handleDateChange = (e) => {
		console.log(e)
		if (e.startDate) {

			setStartDate(e.startDate);
		}
		if (e.endDate) {
			setEndDate(e.endDate)
		}

	}
	const handleSingleDateChange = (e) => {
		setSingleDate(e)



	}

	return (
		<div className="view view-pickerWrapper">
			<h2>Flight Scheduler</h2>
			<div className="form-wrapper">


				<div className="checkbox" >
					<label className="label-wrapper">
						<input type="checkbox" onChange={() => { setCheck(!isChecked) }} /><span className="checkbox-material" ><span className="check"></span></span> One-way
</label>
				</div>

				<div>
					{isChecked ?
						<SingleDatePicker

							id="date_input"
							date={singleDate}
							focused={focusedSingleInput}
							onDateChange={handleSingleDateChange}
							onFocusChange={focused => { setFocusedSingleInput(focused) }}
						/>
						:
						<DateRangePicker
							startDate={startDatePick} // momentPropTypes.momentObj or null,
							startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
							endDate={endDatePick} // momentPropTypes.momentObj or null,
							endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
							onDatesChange={handleDateChange} // PropTypes.func.isRequired,
							focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
							onFocusChange={focused => { setFocusedInput(focused) }} // PropTypes.func.isRequired,
							hideKeyboardShortcutsPanel={true}
						/>}
				</div>
			</div>
		</div>
	);
};

