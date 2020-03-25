const connection = require('../database/connection');

module.exports = {
  async list(request, response){
    const { page = 1 } = request.query;

    const [count] = await connection('incidents')
    .count();

    const incidents = await connection('incidents')
    .join('locador', 'locador_id', '=', 'incidents.locador_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select('*');

    response.header('Count', count); 
    
    return response.json(incidents);
  },

  async create(request, response) {
    const { titulo, descricao, valor} = request.body;
    const locador_id = request.headers.authorization;

    const result = await connection ('incidents').insert({
      titulo,
      descricao,
      valor,
      locador_id
    });  

    const id = result[0];

    return response.json({ id })
  },

  async delete(request, response){
    const { id } = request.params;
    const locador_id = request.headers.authorization;

    const incident = await connection('incidents')
    .where('id', id)
    .select('locador_id')
    .first();

    if (incident.locador_id != locador_id) {
      return response.status(401).json({ error: 'Operation not permitted '});
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
};