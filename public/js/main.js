const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const conditionBtn = document.getElementById("condbtn");
const iconBtn = document.getElementById("iconbtn");
const dayBtn = document.getElementById("daybtn");
const tempBtn = document.getElementById("tempbtn");
const dateBtn = document.getElementById("datebtn");

const getInfo = async (event) => {
	event.preventDefault();
	let cityValue = cityName.value;
	if (cityValue === "") {
		alert("Please select a city");
	} else {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=021132563f2d1fef461f8a96fba8c862`;
			const response = await fetch(url);
			const data = await response.json();
			conditionBtn.innerText = data.weather[0].main;
			tempBtn.innerText = (data.main.temp - 273.15).toFixed(2) + " ℃";
			iconBtn.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
			document.body.style.backgroundImage =
				"url('https://source.unsplash.com/1600x900/?" + data.name + "')";
			console.log(data);
			let day = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];
			let month = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];

			let time = new Date();
			dayBtn.innerText = day[time.getDay()];
			dateBtn.innerText = `${
				month[time.getMonth()]
			} ${time.getDate()}, ${time.getFullYear()}`;
		} catch (error) {
			alert("City not found");
		}
	}
};

submitBtn.addEventListener("click", getInfo);
