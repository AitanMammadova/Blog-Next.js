import {useState} from 'react';
const Home = () => {
  const [name,setName] = useState('aitan');
  const [age,setAge] = useState(19);
  const handleClick=()=>{
    setName('ali');
    setAge(20);
  }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
  export default Home;