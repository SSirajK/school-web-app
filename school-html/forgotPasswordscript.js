const emailInput = document.getElementById('email')

const handleChange = () => {
  const formData = {
    email: emailInput.value,
  }
}

const handleSubmit = (event) => {
  event.preventDefault()
  const formData = {
    email: emailInput.value,
  }
  console.log(formData, 'formdata')
}

emailInput.addEventListener('input', handleChange)
document.getElementById('forgot-form').addEventListener('submit', handleSubmit)
