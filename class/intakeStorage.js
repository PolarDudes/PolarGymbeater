import Storage from '../api/storage'

class IntakeStorage extends Storage {
  #data = []
  constructor() {
    super('@calories')
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

export default new IntakeStorage()
