import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contact.js"
import searchRoutes from "./routes/search.js"
import errorHandler from "./middleware/errorHandler.js"
import Certificate from "./models/Certificate.js"

dotenv.config()
const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }))
app.use(express.json())
app.use("/api/contact", contactRoutes)
app.use("/api/search", searchRoutes)
app.use(errorHandler)

const sampleCertificates = [
  { certNumber: "QAMS-ISO9001-2024-0001", orgName: "Precision Industries Ltd", standard: "ISO 9001:2015", address: "Noida, Uttar Pradesh", scope: "Manufacturing and supply of precision industrial components.", issuedOn: "2024-02-01", expireOn: "2027-01-31", status: "Active" },
  { certNumber: "QAMS-ISO45001-2024-0002", orgName: "Buildtech Construction", standard: "ISO 45001:2018", address: "Gurugram, Haryana", scope: "Construction project management and site safety systems.", issuedOn: "2024-04-15", expireOn: "2027-04-14", status: "Active" },
  { certNumber: "QAMS-ISO27001-2024-0003", orgName: "DataSecure Solutions", standard: "ISO 27001:2013", address: "Bengaluru, Karnataka", scope: "Information security management for software delivery operations.", issuedOn: "2024-06-10", expireOn: "2027-06-09", status: "Active" },
]

async function connectMongo() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI
  if (!mongoUri) {
    console.warn("MONGO_URI missing. API will use in-memory sample certificates for search demo.")
    global.mongoReady = false
    return
  }
  await mongoose.connect(mongoUri)
  global.mongoReady = true
  await Certificate.bulkWrite(sampleCertificates.map((doc) => ({
    updateOne: { filter: { certNumber: doc.certNumber }, update: { $setOnInsert: doc }, upsert: true },
  })))
  console.log("MongoDB Atlas connected")
}

connectMongo().catch((err) => {
  global.mongoReady = false
  console.error("MongoDB connection failed:", err.message)
})

// Function to find an available port
async function findAvailablePort(startPort) {
  const net = await import('net')
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(startPort, () => {
      server.once('close', () => {
        resolve(startPort)
      })
      server.close()
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        server.close()
        findAvailablePort(startPort + 1).then(resolve).catch(reject)
      } else {
        reject(err)
      }
    })
  })
}

// Start server with port conflict handling
const startPort = parseInt(process.env.PORT) || 5055

findAvailablePort(startPort)
  .then((port) => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch((err) => {
    console.error('Failed to start server:', err.message)
    process.exit(1)
  })
