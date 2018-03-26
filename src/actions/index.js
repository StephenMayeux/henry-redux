import faker from 'faker';

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';

const addPerson = () => {
  const person = {
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    title: faker.name.jobTitle(),
    bio: faker.lorem.sentence(),
    id: faker.random.uuid()
  }

  return {
    type: ADD_PERSON,
    payload: person
  }
}

const removePerson = (uuid) => {
  return {
    type: REMOVE_PERSON,
    payload: uuid
  }
}

export const actionCreators = {
  addPerson,
  removePerson
}
