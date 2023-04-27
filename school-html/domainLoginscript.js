const domainIDInput = document.getElementById('domainID')
const companyNameInput = document.getElementById('companyName')
const passwordInput = document.getElementById('password')
const rememberInput = document.getElementById('remember')
const passwordToggle = document.getElementById('password-toggle')

let isPasswordVisible = false

const togglePasswordVisibility = () => {
  isPasswordVisible = !isPasswordVisible
  passwordInput.type = isPasswordVisible ? 'text' : 'password'
}

const handleChange = () => {
  const formData = {
    domainID: domainIDInput.value,
    companyName: companyNameInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
}

const handleSubmit = (event) => {
  event.preventDefault()
  const formData = {
    domainID: domainIDInput.value,
    companyName: companyNameInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
  console.log(formData, 'formdata')
}

passwordToggle.addEventListener('click', togglePasswordVisibility)
domainIDInput.addEventListener('input', handleChange)
companyNameInput.addEventListener('input', handleChange)
passwordInput.addEventListener('input', handleChange)
rememberInput.addEventListener('change', handleChange)
document.getElementById('login-form').addEventListener('submit', handleSubmit)
