import React from "react"
//This Is not The main code but this is something like this to access the object in an array and render them
//Dynamicly There is some words in my journal but i will right more as comments here
const books =[
    {
        img : "#",
        title : "World Of Warcraft",
        author : "J.K Simmons"
    }
    ,
    {
        img : "#",
        title : "Lord Of the Rings",
        author : "RollingStones"
    }
]
//A function That Renders Mapped Array
function App(props){
    //The Function That Renders The book for example
    const Book=(props)=>{
        const {img , title , author }=props.book;
        return(
            <section>
                <h1>{title}</h1>
                <h3>{author}</h3>
            </section>
        )
    } 
    {books.map((book)=>{
        const {img, title, author}=book;
        return(
            <Book book={book}></Book>
        )

    })}
    //NOTE : This Isnt The Right Code U have to code On Ubuntu And Fix it
    return(
        null
    )
}
export default App