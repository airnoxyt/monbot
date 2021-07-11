module.exports.run = async (client , message, args)  => {
    message.delete()
    function clean(text) {
        if (typeof text === "string") 
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
      }
     
      if (message.author.id !== "523811999856066570") return;
      const code = args.join(" ");
      const evaled = eval(code);
      const cleanCode = await clean(evaled);
      message.channel.send(cleanCode, { code: "js" });
    
 }
 module.exports.help = {
   name: "eval",
   aliases : [''],
   category: "owner",
   description: "",
   usage : '',
   isUserAdmin: false,
  
   permissions : true,
   args: false
   
 }