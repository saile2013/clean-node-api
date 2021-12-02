import mongoose, { Collection } from 'mongoose'

export const MongoHelper = {
  async connect (uri: string): Promise<void> {
    await (mongoose.connect(uri), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await mongoose.disconnect()
  },

  getCollection (name: string): Collection {
    return mongoose.connection.collection(name)
  }
}
