import Storage from '../api/storage'

const dummyData = [
  {
    date: 1682226176386,
    food: 'Bourbon',
    calories: 103,
  },
  {
    date: 1682136176385,
    food: 'Cider',
    calories: 74,
  },
  {
    date: 1682316176385,
    food: 'Absinthe',
    calories: 153,
  },
  {
    date: 1682226176385,
    food: 'Brandy',
    calories: 94,
  },
  {
    date: 1682316176386,
    food: 'Advocaat',
    calories: 125,
  },
]

class IntakeStorage extends Storage {
  #data = dummyData
  constructor() {
    super('@calories')
    this.getData()
      .then((data) => {
        if (data) this.#data = [...this.#data, ...data]
      })
      .catch((err) => console.log(err))
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
