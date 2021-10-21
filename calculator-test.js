
it('should calculate the monthly rate correctly', function (monthly) {
const values = {
  amount: 100000,
  years: 30,
  rate: 4.25
}
expect(calculateMonthlyPayment(values)).toEqual('491.94')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 50000,
    years: 15,
    rate: 4.25
  }
  expect(calculateMonthlyPayment(values)).toEqual('376.14')
});
