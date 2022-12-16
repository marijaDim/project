import { useState } from "react";
import BookCard from "./BookCard";




function Books(){
    const books=[
        {name: "Liquid intelligence",
        id: "liquid-intelligence",
        price: "$19.99",
        img: "/books/liquid-intelligence.jpg",
        description: "Dave Arnold’s philosophy is simple: if you think like a scientist, you can make better drinks. Liquid Intelligence takes readers behind the bar and into the lab, where Arnold tinkers with temperature, carbonation, sugar concentration and acidity in search of new ways to enhance classic cocktails, from bubble formation to the ideal sugar compound for a daiquiri."
    },
    {
        name: "Top 50 Home Bar Cocktails",
        id: "homeBarCoc",
        price: "$17.99",
        img: "/books/homeBar.jpg",
        description: "The Top 50 Home Bar Cocktails has been created for you to begin or enhance your cocktail making journey. How awesome is it that you can now make these delicious concoctions at home? With the skills and confidence you develop, we hope you might even invent your own cocktail!"
    },
    {
        name: "Make me a cocktail at Christmas",
        id: "coc_at_christmas",
        price: "$18.99",
        img: "/books/chr_book.jpg",
        description: "Do you need a little inspiration to turn your uninspiring drinks cupboard into a creative crypt of impressive and indulgent festive cocktails? Order our new Make Me A Cocktail at Christmas Cocktail book to spruce up those Christmas celebrations! "
    },
    {
        name: "Tiki",
        id: "tiki",
        price: "$21.99",
        img: "/books/tiki.jpg",
        description: "Tiki is the endless summer, an instant vacation, a sweet and colourful ticket to paradise with no baggage fees.In Tiki, Brooklyn-based rum expert Shannon Mustipher brings focus on refreshing flavours, fine spirits, and high-impact easy-to-execute presentation. Dozens of easy-to-follow recipes present new versions of classic tiki drinks along with original cocktails using quality rums, infused and fat-washed spirits, liqueurs, fresh fruit juices, and homemade syrups."
    }    
];


return(
    <div className="books-list">
        {books.map((book)=>(
            <BookCard key={book.id} name={book.name} img={book.img}price={book.price} description={book.description}/>
        ))}
    </div>
)

        }
export default Books;