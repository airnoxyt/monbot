const mongoose = require('mongoose');
const {User} = require('./schema/index')

module.exports =  client => {

           client.createUser = async user => {
               const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
                  const createUser = await new User(merged);
                  createUser.save().then(u => console.log(`Nouveau utilisateur -> ${u.username}`));
                  };
              
                  client.getUser = async user => {
                      const data = await  User.findOne({ userID: user.id});
                      if (data) return data;
                     else return;
                  };
                  client.getUsers = async guild => {
                   const data = await  User.find({ guildID: guild.id});
                   if (data) return data;
                  else return;
               };
              
                  client.updateUser = async (user, settings) => {
                      let data = await client.getUser(user);
                      if (typeof data !== "object") data = {};
                      for (const key in settings){
                          if (data[key] !== settings[key]) data[key] = settings[key];
                      }
                      return data.updateOne(settings);
                   };
                   client.addExp = async (client, member, exp) => {
                       const userToUpdate = await client.getUser(member);
                       const updatedExp = userToUpdate.experience + exp;
                       await client.updateUser(member, { experience : updatedExp});
                   }
                   client.removeExp = async (client, member, exp) => {
                       const userToUpdate = await client.getUser(member);
                       const updatedExp = userToUpdate.experience - exp;
                       await client.updateUser(member, { experience : updatedExp});
                   }
                       client.addBalance = async (client, member, balance) => {
                           const userToUpdate = await client.getUser(member);
                           const updatedBalance = userToUpdate.balance + balance;
                           await client.updateUser(member, { balance : updatedBalance});
                   }
                   client.remouveBalance = async (client, member, balance) => {
                       const userToUpdate = await client.getUser(member);
                       const updatedBalance = userToUpdate.balance - balance;
                       await client.updateUser(member, { balance : updatedBalance});
                   }
            
}