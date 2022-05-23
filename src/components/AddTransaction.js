    import React,{useState} from 'react'

export const AddTransaction = () => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0)

    return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
