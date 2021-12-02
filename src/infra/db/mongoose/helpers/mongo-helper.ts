import mongoose, { Collection } from 'mongoose'
import { AccountModel } from '../../../../domain/models/account'

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
  },

  mapper (collection: any): any {
    const { _doc } = collection
    const { _id, ...accountWithout } = _doc
    return Object.assign({}, accountWithout, { id: _id })
  }
}
