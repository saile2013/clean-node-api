import { Schema, model } from 'mongoose'

const AccountSchema = new Schema({
  name: String,
  email: String,
  password: String
},
{
  collection: 'Accounts',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

export default model('Account', AccountSchema)
