import React from "react";
import "./index.scss";
import "../../components/Checkbox/index.scss"
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './material.scss';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export function FormCreator() {
	const [startDatePick, setStartDate] = React.useState(null);
	const [endDatePick, setEndDate] = React.useState(null);
	const [focusedInput, setFocusedInput] = React.useState(null);
	const [singleDate, setSingleDate] = React.useState(null);
	const [focusedSingleInput, setFocusedSingleInput] = React.useState(true);
	const [isChecked, setCheck] = React.useState(false);
	const [prevClicked, setPrev] = React.useState(false);
	const [nextClicked, setNext] = React.useState(false);
	const [startPrice, setStartPrice] = React.useState(null);
	const [endPrice, setEndPrice] = React.useState(null);
	const [totalPrice, setTotalPrice] = React.useState(0);
	const [param, setParam] = React.useState('Berlin');
	const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
	React.useEffect(() => {


		setFocusedInput('startDate');

		getParameterByName('city') && setParam(getParameterByName('city'))

		window.addEventListener("resize", () => {
			setScreenWidth(window.screen.width)


		});
	}, []);
	React.useEffect(() => {
		let singlePicker = document.querySelectorAll('.SingleDatePicker');
		let dayClick = document.querySelectorAll('.CalendarDay');
		console.log(singlePicker);


		dayClick && dayClick.forEach(e => {

			e.addEventListener('click', (z) => {
				setTimeout(() => {
					if (e.classList.contains('CalendarDay__selected_start')) {

						setStartPrice(e.querySelector('.price').innerText.slice(0, -2));

					}
					if (e.classList.contains('CalendarDay__selected_end')) {
						setEndPrice(e.querySelector('.price').innerText.slice(0, -2));

					}

				}, 10)



			})



		})


	}, [focusedInput])
	React.useEffect(() => {

		if (endPrice && startPrice) {
			/* totalPrice = endPrice.parseInt() + startPrice.parseInt(); */
			setTotalPrice(Number(endPrice) + Number(startPrice));

		}
	}, [startPrice, endPrice])
	React.useEffect(() => {
		let test = document.querySelectorAll('.CalendarDay:not(.CalendarDay__blocked_out_of_range)');
		console.log(test);
		test.forEach(e => {
			if (!e.children[0]) {
				var price = document.createElement("p");
				var currency = document.createElement("span");
				var textcurrency = document.createTextNode("zł");
				currency.appendChild(textcurrency);

				price.classList.add('price');       // Create a <li> node
				var textnode = document.createTextNode(Math.floor(Math.random() * (600 - 100 + 1)) + 100);
				price.appendChild(textnode);                              // Append the text to <li>


				if (price.innerHTML <= 200) {
					price.appendChild(currency);
					currency.setAttribute('style', 'color:#00bd68');
					price.setAttribute('style', 'color:#00bd68');
				}
				if (price.innerHTML > 200 && price.innerHTML < 500) {
					price.appendChild(currency);
					currency.setAttribute('style', 'color:#f0b000');
					price.setAttribute('style', 'color:#f0b000');
				}
				if (price.innerHTML >= 500) {
					price.appendChild(currency);
					currency.setAttribute('style', 'color:#ff5452');
					price.setAttribute('style', 'color:#ff5452');
				}

				e.appendChild(price);
			}
		})
		let buttonPrev = document.querySelector('.DayPickerNavigation_leftButton__horizontalDefault');
		buttonPrev && buttonPrev.addEventListener('click', () => {
			setPrev(!prevClicked);
		})
		let buttonNext = document.querySelector('.DayPickerNavigation_rightButton__horizontalDefault');
		buttonNext && buttonNext.addEventListener('click', () => {
			setNext(!nextClicked);
		})
		let buttonPrevVertical = document.querySelector('.DayPickerNavigation_prevButton__verticalDefault ');
		buttonPrevVertical && buttonPrevVertical.addEventListener('click', () => {
			setPrev(!prevClicked);
		})
		let buttonNextVertical = document.querySelector('.DayPickerNavigation_nextButton__verticalDefault ');
		buttonNextVertical && buttonNextVertical.addEventListener('click', () => {
			setNext(!nextClicked);
		})




	}, [focusedInput, isChecked, prevClicked, nextClicked])
	const handleDateChange = (e) => {

		if (e.startDate) {

			setStartDate(e.startDate);

		}
		if (e.endDate) {
			setEndDate(e.endDate)
		}

	}
	const handleSingleDateChange = (e) => {
		console.log(e)
		setSingleDate(e)



	}
	const handleCheck = () => {
		setCheck(!isChecked)
		setStartDate(null);
		setEndDate(null);
		setSingleDate(null);
		setStartPrice(0);
		setEndPrice(0);
		setTotalPrice(0);
		setFocusedInput('startDate');
	}
	return (
		<div className="view view-pickerWrapper">
			<h2>Flight scheduler for <span className="city">{param}</span></h2>
			<div className="form-wrapper">


				<div className="checkbox" >
					<label className="label-wrapper">
						<input type="checkbox" checked={isChecked} onClick={handleCheck} /><span className="checkbox-material" ><span className="check"></span></span> One-way
</label>
				</div>

				<div>
					{isChecked ?
						<SingleDatePicker

							id="date_input"
							date={singleDate}
							focused={focusedSingleInput}
							onDateChange={handleSingleDateChange}
							onFocusChange={() => {
								setFocusedSingleInput(true);
								let singlePicker = document.querySelector('.SingleDatePicker');
								let singleClicked = singlePicker.querySelectorAll('.CalendarDay')
								singleClicked && singleClicked.forEach(e => {

									e.addEventListener('click', (z) => {
										setTimeout(() => {
											if (e.classList.contains('CalendarDay__selected')) {
												setTotalPrice(e.querySelector('.price').innerText.slice(0, -2))

											}

										}, 10)



									})



								})
								console.log(singlePicker);
							}}
							hideKeyboardShortcutsPanel={true}
							orientation={screenWidth > 1024 ? 'horizontal' : 'vertical'}


						/>
						:
						<DateRangePicker
							startDate={startDatePick} // momentPropTypes.momentObj or null,
							startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
							endDate={endDatePick} // momentPropTypes.momentObj or null,
							endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
							onDatesChange={handleDateChange} // PropTypes.func.isRequired,
							focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
							onFocusChange={focused => {
								if (!focused) return;
								setFocusedInput(focused);
							}} // PropTypes.func.isRequired,
							hideKeyboardShortcutsPanel={true}
							orientation={screenWidth > 1024 ? 'horizontal' : 'vertical'}
						/>}
				</div>

			</div>
			<div className="bottom-wrapper">
				<div className="total-wrapper">
					<p>Total price: <span>{totalPrice} zł</span></p>

				</div>
				<button disabled={totalPrice ? false : true} className="rkmd-btn btn-lg btn-lightBlue ripple-effect book-button">Book flight</button>
			</div>



		</div >
	);
};

