
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10, 
    rate: 7
  };

  expect(calculateMonthlyPayment(values)).toEqual('116.11');

});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10000, 
    years: 10, 
    rate: 6.55
  };

  expect(calculateMonthlyPayment(values)).toEqual('113.80');
});

/// etc
