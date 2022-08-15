
const env = "test"

const prod = {
	url: "https://localhost:5000",
	appKey: ","
}

const dev = {
	url: "https://localhost:5000",
	appKey: ","
}

const test = {
	url: "https://localhost:5000",
	appKey: ","
}

const config = {
	dev,
	prod,
	test
}

let baseURL = config[env].url;
let appKey = config[env].appKey;
 
 export {
	baseURL,
	appKey
 }