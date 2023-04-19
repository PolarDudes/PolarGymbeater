import Storage from '../api/storage'

class IntakeStorage extends Storage {
  constructor() {
    super('@calories')
  }

  store = async (values) => this.storeData(values)
  get = async () => this.getData()
  clear = async () => this.clearData()
}

export default new IntakeStorage()
