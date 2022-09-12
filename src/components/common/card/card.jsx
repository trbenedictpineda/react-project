import { useState } from "react";
import { OptionsIcon } from "../../../assets/icons";
import Popover from "../popover/popover";
import "./card.scss"

const Card = ({ title = "", date, content, onClick, optionsContent, }) => {

   const [isOpen, setIsOpen] = useState(false)

   const openOptions = () => {
      setIsOpen(true)
   }

   const closeOptions = () => {
      setIsOpen(false)
   }

   return <>
      <div className="card">
         <div>
            <div className="card-header">
               <h2>{title}</h2>
               <img alt="Options Icon" src={OptionsIcon} onClick={openOptions} />
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
      <Popover isOpen={isOpen} onClose={closeOptions}>
         {optionsContent}
      </Popover>
   </>
}

export default Card;
