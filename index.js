const config = require('config')
const express = require('express')
const spdy = require('spdy')
const cors = require('cors')
const MBTiles = require('@mapbox/mbtiles')

const htdocsDir = config.get('htdocsDir')
const fontsDir = config.get('fontsDir')
const mbtilesPath = config.get('mbtilesPath')
const port = config.get('port')

const app = express()
app.use(cors())
app.use('/', express.static(htdocsDir))
app.use('/fonts', express.static(fontsDir))

const openMbtiles = () => {
  return new Promise((resolve, reject) => {
    new MBTiles(`${mbtilesPath}?mode=ro`, (err, mbtiles) => {
      if (err) { reject(err) }
      resolve(mbtiles)
    })
  })
}
const mbtiles = openMbtiles()

app.get('/zxy/:z/:x/:y.pbf', async (req, res) => {
  const z = parseInt(req.params.z)
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
})

app.listen(port)
