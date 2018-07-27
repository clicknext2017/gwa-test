const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({
	"message" : "welcome"
}))

app.post('/autenticate', (req, res) => res.json({
	"access_token" : "xxxxxxxxxxxxxxxxxxxxxx",
	"token_type" : "bearer",
	"expires_in" : 5555,
	"refresh_token" : "xxxxxxxxxxxxxxxxxxxxxxx"
}))

app.post('/signpdf', (req, res) => res.json({
  "base64Pdf": "xxxxxxxxxxxxxxx",
  "message": "Message",
  "messageCode": 999
}))

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))