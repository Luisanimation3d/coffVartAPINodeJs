const express = require('express');

const dbConnection = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 3000;

		this.usersPath = '/api/user';
		this.contractsPath = '/api/contract';
		this.paysPath = '/api/pay';
		this.productionsPath = '/api/production';

		// middleware
		this.middlewares();

		// Rutas
		this.routes();

		// Conección
		this.conectarDb();
	}

	middlewares() {
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*'); // Cambia '*' por el dominio permitido si es necesario
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
			res.setHeader(
				'Access-Control-Allow-Headers',
				'Content-Type, Authorization'
			);
			next();
		});

		this.app.use(express.json());
		// this.app.use(bodyParser.json());
		// this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/UserRoute'));
		this.app.use(this.contractsPath, require('../routes/contractRoute'));
		this.app.use(this.paysPath, require('../routes/payRoute'));
		this.app.use(this.productionsPath, require('../routes/productionRoute'));
	}

	async conectarDb() {
		await dbConnection();
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}
}

module.exports = Server;
