import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { mapper } from './account-mapper'
import Account from '../models/account'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const { name, email, password } = account
    const result = await Account.create({ name, email, password })
    return mapper(result)
  }
}
