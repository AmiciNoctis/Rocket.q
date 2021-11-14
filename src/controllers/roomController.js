const Database = require('../db/config');

module.exports = {
  async create(req, res){
      const db = await Database()
      const pass = req.body.password
      let roomId
      let isRoom = true
      while(isRoom){
          /* Gera o numero da sala */
          for(var i = 0; i < 6; i++){
              i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
              roomId += Math.floor(Math.random() * 10).toString()
          }

          /* Verificar se esse numero ja existi */
          const roomsExistIds = await db.all(`SELECT id FROM rooms`)
          isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

          if(!isRoom){
              /* Inseri a sala no banco */
              await db.run(`INSERT INTO rooms (
                  id,
                  pass
              ) VAlUES (
                  ${parseInt(roomId)},
                  ${pass}
              )`)
          }
      }         

      await db.close()

      res.redirect(`/room/${roomId}`)
  },

  async open(req, res) {
    const db = await Database()
    const roomId = req.params.roomId
    res.render("room", {roomId: roomId})
    console.log(`${roomId}`)
  }
}