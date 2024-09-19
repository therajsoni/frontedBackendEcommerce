import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"


const Shipping = () => {

  const navigate = useNavigate()

  const [shippingInfo,setShippingInfo] = useState({
    address : "",
    city : "",
    state : "",
    country : "",
    pinCode :""
  })  

  const changeHandler = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo(prev => ({...prev,[e.target.name] : e.target.value}))
  }

  return (
    <div className="shipping">
    <button className="back-btn" onClick={()=>navigate("/cart")}>
     <BiArrowBack/>   
    </button>
      
      <form>
      <h1>Shipping Address</h1>  
      <input
      required
      type="text"
      placeholder="Address"
      name="address"
      value={shippingInfo.address}
      onChange={changeHandler}
      >      
      </input>
      <input
      required
      type="text"
      placeholder="City"
      name="city"
      value={shippingInfo.city}
      onChange={changeHandler}
      >      
      </input>
      <input
      required
      type="text"
      placeholder="State"
      name="State"
      value={shippingInfo.state}
      onChange={changeHandler}
      >      
      </input>
     <select
      name="country"
      id="country"
      required
      value={shippingInfo.country}
      onChange={changeHandler}
      >
      <option
      value=""
      >Choose country</option>  
      <option value="india">
      IND 
      </option>
      <option value="india">
      IND 
      </option>
      <option value="india">
      IND 
      </option>
      </select>
      <input
      required
      type="number"
      placeholder="PinCode"
      name="PinCode"
      value={shippingInfo.pinCode}
      onChange={changeHandler}
      >      
      </input>
      <button type="submit">
      Pay Now
      </button>
      </form>

    </div>
  )
}

export default Shipping