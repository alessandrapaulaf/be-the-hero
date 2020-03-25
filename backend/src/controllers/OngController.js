const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
	async list(request, response){
		const ongs = await connection('locador').select('*');

		return response.json(ongs);
	},

	async create(request, response){
		const { name, email, cpf, cidade, uf } = request.body;

		const id = crypto.randomBytes(4).toString('HEX');

		await connection('locador').insert({
			id,
			name,
			cpf,
			email,
			cidade,
			uf, 
		})
		return response.json({ id });
	}
}