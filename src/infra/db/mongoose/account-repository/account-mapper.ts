import { AccountModel } from '../../../../domain/models/account'

export const mapper = (account: any): AccountModel => {
  const { _id, name, email, password } = account
  return Object.assign({}, { id: _id, name: name, email: email, password: password })
}
