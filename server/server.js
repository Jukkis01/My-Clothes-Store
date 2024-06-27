const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5001

app.use(cors())

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Jeans", description: "Description 1", price: 100 },
    { id: 2, name: "Shirt", description: "Description 2", price: 450 },
    { id: 3, name: "Dress", description: "Description 3", price: 300 },
    { id: 4, name: "Shoes", description: "Description 4", price: 500 },
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
