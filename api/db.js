const mongoose = require('mongoose');

module.exports = () => {
    const url = "mongodb://localhost/linkhub";

    try {
        mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      const dbConnection = mongoose.connection;
      dbConnection.once("open", (_) => {
        console.log(`Database connected: ${url}`);
      });
     
      dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
      });
      return;
}