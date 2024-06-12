require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const getData=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

app.get('/', (req, res) => {
  res.send('Hello gourav!')
})
app.get("/twitter",(req,res)=>{
    res.send(' twitter ka URl or username')
})

app.get("/login",(req,res)=>{
    res.send(' <h1>please login </h1>')
})
app.get("/youtube",(req,res)=>{
    res.send(' <h2>chai aur code</h2>')
})
app.get("/gitdata",(req,res)=>{
    res.json(getData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

