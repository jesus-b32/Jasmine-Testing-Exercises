describe("Payment test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 20;
      tipAmtInput.value = 5;
    });
  
    it('Add a curPayment object to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('20');
      expect(allPayments['payment1'].tipAmt).toEqual('5');
      expect(allPayments['payment1'].tipPercent).toEqual(25);

    });
  
    it('createCurPayment() will return object with payment info will return undefined with negative or empty inputs', function(){
      expect(createCurPayment()).toEqual({billAmt: '20', tipAmt: '5', tipPercent: 25});
      
      billAmtInput.value = '';
      expect(createCurPayment()).toEqual(undefined);

      billAmtInput.value = -1;
      expect(createCurPayment()).toEqual(undefined);
    })
  
  
    it('Create table row element on appendPaymentTable()', function () {
      submitPaymentInfo();

    const newTDs = document.querySelectorAll('#paymentTable tbody tr td');

    expect(newTDs.length).toEqual(3);
    expect(newTDs[0].innerText).toEqual('$20');
    expect(newTDs[1].innerText).toEqual('$5');
    expect(newTDs[2].innerText).toEqual('25%');

    });

    it('Create table row element with calculated sum of all payment on updateSummary()', function () {
      submitPaymentInfo();

      expect(summaryTds.length).toEqual(3);
      expect(summaryTds[0].innerHTML).toEqual('$20');
      expect(summaryTds[1].innerHTML).toEqual('$5');
      expect(summaryTds[2].innerHTML).toEqual('25%');

      billAmtInput.value = 77;
      tipAmtInput.value = 15;
      submitPaymentInfo();

      expect(summaryTds[0].innerHTML).toEqual('$97');
      expect(summaryTds[1].innerHTML).toEqual('$20');
      expect(summaryTds[2].innerHTML).toEqual('22%');

      });
  
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
  