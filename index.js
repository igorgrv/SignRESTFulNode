const app = require('./src/config/custom-express');
const port = process.env.PORT || 3000;
require('./src/app/database/mongoose');

app.listen(port, () => console.log('executando servidor porta 3000'));

const bcryptjs = require('bcryptjs');

const testandoBcrypt = async () => {
	const password = 'igor123';
	const hashPassword = await bcryptjs.hash(password, 8);

	console.log('senha: ' + password + ' senhaBcrypt: ' + hashPassword);

	const isMatch = await bcryptjs.compare(password, hashPassword);
	console.log(isMatch);
}

testandoBcrypt();