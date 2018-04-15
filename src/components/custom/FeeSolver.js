const solveFees = (offer) => {
  const profit = offer * 0.15
  const fee = offer - profit

  return { fee, profit }
}

const solveTotalFees = (approvedList) => {
  let totalFee = 0
  let totalProfit = 0

  approvedList.forEach(approved => {
    totalFee += approved.fee
    totalProfit += approved.profit
  })

  const totalPayment = totalFee + totalProfit
  return { totalFee, totalProfit, totalPayment }
}

export {
  solveFees,
  solveTotalFees
}
