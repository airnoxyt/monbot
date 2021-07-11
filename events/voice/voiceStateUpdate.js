const voiceClient = require('../../util/functions/VoiceClient')
const {MessageEmbed, TeamMember, UserManager} = require('discord.js')
const settings = require('../../config.json')
module.exports = async (client, oldState , newState) => {
voiceClient.startListener(oldState, newState)

}