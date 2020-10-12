const app = require('./src/config/custom-express');
const port = process.env.PORT || 3000;
require('./src/app/database/mongoose');

app.listen(port, () => console.log('executando servidor porta 3000'));
