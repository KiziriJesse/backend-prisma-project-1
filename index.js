const express = require('express')
const quotesRouter = require("./routes/quotesRouter")

const server = express()

server.get('/', (req, res) => {
  res.send("Server is live and ready to give you the data")
})

//Get all Quotes
server.use('/quotes', quotesRouter)
  
const PORT = 4001;

server.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})

