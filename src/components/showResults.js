export default function showResults (values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}
