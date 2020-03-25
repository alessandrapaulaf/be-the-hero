const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const locador_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('locador_id',locador_id)
        .select('*');

        response.json(incidents);
    }
}