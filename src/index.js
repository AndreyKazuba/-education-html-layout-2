const express = require('express')
const path = require('path')

const app = express()
const PORT = 4200

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`)
})