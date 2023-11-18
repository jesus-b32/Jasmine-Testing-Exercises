describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 20;
      tipAmtInput.value = 5;
      submitPaymentInfo();
      
    });
  
    it("accepts 'tipAmt', 'billAmt', or 'tipPercent' and adds total from allPayments objects on sumPaymentTotal()", function () {

      expect(sumPaymentTotal('tipAmt')).toEqual(5);
      expect(sumPaymentTotal('billAmt')).toEqual(20);
      expect(sumPaymentTotal('tipPercent')).toEqual(25);

      billAmtInput.value = 77;
      tipAmtInput.value = 15;
      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(20);
      expect(sumPaymentTotal('billAmt')).toEqual(97);
      expect(sumPaymentTotal('tipPercent')).toEqual(44);

    });
  
    it('converts the bill and tip amount into a tip percent on calculateTipPercent()', function(){
  
      expect(calculateTipPercent(20, 5)).toEqual(25);//test whole number
      expect(calculateTipPercent(77, 15)).toEqual(19);//test decimal number
      expect(calculateTipPercent(1, 10)).toEqual(1000);//test high tip
    })
  
  
    it('expects a table row element, appends a newly created td element from the value on appendTd', function () {
      const newTr = document.createElement('tr');
      appendTd(newTr, 'hello');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerText = 'hello');

    });


    it('should append table row element "X" to serverTbody table', function(){
      const newTr = document.createElement('tr');
      appendDeleteBtn(newTr);

      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerText = 'X');
    })
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentId = 0;
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
  });
  