import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery') // Строграя проверка запросов

  if (isConnected) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true, // Параметр подключения для нового парсера
      useUnifiedTopology: true,
    })

    isConnected = true
  } catch (error) {
    console.log(error)
  }
}
