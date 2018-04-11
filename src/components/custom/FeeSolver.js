const solveFees = (offer) => {
  const profit = offer * 0.15
  const fee = offer - profit

  return { fee, profit }
}

export default solveFees
