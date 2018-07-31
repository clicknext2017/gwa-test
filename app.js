const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({
	"message" : "welcome"
}))

app.post('/autenticate', (req, res) => res.json({
	"access_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzeXN0ZW1fbmFtZSI6IldGNENMQUlNIiwidW5pcXVlX25hbWUiOiJUZXN0IiwiaXNzIjoiaHR0cDovL3d3dy5tdWFuZ3RoYWkuY28udGgiLCJhdWQiOiI5NGZmNGQ3ZDEzNTI0ZGIzYWQ4MTU4NTMxZDI4YjM4YyIsImV4cCI6MTQ5NjA1NjMyMywibmJmIjoxNDk2MDUyNzIzfQ.6HRJocRAsvN2HrE8bd_oGbcyFjnghx36o7_3h0YKNpQ",
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
