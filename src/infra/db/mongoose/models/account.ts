import { Schema, model } from 'mongoose'

const AccountSchema = new Schema({
  name: String,
  email: String,
  password: String
},
{
  collection: 'Accounts',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

export default model('Account', AccountSchema)
