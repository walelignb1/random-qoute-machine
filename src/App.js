import React, { useEffect, useState } from "react"
import "./App.css"
import {FaQuoteLeft,FaTwitter,FaTumblr} from "react-icons/fa";
import Color from "./Color.js"


let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const App = () => {
  const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.")
  const [author,setAuthor] = useState("Kevin Kruse")
  const [quotesArray, setQuotesArray] = useState([])
  const [bgColor, setBgColor] = useState('#')
  
  const fetchQuote = async () => {
  
    try {
      const response = await fetch(url)
      const NewQuotes = await response.json()
      setQuotesArray(NewQuotes.quotes)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchQuote()
  }, [])

  function getRandomQuote(){
    const randomNumber = Math.floor(Math.random() * 102)
    setBgColor(Color[randomNumber])
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
    console.log(randomNumber)
  }

  return (
    <div className="main" style={{backgroundColor: bgColor}}>
      <div id="wrapper">
          <div id="quote-box" >
            <div className="quote-text" Style="opacity: 1;">
            <FaQuoteLeft  style={{color: bgColor}}/>  <span id="text" style={{color: bgColor}}>{quote}</span>
            </div>
            <div className="quote-author" Style="opacity: 1;">- <span id="author" style={{color: bgColor}}>{author}</span></div>
            <div className="buttons">
              <a className="button btn" id="tweet-quote" style={{backgroundColor: bgColor}} title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22I%20didn%E2%80%99t%20fail%20the%20test.%20I%20just%20found%20100%20ways%20to%20do%20it%20wrong.%22%20Benjamin%20Franklin" >
                <FaTwitter fontSize={23} className="icons"/>
              </a>
              <a className="button btn" id="tumblr-quote" style={{backgroundColor: bgColor}} title="Post this quote on tumblr!" target="_blank" rel="noreferrer"  href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Benjamin%20Franklin&amp;content=I%20didn%E2%80%99t%20fail%20the%20test.%20I%20just%20found%20100%20ways%20to%20do%20it%20wrong.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
                  <FaTumblr fontSize={23}  className="icons"/>
              </a>
              <button className="button nbtn" id="new-quote" style={{backgroundColor: bgColor}} onClick={()=>getRandomQuote()}>New quote</button>
            </div>
          </div>
          <div className="footer">by <a href="https://codepen.io/hezag/">hezag</a></div>
        </div>
    </div>
  )
}

export default App
