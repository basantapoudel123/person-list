import React from 'react'
import './App.css'

const App = () => {
    return(
      <div>
        <PersonList/>
      </div>
    )
}  

const PersonList = () => {
  const people = [
    {
      img: 23,
      name:"John",
      job:"Developer"
    },
    {
      img: 14,
      name:"Peter",
      job:"Designer"
    },
    {
      img: 85,
      name:"Seth",
      job:"Manager"
    },
    {
      img: 54,
      name:"Roman",
      job:"Software Tester"
    },
    {
      img: 15,
      name:"Sunny",
      job:"React Developer"
    }
  ]

  return (
      <section>
        <Person person={people[0]}/>
        <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur 
        adipisci elit, sed eiusmod tempor incidunt 
        ut labore et dolore magna aliqua.
        </Person>
        <Person person={people[2]}/>
        <Person person={people[3]}>
        Lorem ipsum dolor sit amet, consectetuer 
        adipiscing elit. Aenean commodo ligula eget 
        dolor. Aenean massa.
        </Person>
        <Person person={people[4]}/>
      </section>
  );  
};

const Person = props => {
  const {img, name, job} = props.person;
  const {children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
     <div className='person'>
       <img src={url} alt="" />
       <div>
         <h4>{name}</h4>
         <h4>{job}</h4>
         {children}
       </div>
     </div>
  )
};

export default App;
