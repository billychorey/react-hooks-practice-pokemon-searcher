import React, {useState, useEffect} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      hp, 
      frontUrl, 
      backUrl
    }
    console.log(formData)
      setName("");
    setHp("");
    setFrontUrl("");
    setBackUrl("");
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
