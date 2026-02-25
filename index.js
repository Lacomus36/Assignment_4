//local server code

const express = require('express');
const app = express();

//constant variable set to used port for simplicity
const PORT = 3000;


//serves static files from folder
app.use(express.static("public"));

const breeds = {
	labrador: ["labrador1.jpeg", "labrador2.jpeg", "labrador3.jpeg"],
	beagle: ["beagle1.jpeg", "beagle2.jpeg", "beagle3.jpeg"],
	poodle: ["poodle1.jpeg", "poodle2.jpeg", "poodle3.jpeg"],
	shihtzu: ["shihtzu1.jpeg","shihtzu2.jpeg","shihtzu3.jpeg"]

};

function getRandomItem(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/breeds", (req, res) => {
	res.json(Object.keys(breeds));
});

app.get("/image/:breed", (req, res) => {
	const breed = req.params.breed.toLowerCase();

	if (!breeds[breed]) {
		return res.status(404).json({ error: "Breed not found" });
}
	const randomImage = getRandomItem(breeds[breed]);
	res.json({
		image: `/img/${randomImage}`
	});
});

//starts the server on port 3000
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);

});

