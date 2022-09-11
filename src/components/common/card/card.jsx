import { OptionsIcon } from "../../../assets/icons";
import "./card.scss"

const Card = ({ title = "", date, content, onClick }) => {

   return <div className="card">
      <div>
         <div className="card-header">
         <h2>{title}</h2>
         <img alt="Options Icon" src={OptionsIcon} />
         </div>
         <span>{date}</span>
      </div>
      <hr />
      <div className="content" onClick={onClick}>
         <p>
            {content}
         </p>
      </div>
   </div>
}

export default Card;
