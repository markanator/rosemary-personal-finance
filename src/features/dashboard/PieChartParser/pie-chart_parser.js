export default function PieChartParser(arrayOfData) {
  let finalResults = [
    {
      category: 'Entertainment',
      value: 0,
      color: '#FFD9D9',
    },
    {
      category: 'Credit Card',
      value: 0,
      color: '#DDDDDD',
    },
    {
      category: 'Bills',
      value: 0,
      color: '#E1DCFF',
    },
    {
      category: 'Fast Food',
      value: 0,
      color: '#D7FFEC',
    },
    {
      category: 'Income',
      value: 0,
      color: '#ffd7ea',
    },
    {
      category: 'Other',
      value: 0,
      color: '#FFEBD9',
    },
  ];

  // es-lint-disable-next-line
  let totalSum = 0;

  arrayOfData.forEach((element) => {
    // adding values to finalresults array
    switch (element.trx_category) {
      case 'Entertainment':
        // add elemnt value to finalResults
        finalResults[0].value += Math.abs(element.trx_amount);
        totalSum += element.trx_amount;
        break;
      case 'Credit Card':
        // add elemnt value to finalResults
        finalResults[1].value += Math.abs(element.trx_amount);
        totalSum += element.trx_amount;
        break;
      case 'Bills':
        // add elemnt value to finalResults
        finalResults[2].value += Math.abs(element.trx_amount);
        totalSum += element.trx_amount;
        break;
      case 'Fast Food':
        // add elemnt value to finalResults
        finalResults[3].value += Math.abs(element.trx_amount);
        totalSum += element.trx_amount;
        break;
      case 'Income':
        // add elemnt value to finalResults
        finalResults[4].value += Math.abs(element.trx_amount);
        totalSum += element.trx_amount;
        break;
      case 'Other':
        // add elemnt value to finalResults
        finalResults[5].value += element.trx_amount;
        // eslint-disable-next-line no-unused-vars
        totalSum += element.trx_amount;
        break;
      default:
        break;
    }
  });

  // console.log('total sum', totalSum);
  return finalResults;
}

// PieChartParser(MOCKDATA);
