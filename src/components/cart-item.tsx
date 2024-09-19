import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem : any;
};


const CardItem = ({cartItem}:CartItemProps) => {
  
    const {photo,productId,name,price,stock,quantity} = cartItem

    return (
    <div
    className="cart-item"
    >
    <img
    src={photo}    
    alt={name}
    ></img>  
    <article>
    <Link
    to={`.product/${productId}`}
    >
    {name}    
    </Link>
    <span>
    Rs.{price}
    </span>
    </article>
    <div>
        <button>-</button>    
        <p>{quantity}</p>
        <button>+</button>    
    </div>

<button>
<FaTrash/>    
</button>

    </div>
  )
}

export default CardItem
