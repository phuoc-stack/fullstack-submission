import { useState, useEffect } from 'react'
import axios from 'axios';
import personService from './services/persons'
import Person from './components/Person'

const PersonForm = ({addPerson,newName, handlePersonChange, newNumber, handleNumberChange})=>{
  return (
  <form onSubmit={addPerson}> 
          <div>
            name: <input value={newName} 
            onChange={handlePersonChange}/>
          </div>
          <div>
            number: <input value={newNumber} 
            onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
  )
}

const App = () => {
  ///Initialize state
  const [persons, setPersons] = useState([ ///initialize the state for array `persons`
    { name: 'Arto Hellas', number: '040-123456' , id:1  }
  ]) 
  const [newName, setNewName] = useState('') ///initialize the state for array `newName`
  const [newNumber, setNewNumber] = useState('') ///initialize the state for array `newNumber`
  
  ///Define handlers
  const addPerson =(event)=>{
    event.preventDefault() ///prevent the form from being submitted

    if (persons.some(person=>person.name===newName)){ ///check if any person in array `persons`has the same name as `newName`
      alert(`${newName} is already added to the phonebook`); ///returns `true` if there is at least one person with the same name as `newName`
      return; /// exits the function `addPerson` immediately
    }

    const personObject ={ 
    ///initialize a new object to store new input values
      name:newName, ///assign the value of newName state to the name property
      number: newNumber, ///assign the value of newNumber to the number property
      id:(persons.length+1).toString(), ///generate a new unique ID based on the length of the persons array
    }
    ///Update state
    setPersons(persons.concat(personObject)) ///Update the persons state by adding the new personObject to the existing array
    setNewName('') ///clear the newName state to reset the input field
    setNewNumber('') ///clear the newNumber state to reset the input field

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })  
    
      
  } 

  // const deleteBtnOf = id => {
  //   const person = persons.find(n => n.id === id)
  //   const changedPerson = {}

  //   personService
  //   .update(id, changedPerson)
  //   .then(returnedPerson => {
  //     setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
  //   })
  // } 

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const handlePersonChange =(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange =(event)=>{
    setNewNumber(event.target.value)
  }

  ///render components
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new contact</h3>
      <PersonForm 
      addPerson={addPerson}
      newName={newName}
      handlePersonChange={handlePersonChange}
      handleNumberChange={handleNumberChange}
      newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <ul>
      {persons.map(person=>(
      <Person key={person.id} name={person.name} number={person.number} deletePerson={()=>deletePerson(person.id)}/>
    ))
    }
      </ul>
    </div>
  )
}


export default App