const lodash = require('lodash');

const names= ["Zambia", "Guyana", "UCN", "PG"];
const capitalized = lodash.map(names, lodash.capitalize);
console.log(capitalized)