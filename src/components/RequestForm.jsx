import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url,  body, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label>
      URL
      <input type='text' value={url} name='url' onChange={onChange}/>
    </label>
    <br></br>
    <section>
      <br></br>
      <label>
        GET
        <input type='radio' value='get' name='method' onChange={onChange}></input>
      </label>
      <br></br>
      <label>
        POST
        <input type='radio' value='post' name='method' onChange={onChange}></input>
      </label>
      <br></br>
      <label>
        PUT
        <input type='radio' value='put' name='method' onChange={onChange}></input>
      </label>
      <br></br>
      <label>
        DELETE
        <input type='radio' value='delete' name='method' onChange={onChange}></input>
      </label>
      <br></br>
      <label>Input</label>
      <textarea type='text' value={body} name='input' onChange={onChange}></textarea>
    </section>
    <button>Submit</button>
  </form>
);

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequred,
  onChange: PropTypes.func.isRequired
};

export default RequestForm;
