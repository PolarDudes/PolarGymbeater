import Storage from '../api/storage'

class UserInformation extends Storage {
  #data = []
  constructor() {
    super('@user')
    this.getData().then((data) => (this.#data = data))
  }

  get = () => this.#data

  store(newData) {
    this.storeData(newData)
    this.#data = newData
  }

  clear() {
    this.clearData()
    this.#data = []
  }
}

export default new UserInformation()
