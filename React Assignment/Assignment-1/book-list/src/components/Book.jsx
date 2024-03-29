import React from 'react'

// function Book({title,author,year}) {
   
//   return (
//     <div>
//         <h3>{title}</h3>
//   <p>Author: {author}</p>
//   <p>Year: {year}</p>
//     </div>
//   )
// }

class Book extends React.PureComponent{
  render(){
    const {title, author, year} = this.props
    return(
      <div>
               <h3>{title}</h3>
         <p>Author: {author}</p>
         <p>Year: {year}</p>
         </div>
    )
  }
}
export default Book
