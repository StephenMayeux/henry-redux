import React from 'react';

const PersonCard = ({ first, last, title, bio, id, removePerson }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`${first} ${last}, ${title}`}</h5>
          <p className="card-text">{bio}</p>
          <button
            onClick={() => removePerson(id)}
            className="btn btn-danger btn-block"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
