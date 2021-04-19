import React from 'react';

const Index = () => (

  <>

    <h1>welcome</h1>
    <img
      src="https://picsum.photos/200/200"
      alt="algo"
    />

    <form>

      <label htmlFor="userinput">
        <input type="text" id="userinput" />
      </label>
      <label htmlFor="passwordinput">
        <input type="text" id="passwordinput" />
      </label>
      <button type="submit">Ingresar</button>

    </form>
  </>

);

export default Index;
