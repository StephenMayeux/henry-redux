import React from 'react';
import PersonCard from '../PersonCard';


const renderPeople = (props) => {
  return props.people.map(person => {
    return <PersonCard {...person} key={person.uuid} removePerson={props.removePerson} />
  });
};

const PeopleList = (props) => {
  return (
    <div className="row justify-content-around">
      {renderPeople(props)}
    </div>
  );
};

export default PeopleList;
