const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000

mongoose
.connect("mongodb+srv://learn:learn@cluster0.agne6k0.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log(`Database started`)
  })
  .catch((err)=>{
    console.log("Error =>", err)
  })
  ;

  const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(PORT, () => {
      console.log(`Server has started! on port ${PORT} `);
    });
