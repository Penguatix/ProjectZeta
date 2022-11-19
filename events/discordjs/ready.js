module.exports = {
  name: "ready",
  async execute(client){
    client.user.setActivity("On Project Alpha", {
      type: "WORKING",
    }),
	  console.log('------Commands Loaded------ \n\nReady! \n' + `Logged in as ${client.user.username}`);
  },
}
