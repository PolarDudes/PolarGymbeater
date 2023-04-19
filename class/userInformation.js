import Storage from '../api/storage'

class UserInformation extends Storage {
  constructor() {
    super('@user')
  }

  store = async () => this.storeData()
  get = async () => this.getData()
  clear = async () => this.clearData()
}

export default new UserInformation()
