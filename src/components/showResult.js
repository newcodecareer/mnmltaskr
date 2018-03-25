export default function showResult (values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}
