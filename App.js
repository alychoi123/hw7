import React from "react"
 
class App extends React.Component {
   constructor() {
       super()
       this.state = {
           isLoggedIn: false,
           count1: 0,
           count2: 0
       }
       this.handleClick = this.handleClick.bind(this)
   }
  
   handleClick() {
       this.setState(prevState => {
           if (this.state.isLoggedIn) {
               return {
                   count1: prevState.count1 + 1,
                   isLoggedIn: !prevState.isLoggedIn
               }
           } else {
               return {
                   count2: prevState.count2 + 1,
                   isLoggedIn: !prevState.isLoggedIn
               }
           }
       })
   }
  
   render() {  
       let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
       let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
       let parText = this.state.isLoggedIn ? "logged in" : "logged out"
       let countNum = this.state.isLoggedIn ? "count1" : "count2"
       let img 
       let text
       if (this.state.count2 < 10) {
           img = ""
       } else {
           img = "https://media1.giphy.com/media/xUOxf0akiVBK6R8jGU/200.gif"
           text = "Congratulations on reaching your milestone!!!"
       }
       return (
           <div>
               <button onClick={this.handleClick}>{buttonText}</button>
               <h1>{displayText}</h1>
               <p>You have logged in {this.state.count2} times.</p>
               <p>You have logged out {this.state.count1} times.</p>
               <img src={img} />
               <p id="text">{text}</p>
           </div>
       )
   }
}
 
export default App
 
