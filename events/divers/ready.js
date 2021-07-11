const settings = require('../../config.json')
module.exports = async (client) => {
    await console.log('Reset de la console en cours...')
    await console.clear()
   await  console.log('Je suis en ligne')
    client.user.setPresence({ activity: { name: `${settings.Statut}`, type: 'PLAYING'}, status: 'online'})

}