(function () {
	('use strict');
	/* ---------------------------------------------------------------------- */
	/* ----------------- AJAX REQUEST & SAVE INTO LOCAL STORAGE ----------- */
	/* ---------------------------------------------------------------------- */
	const pjkOne = function () {
		const request = new XMLHttpRequest(),
			baseURL = atob('aHR0cHM6Ly90d29kLml0Y3VuZy5jb20vYXBpLw=='),
			cors = atob('aHR0cHM6Ly9jb3JzLmNoYW5sYXkud29ya2Vycy5kZXY/dT0='),
			resource = cors + baseURL;

		request.open('GET', resource, true);

		request.onload = function () {
			try {
				if (this.readyState === 4 && this.status === 200) {
					const data = JSON.parse(this.responseText);
					// console.log(data);

					/*
					 ***************************************
					 *    At 12:01 PM - Save Local Storage *
					 * *************************************
					 */
					let hour = d.getHours();
					let min = d.getMinutes();
					min += hour * 60 + 1;
					// console.log(min);

					if (min === 144) {
						let data_serialized = JSON.stringify(data);
						localStorage.setItem('evening', data_serialized);

						console.log(localStorage.getItem('evening'));
					}

					// Destructuring Data
					const { set, val, result, market } = data;

					// Inject output to HTML for this Data
					document.getElementById('set').textContent = set;
					document.getElementById('value').textContent = val;
					document.getElementById('result').textContent = result;
					document.getElementById('marketStatus').textContent = market;

					// Market Status On Progress Condition
					if (market === 'Closed') {
						marketIcon.innerHTML = door_close;
						marketStatus.innerText = Closed;
					} else if (market === 'Pre-Open1') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_I;
					} else if (market === 'Open(I)') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Open_I;
					} else if (market === 'Intermission') {
						marketIcon.innerHTML = door_close;
						marketStatus.innerText = Intermission;
					} else if (market === 'Open(II)') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_II;
					} else if (market === 'Pre-Open2') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_2;
					} else if (market === 'Pre-Open(II)') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_II;
					} else if (market === 'Pre-Open(III)') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_III;
					} else if (market === 'Pre-Open(Iv)') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = Pre_Open_Iv;
					} else if (market === 'Pre-close') {
						marketIcon.innerHTML = door_close;
						marketStatus.innerText = Pre_Close;
					} else if (market === 'OffHour') {
						marketIcon.innerHTML = door_close;
						marketStatus.innerText = Off_Hour;
					} else if (market === '') {
						marketIcon.innerHTML = door_open;
						marketStatus.innerText = start_Market;
					}

					// Value On Progress Condition
					if (result === '0') {
						document.getElementById('result').innerText = zero;
					} else if (result === '1') {
						document.getElementById('result').innerText = one;
					} else if (result === '2') {
						document.getElementById('result').innerText = two;
					} else if (result === '3') {
						document.getElementById('result').innerText = three;
					} else if (result === '4') {
						document.getElementById('result').innerText = four;
					} else if (result === '5') {
						document.getElementById('result').innerText = five;
					} else if (result === '6') {
						document.getElementById('result').innerText = six;
					} else if (result === '7') {
						document.getElementById('result').innerText = seven;
					} else if (result === '8') {
						document.getElementById('result').innerText = eight;
					} else if (result === '9') {
						document.getElementById('result').innerText = nine;
					} else if (result === '') {
						document.getElementById('result').innerText = empty;
					}

					// Set and Value On Progress Condition
					if (set === '-' || val === '-') {
						document.getElementById('set').innerText = setVal_start_empty;
						document.getElementById('val').innerText = setVal_end_empty;
					}

					// Day of Week On Progress Condition
					if (
						week[day.getDay()] === 'ဆန်းဒေး' ||
						week[day.getDay()] === 'စနေ'
					) {
						marketStatus.textContent = `${week[day.getDay()]}ပိတ်`;
					}
				}
			} catch (error) {
				console.log(error.messages);
			}
		};
		request.send();
	};
	// Callback Function API ONE
	setInterval(pjkOne, 3000);
	/* 
	const pjkTwo = function () {
		const request = new XMLHttpRequest(),
			baseURL = atob('aHR0cHM6Ly90d29kLml0Y3VuZy5jb20vYXBpLw=='),
			cors = atob('aHR0cHM6Ly9jb3JzLmNoYW5sYXkud29ya2Vycy5kZXY/dT0='),
			resource = cors + baseURL;

		request.open('GET', resource, true);

		request.onload = function () {
			try {
				if (this.readyState === 4 && this.status === 2000) {
					const data = JSON.parse(this.responseText);
					console.log(data);
				}
			} catch (error) {
				console.log(error.messages);
			}
		};

		request.send();
	};
	// Callback Function API ONE
	pjkTwo(); */

	/* ---------------------------------------------------------------------- */
	/* ----------------- Declare Icons, DOM Object & Add Event Listener ----------- */
	/* ---------------------------------------------------------------------- */

	// Icon Group
	const icon_group = {
		chat_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> </svg>`,
		history_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/> </svg>`,
		reload_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/> </svg>`,
		clock_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-history" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" /> <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" /> <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" /> </svg> <span class="d-inline-block f-2 font-weight-bold" id="clock" >16:32:30 PM</span >`,
		calendar_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" /> <path fill-rule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>`,
		market_icon_1: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shop-window" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" /> </svg>`,
		eyes_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/> <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>`,
		dice_3: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/> <circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/> </svg>`,
		phone_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>`,
		cone_striped: `<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cone-striped" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/> </svg>`,
		door_open: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/> <path fill-rule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/> <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/> </svg>`,
		door_close: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/> <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/> </svg>`,
		chat_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>`,
	};
	// Destructuring Icon Group
	const {
		chat_icon,
		history_icon,
		reload_icon,
		clock_icon,
		// calendar_icon,
		market_icon_1,
		eyes_icon,
		dice_3,
		phone_icon,
		cone_striped,
		door_open,
		door_close,
	} = icon_group;

	// Market Status Return Objects Translate to Myanmar
	let marketStatusObj = {
		Closed: 'ဈေးကွက်ပိတ်ပြီ။',
		Pre_Open_I: 'နံနက်အကြို',
		Pre_Open_II: 'ညနေအကြိုဖွင့်',
		Pre_Open_2: 'ညနေအကြိုဖွင့်',
		Pre_Open_III: 'ညနေအကြိုဖွင့်',
		Pre_Open_Iv: 'ညနေအကြိုဖွင့်',
		Pre_Close: 'ညနေအကြိုပိတ်',
		Open_I: 'နံနက်ဖွင့်',
		Intermission: 'နံနက်ပိတ်',
		Open_II: 'ညနေဈေးကွက်',
		Off_Hour: 'ထိပ်စည်းပိတ်',
		start_Market: 'စျေးကွက်စဖွင့်',
		setVal_start_empty: 'Starting...',
		setVal_end_empty: 'Nothing...',
	};
	// Destructuring Market Status to Myanmar
	const {
		Closed,
		Pre_Open_I,
		Pre_Open_II,
		Pre_Open_2,
		Pre_Open_III,
		Pre_Open_Iv,
		Pre_Close,
		Open_I,
		Intermission,
		Off_Hour,
		start_Market,
		setVal_start_empty,
		setVal_end_empty,
	} = marketStatusObj;

	// Declare DOM Selector
	const reloadIcon = document.querySelector('.reload'),
		reload = document.getElementById('reload'),
		countDown = document.getElementById('countDown'),
		chatIcon = document.getElementById('chatIcon'),
		eyesIcon = document.getElementById('eyesIcon'),
		historyIcon = document.getElementById('historyIcon'),
		diceIcon = document.getElementById('diceIcon'),
		phoneIcon = document.getElementById('phoneIcon'),
		clockIcon = document.getElementById('custom-Clock-icon'),
		cone_striped_Icon = document.getElementById('cone_striped_Icon'),
		marketIcon = document.getElementById('marketIcon'),
		marketStatus = document.getElementById('marketStatus');

	// Inject Icons to HTML
	chatIcon.innerHTML = chat_icon;
	eyesIcon.innerHTML = eyes_icon;
	historyIcon.innerHTML = history_icon;
	diceIcon.innerHTML = dice_3;
	reloadIcon.innerHTML = reload_icon;
	phoneIcon.innerHTML = phone_icon;
	cone_striped_Icon.innerHTML = cone_striped;
	clockIcon.innerHTML = clock_icon;
	marketIcon.innerHTML = market_icon_1;

	// Timer Function
	let count = 60;
	const defaultCount = 60;
	countDown.textContent = defaultCount;
	setInterval(function (output) {
		if (count > 0) {
			count -= 1;
			output = count;
			countDown.textContent = output;
		}
	}, 1000);

	// Reload Page Function
	function reloadPage() {
		window.location.reload();
	}

	// Reload Page in every 1 minute
	setInterval(function () {
		window.location.reload();
	}, 60000);

	// Current Time Function
	setInterval(function (d) {
		d = new Date();
		document.getElementById('clock').innerText = d.toLocaleTimeString();
	}, 1000);

	// Current Date Format
	let d = new Date();
	let currentDate =
		d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
	document.getElementById('currentDate').textContent = currentDate;

	// Chat Add Event Listener
	chatIcon.addEventListener('click', function () {
		window.open('https://chat.itcung.com/act/join/820/JxoEP7/', '_blank');
	});

	// Eyes Add Event Listener
	eyesIcon.addEventListener('click', function () {
		window.open('https://twod.itcung.com/lucky/', '_blank');
	});

	// History  Add Event Listener
	historyIcon.addEventListener('click', function () {
		window.open('https://twod.itcung.com/his/', '_blank');
	});

	// Dice  Add Event Listener
	diceIcon.addEventListener('click', function () {
		window.open('https://twod.itcung.com/3d/', '_blank');
	});

	// Phone  Add Event Listener
	phoneIcon.addEventListener('click', function () {
		window.open(
			'sms://+9509955435625?body=%23Unicode%0A2D%2F3D%20%E1%80%99%E1%80%94%E1%80%80%E1%80%BA%2F%E1%80%8A%20%E1%80%95%E1%80%B1%E1%80%AB%E1%80%80%E1%80%BA%E1%80%95%E1%80%B1%E1%80%B8%20%E1%81%83%E1%80%9E%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA%E1%80%B8%E1%80%9B%E1%80%9A%E1%80%B0%E1%80%81%E1%80%BB%E1%80%84%E1%80%BA%E1%80%95%E1%80%AB%E1%80%9E%E1%80%8A%E1%80%BA%E1%81%8B%0A%E1%80%9E%E1%80%98%E1%80%B1%E1%80%AC%E1%80%90%E1%80%B0%E1%80%95%E1%80%AB%E1%80%9E%E1%80%8A%E1%80%BA%E1%81%8B%0A%0A%23Zawgyi%0A2D%2F3D%20%E1%80%99%E1%80%94%E1%80%80%E1%80%B9%2F%E1%80%8A%20%E1%80%B1%E1%80%95%E1%80%AB%E1%80%80%E1%80%B9%E1%80%B1%E1%80%95%E1%80%B8%20%E1%81%83%E1%80%B1%E1%80%9E%E1%80%AC%E1%80%84%E1%80%B9%E1%80%B8%E1%80%9B%E1%80%9A%E1%80%B0%E1%80%81%E1%80%BA%E1%80%84%E1%80%B9%E1%80%95%E1%80%AB%E1%80%9E%E1%80%8A%E1%80%B9%E1%81%8B%0A%E1%80%9E%E1%80%B1%E1%80%98%E1%80%AC%E1%80%90%E1%80%B0%E1%80%95%E1%80%AB%E1%80%9E%E1%80%8A%E1%80%B9%E1%81%8B',
			'_blank'
		);
	});

	// Reload Add Event Listener
	reload.addEventListener('click', reloadPage);

	// Day of week
	let day = new Date();
	let week = new Array(7);
	week[0] = 'ဆန်းဒေး';
	week[1] = 'တနင်္လာနေ့';
	week[2] = 'အင်္ဂါနေ့';
	week[3] = 'ဗုဒ္ဓဟူးနေ့';
	week[4] = 'ကြာသာပေတေးနေ့';
	week[5] = 'သောကြာနေ့';
	week[6] = 'စနေ';

	/* let dayOfWeek = week[day.getDay()];
	console.log(dayOfWeek); */
})();
