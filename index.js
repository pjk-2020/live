// Welcome console
console.log(`
Hi, What are you looking for?
My name is Chan Myae Maung but you call me as Chanlay.
My job is to create awesome web app by pure vanilla JavaScript with very simple ways.
`);

// Icon Group
const icon_group = {
	chat_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>`,
	phone_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>`,
	reload_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/> <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/> </svg>`,
	clock_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-history" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" /> <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" /> <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" /> </svg> <span class="d-inline-block f-2 font-weight-bold" id="clock" >16:32:30 PM</span >`,
};
const { chat_icon, phone_icon, reload_icon, clock_icon } = icon_group;

// Reload
const reload = document.getElementById('reload');
// Add Event Listener
reload.addEventListener('click', () => reloadPage());

// Reload page in every 15 second
setInterval(() => reloadPage(), 60000);
const reloadPage = () => window.location.reload();

// Slide show announce
const slide_show_text = {
	text:
		'ည(၁၀)နာရီကျော်ဝန်းကျင်၌ ထိုးရမည့် ဂဏန်း(၅)ကွက်ကို မနက်/ည အတွက် ပေါက်ပေး ၃သောင်းစနစ်ဖြင့် စီစဉ်ပေးလျှက်ရှိပါသည်။ 09 955 435 625 သို့ ၂လုံး၊၃လုံး မနက်/ည လိုချင်ပါသည်ဟု စာပို့ထားပါရန်။ အပိုင်ကွက်ဆိုပြီး သီးသန့်တောင်းဆိုမှုကို ဆောင်ရွက်မပေးပါ။ လိုအပ်ပါက ဒီနေရာမှာ ထပ်မံဖြည့်စွက်ဖော်ပြပါမည်။',
};
const slide_show = {
	output: `<marquee direction="left" speed="normal" behavior="loop" class="f-4">${slide_show_text.text}</marquee>`,
};
document.getElementById('custom_slide_text').innerHTML = slide_show.output;

// Chat Icon
document.getElementById('chatIcon').innerHTML = chat_icon;

// Phone Icon
document.getElementById('phoneIcon').innerHTML = phone_icon;

// Timer
let count = 60;
const defaultCount = 60;
document.getElementById('countDown').innerText = defaultCount;
setInterval((output) => {
	if (count > 0) {
		count = count - 1;
		output = count;

		document.getElementById('countDown').innerText = output;
	}
}, 1000);

// Current time
setInterval((d) => {
	d = new Date();
	document.getElementById('clock').innerText = d.toLocaleTimeString();
}, 1000);

// Current Date Format
let currentDate = new Date().toJSON().slice(0, 10);
document.getElementById('currentDate').innerText = currentDate;

// Output realtime result to html template
window.onload = async (data, day, week) => {
	// Get API callback function
	data = await pjk_Meow();
	// Destructuring and get api results
	const { set, val, result, market } = data;

	// Day of week
	day = new Date();
	week = new Array(7);
	week[0] = 'ဆန်းဒေး';
	week[1] = 'တနင်္လာနေ့';
	week[2] = 'အင်္ဂါနေ့';
	week[3] = 'ဗုဒ္ဓဟူးနေ့';
	week[4] = 'ကြာသာပေတေးနေ့';
	week[5] = 'သောကြာနေ့';
	week[6] = 'စနေ';

	// let know = week[day.getDay()];
	// console.log(know);

	// Market Status Icon Objects
	let marketIcon = {
		door_open: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/> <path fill-rule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/> <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/> </svg>`,
		door_close: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/> <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/> </svg>`,
		chat_icon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>`,
	};
	// Destructuring Market Icon
	const { door_open, door_close, chat_icon } = marketIcon;

	// Market Status to Myanmar
	let marketStatus = {
		Closed: 'ဈေးကွက်ပိတ်ပြီ။',
		Pre_Open_I: 'နံနက်အကြို',
		Pre_Open_II: 'ညနေအကြိုပိတ်',
		Pre_Open_III: 'ညနေအကြိုပိတ်',
		Pre_Open_Iv: 'ညနေအကြိုပိတ်',
		Pre_Close: 'ညနေအကြိုပိတ်',
		Open_I: 'နံနက်ဈေးကွက်',
		Intermission: 'နံနက်ပိတ်',
		Open_II: 'ညနေဈေးကွက်',
		Off_Hour: 'ထိပ်စည်းပိတ်',
		start_Market: 'စျေးကွက်စဖွင့်',
	};
	// Destructuring Market Status to Myanmar
	const {
		Closed,
		Pre_Open_I,
		Pre_Open_II,
		Pre_Open_III,
		Pre_Open_Iv,
		Pre_Close,
		Open_I,
		Intermission,
		Off_Hour,
		start_Market,
	} = marketStatus;

	// Start Result
	const startResult = {
		zero: '0.',
		one: '1.',
		two: '2.',
		three: '3.',
		four: '4.',
		five: '5.',
		six: '6.',
		seven: '7.',
		eight: '8.',
		nine: '9.',
		empty: '..',
	};
	// Destructuring Start Result
	const {
		zero,
		one,
		two,
		three,
		four,
		five,
		six,
		seven,
		eight,
		nine,
		empty,
	} = startResult;

	// Set and value object
	const set_val = {
		setVal_start_empty: 'Starting...',
		setVal_end_empty: 'Nothing...',
	};
	// Destructuring Set and value
	const { setVal_start_empty, setVal_end_empty } = set_val;

	// Market Status Condition
	if (market === 'Closed') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Closed;
	} else if (market === 'Pre-Open1') {
		document.getElementById('marketIcon').innerHTML = door_open;
		document.getElementById('marketStatus').innerText = Pre_Open_I;
	} else if (market === 'Open(I)') {
		document.getElementById('marketIcon').innerHTML = door_open;
		document.getElementById('marketStatus').innerText = Open_I;
	} else if (market === 'Intermission') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Intermission;
	} else if (market === 'Open(II)') {
		document.getElementById('marketIcon').innerHTML = door_open;
		document.getElementById('marketStatus').innerText = Open_II;
	} else if (market === 'Pre-Open2') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Pre_Open_II;
	} else if (market === 'Pre-Open(II)') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Pre_Open_III;
	} else if (market === 'Pre-Open(2)') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Pre_Open_Iv;
	} else if (market === 'Pre-close') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Pre_Close;
	} else if (market === 'OffHour') {
		document.getElementById('marketIcon').innerHTML = door_close;
		document.getElementById('marketStatus').innerText = Off_Hour;
	} else if (market === '') {
		document.getElementById('marketIcon').innerHTML = door_open;
		document.getElementById('marketStatus').innerText = start_Market;
	}

	// Value Start Condition
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

	// Set and value Condition
	if (set === '-' && val === '-') {
		document.getElementById('set').innerText = setVal_start_empty;
	} else {
		document.getElementById('set').innerText = setVal_end_empty;
	}

	// Day of week condition
	if (week[day.getDay()] === 'ဆန်းဒေး' || week[day.getDay()] === 'စနေ') {
		document.getElementById('marketStatus').innerHTML = `${
			week[day.getDay()]
		}ပိတ်`;
	}

	// Display result to html
	document.getElementById('set').innerText = set;
	document.getElementById('value').innerText = val;
	document.getElementById('result').innerText = result;
};

// Fetch Meow Data Main();
const pjk_Meow = async () => {
	const base = 'aHR0cHM6Ly90d29kLml0Y3VuZy5jb20vYXBpLw==';
	const cors = atob('aHR0cHM6Ly9jb3JzLmNoYW5sYXkud29ya2Vycy5kZXY/dT0=');
	const pjk_meow = atob(base);

	try {
		const res = await fetch(cors + pjk_meow);
		const data = await res.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// 4:30 PM Request Data
const pjk_Meow_3 = async (d, h) => {
	const base = 'aHR0cHM6Ly90d29kLml0Y3VuZy5jb20vYXBpLw==';
	const cors = atob('aHR0cHM6Ly9jb3JzLmNoYW5sYXkud29ya2Vycy5kZXY/dT0=');
	const pjk_meow = atob(base);

	d = new Date();
	h = d.getHours();

	try {
		if (h <= 17 || h <= 23) {
			try {
				const res = await fetch(cors + pjk_meow);
				const data = await res.json();

				// Working with LS
				let data_serialized = JSON.stringify(data);
				localStorage.setItem('evening', data_serialized);

				return data_serialized;
			} catch (error) {
				console.log(error);
			}
		}
	} catch (error) {
		console.log(error);
	}
};
pjk_Meow_3();

// // 4:30 PM Callback and output to html
const four_pm = () => {
	let date = new Date().getHours();
	setInterval(() => {
		try {
			let second_Data = JSON.parse(localStorage.getItem('evening'));

			const setSec = document.getElementById('setSec');
			const valueSec = document.getElementById('valueSec');
			const resultSec = document.getElementById('resultSec');

			// If there is no any data in LS, this condition will run
			if (localStorage.length <= 0) {
				setSec.innerText = '------';
				valueSec.innerText = '-------';
				resultSec.innerText = '??';
			}

			// Remove result in the midnight
			if (date >= 24 && date <= 00) {
				setSec.innerText = '------';
				valueSec.innerText = '-------';
				resultSec.innerText = '??';
			}
			// Destructuring 12:00 PM Result
			const { set, val, result } = second_Data;

			// Check time and get data
			setSec.innerText = set;
			valueSec.innerText = val;
			resultSec.innerText = result;
		} catch (error) {
			console.log(error);
		}
	}, 2000);
};
four_pm();

// 12:00 PM Request Data
const pjk_Meow_4 = async (d, h) => {
	const base = 'aHR0cHM6Ly90d29kLml0Y3VuZy5jb20vYXBpLw==';
	const cors = atob('aHR0cHM6Ly9jb3JzLmNoYW5sYXkud29ya2Vycy5kZXY/dT0=');
	const pjk_meow = atob(base);

	d = new Date();
	h = d.getHours();

	try {
		if (h > 12 && h <= 1) {
			try {
				const res = await fetch(cors + pjk_meow);
				const data = await res.json();

				// Working with LS
				let data_serialized = JSON.stringify(data);
				localStorage.setItem('afternoon', data_serialized);

				return data_serialized;
			} catch (error) {
				console.log(error);
			}
		}
	} catch (error) {
		console.log(error);
	}
};
pjk_Meow_4();

// // 12:00 PM Callback and output to html
const twelve_pm = () => {
	let date = new Date().getHours();
	setInterval(() => {
		try {
			let third_Data = JSON.parse(localStorage.getItem('afternoon'));

			const setThird = document.getElementById('setThird');
			const valueThird = document.getElementById('valueThird');
			const resultThird = document.getElementById('resultThird');

			// If there is no any data in LS, this condition will run
			if (third_Data === null) {
				setThird.innerText = '------';
				valueThird.innerText = '-------';
				resultThird.innerText = '??';
			}

			// Remove result in the midnight
			if (date >= 24 && date <= 00) {
				setThird.innerText = '------';
				valueThird.innerText = '-------';
				resultThird.innerText = '??';
			}
			// Destructuring 12:00 PM Result
			const { set, val, result } = third_Data;

			// Check time and get data
			setThird.innerText = set;
			valueThird.innerText = val;
			resultThird.innerText = result;
		} catch (error) {
			console.log(error);
		}
	}, 2000);
};
twelve_pm();
