import { db } from '../../data/firebase';

function GetTransaction() {
  const onClick = async () => {
    try {
      const snapshot = await db
        .collection('users')
        .where('userID', '==', '1')
        .get();

      console.log(`Found ${snapshot.size}x transaction(s).`);
      const docs = snapshot.docs;
      docs.forEach((docSnapShot) => {
        console.log(`User ID: ${docSnapShot.data().userID}
                ---
                Transaction ID: ${docSnapShot.data().trx_id}
                Transaction Type: ${docSnapShot.data().trx_type}
                Transaction Category: ${docSnapShot.data().trx_category}
                Transaction Amount: ${docSnapShot.data().trx_amount}
                Transaction Date: ${docSnapShot.data().trx_date.toDate()}
                Transaction Details: ${docSnapShot.data().trx_details}`);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Read All Transaction</h3>
      <button onClick={onClick}>Read Transactions</button>
    </div>
  );
}

export default GetTransaction;
