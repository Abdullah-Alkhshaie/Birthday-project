import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((person) => {
        return (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.name} className="img" />
            <div className="info">
              <h4 className="name">{person.name}</h4>
              <p className="age">{person.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
