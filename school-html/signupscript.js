const fullNameInput = document.getElementById('fullName')
const emailInput = document.getElementById('email')
const usernameInput = document.getElementById('username')
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
    fullName: fullNameInput.value,
    email: emailInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
}

const handleSubmit = (event) => {
  event.preventDefault()
  const formData = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
    remember: rememberInput.checked,
  }
  console.log(formData, 'formdata')
}

passwordToggle.addEventListener('click', togglePasswordVisibility)
fullNameInput.addEventListener('input', handleChange)
emailInput.addEventListener('input', handleChange)
usernameInput.addEventListener('input', handleChange)
passwordInput.addEventListener('input', handleChange)
rememberInput.addEventListener('change', handleChange)
document.getElementById('login-form').addEventListener('submit', handleSubmit)
