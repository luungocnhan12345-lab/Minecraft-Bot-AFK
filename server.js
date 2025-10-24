const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Bot đang chạy'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Web server chạy port ${PORT}`))
