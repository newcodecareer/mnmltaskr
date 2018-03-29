const isName = (text) => (
  text && /^[a-z ,.'-]+$/i.test(text)
)

const isEmail = (text) => (
  text && /^\w+@[a-z0-9._-]+\.[a-z]{2,4}$/i.test(text)
)

const isPassword = (text) => (
  text && text.length > 8
)

const isPhoneNumber = (number) => (
  number && /^(\+?63|0)?9\d{9}$/.test(number)
)

const isAddress = (text) => (
  text && /^[a-z0-9 ,.'-]+$/i.test(text)
)

export {
  isName,
  isEmail,
  isPassword,
  isPhoneNumber,
  isAddress
}
