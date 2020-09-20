// Welcome console
console.log(`
Hi, What are you looking for?
My name is Chan Myae Maung but you call me as Chanlay.
My job is to create awesome web app by pure vanilla JavaScript with very simple ways.
`);

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
	};
	// Destructuring Market Icon
	const { door_open, door_close } = marketIcon;

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
