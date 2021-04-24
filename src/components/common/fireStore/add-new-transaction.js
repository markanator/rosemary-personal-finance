import { useState } from "react";
import { db } from "../../../data/firebase";

function AddTransaction() {
    const [trx_amount, setAmount] = useState(0);
    const [trx_category, setCategory] = useState("");
    const [trx_date, setDate] = useState("");
    const [trx_details, setDetails] = useState("");
    const [trx_type, setType] = useState("");

    const clickToAdd = async () => {
        try {
            const docRef = await db.collection("transactions").add({
                trx_amount,
                trx_category,
                trx_date: new Date("December 17, 1995 03:24"),
                trx_details,
                trx_type
            })
            console.log(`Successfully added new transaction at ${docRef.id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3>Add Transaction</h3>
            <div>
                <lable>
                    Amount:{" "}
                    <input type="number" value={trx_amount} onChange={(e) => setAmount(e.target.value)}/>
                </lable>
                <lable>
                    Category:{" "}
                    <input type="text" value={trx_category} onChange={(e) => setCategory(e.target.value)}/>
                </lable>
                <lable>
                    Date(ex: December 17, 1995 03:24:00):{" "}
                    <input type="text" value={trx_date} onChange={(e) => setDate(e.target.value)}/>
                </lable>
                <lable>
                    Details:{" "}
                    <input type="text" value={trx_details} onChange={(e) => setDetails(e.target.value)}/>
                </lable>
                <lable>
                    Type:{" "}
                    <input type="text" value={trx_type} onChange={(e) => setType(e.target.value)}/>
                </lable>
            </div>
            <div>
                <button onClick={clickToAdd}>Add Transaction</button>
            </div>
        </div>
    );
}

export default AddTransaction;

// async function addTransaction(transaction) {
//     try{
//       const docRef = await db.collection("transactions").add(transaction)
//       console.log(`Successfully added new transaction at ${docRef.id}`);
//     } catch(err) {
//       console.log(err);
//     }
//   }

//   addTransaction({
//     trx_amount: 0,
//     trx_category: "",
//     trx_date: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
//     trx_details: "",
//     trx_type: ""
//   })
