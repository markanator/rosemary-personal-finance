export default function PieChartParser(arrayOfData) {
  let finalResults = {
    Entertainment: {
      category: 'Entertainment',
      value: 0,
      color: '#FFD9D9',
    },
    CreditCard: {
      category: 'Credit Card',
      value: 0,
      color: '#7F7F7F',
    },
    Bills: {
      category: 'Bills',
      value: 0,
      color: '#E1DCFF',
    },
    FastFood: {
      category: 'Fast Food',
      value: 0,
      color: '#D7FFEC',
    },
    Income: {
      category: 'Income',
      value: 0,
      color: 'green',
    },
    Other: {
      category: 'Other',
      value: 0,
      color: '#FFEBD9',
    },
  };

  let totalSum = 0;

  arrayOfData.forEach(element => {
    // adding values to finalresults array
    switch (element.trx_category) {
    
      case 'Entertainment':
        // add elemnt value to finalResults
        finalResults.Entertainment.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
      case 'Credit Card':
        // add elemnt value to finalResults
        finalResults.CreditCard.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
      case 'Bills':
        // add elemnt value to finalResults
        finalResults.Bills.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
      case 'Other':
        // add elemnt value to finalResults
        finalResults.Other.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
      case 'Fast Food':
        // add elemnt value to finalResults
        finalResults.FastFood.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
      case 'Income':
        // add elemnt value to finalResults
        finalResults.Income.value += element.trx_amount;
        totalSum += element.trx_amount;
        break;
    default:
        console.log("Nothing Detected");
    }
  });

  //
  return [finalResults, totalSum];
}

// PieChartParser(MOCKDATA);
