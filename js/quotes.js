const quotes = [
    
    {
        quote: "Neymar",
        author: "PSG"
    },
    
    {
        quote: "Casemiro",
        author: "MU"
    },
    
    {
        quote: "Kevin De Bruyne",
        author: "MC"
    },
    
    {
        quote: "De Jong",
        author: "FCB"
    },
    
    {
        quote: "VINI Jr.",
        author: "RMA"
    },
    
    {
        quote: "Mo Salah",
        author: "LIV"
    },
    
    {
        quote: "Kane",
        author: "TOT"
    },
    
    {
        quote: "Leao",
        author: "ACM"
    },
    
    {
        quote: "Bastoni",
        author: "INT"
    },
    
    {
        quote: "Havertz",
        author: "CHE"
    },
    {
        quote: "Koke",
        author: "ATM"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

