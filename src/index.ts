import express from 'express'

const main = (): void => {
  const PORT = process.env.PORT
  const app = express()

  app.get('/', (req, res) => {
    res.status(200).json({ message: 'success' })
  })

  app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
  })
}

main()
