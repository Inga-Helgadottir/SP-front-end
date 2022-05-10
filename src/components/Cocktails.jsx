import React from 'react'
import {Cocktail} from ".."

export const Cocktails = ({props}) => {
  return (
    <div className="Cocktails">
        {props.Cocktails.map((Cocktail) => (
            <Cocktail key={Cocktail.id} Coctail={Cocktail} />
        ))}
    </div>
  )
}
