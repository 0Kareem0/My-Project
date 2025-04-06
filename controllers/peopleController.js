let { people } = require('../data/people')

// GET all people
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

// POST new person
const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' })
  }
  if (!isNaN(name)) {
    return res.status(400).json({ success: false, msg: 'name cannot be a number' })
  }
  res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
}

// PUT update or add person
const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  let person = people.find((p) => p.id === Number(id))

  if (!person) {
    person = { id: Number(id), name }
    people.push(person)
    return res.status(201).json({ success: true, msg: 'Person added', data: people })
  }

  const newPeople = people.map((p) => {
    if (p.id === Number(id)) {
      p.name = name
    }
    return p
  })

  res.status(200).json({ success: true, msg: 'Person updated', data: newPeople })
}

// DELETE person
const deletePerson = (req, res) => {
  const person = people.find((p) => p.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` })
  }

  const newPeople = people.filter((p) => p.id !== Number(req.params.id))

  res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
}
