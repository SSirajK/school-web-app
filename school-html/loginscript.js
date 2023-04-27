const emailInput = document.getElementById('email')
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
    email: emailInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
}

const handleSubmit = (event) => {
  event.preventDefault()
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
  console.log(formData, 'formdata')
}

passwordToggle.addEventListener('click', togglePasswordVisibility)
emailInput.addEventListener('input', handleChange)
passwordInput.addEventListener('input', handleChange)
rememberInput.addEventListener('change', handleChange)
document.getElementById('login-form').addEventListener('submit', handleSubmit)
