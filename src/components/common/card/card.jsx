import { OptionsIcon } from "../../../assets/icons";
import "./card.scss"

const Card = ({ title = "", date, content }) => {

   return <div className="card">
      <div>
         <div className="card-header">
         <h2>{title}</h2>
         <img alt="Options Icon" src={OptionsIcon} />
         </div>
         <span>{date}</span>
      </div>
      <hr />
      <div className="content">
         <p>
            {content}
         </p>
      </div>
   </div>
}

export default Card;
