import { navigate } from 'gatsby';

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

function handleChange(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
}

function handleAttachment(evt) {
  this.setState({ [evt.target.name]: evt.target.files[0] });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  fetch('/', {
    method: 'POST',
    body: encode({
      'form-name': form.getAttribute('name'),
      ...this.state
    })
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => {
      console.log(error);
      navigate('/error');
    })
}

export {handleChange, handleAttachment, handleSubmit};