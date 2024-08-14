const OpenAI = require('openai');
const dotenv = require('dotenv').config();
const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY}); 

const generateResult = async(req,res) => {

    try {
    const youtubeSearchString = req.body.youtube.join(',');
    console.log("YouTube Search String:", youtubeSearchString);
  
    async function main1(prompt, values) {
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": prompt + values + " but I want your response to be just the thing that I am interested in the most, in just a word or two without introduction" },
          ],
          model: "gpt-3.5-turbo",
        });
        return completion;
      } catch (error) {
        console.error("Error in OpenAI API call:", error);
        throw error;
      }
    }




  
    const youtube = await main1("Based on my YouTube Search History, tell me what I am interested in: ", youtubeSearchString);
    const browser = await main1("Based on my Browser Search History, tell me what I am interested in: ", req.body.browser.join(','));
    const bookmarks = await main1("Based on my Bookmarks, tell me what I am interested in: ", req.body.bookmarks.join(','));
    const favouriteMovie = await main1("Based on my Favourite Movie, tell me what are the main personality characteristics of the main character in that movie: ", req.body.movie);
    const books = await main1("Based on Books I read cover to cover, tell me what I am interested in: ", req.body.books.join(','));
    const talkAbout = await main1("Based on what I talk about all the time, tell me what I am interested in: ", req.body.talk);
    const spendMoney = await main1("Based on what I spend money on, tell me what I am interested in: ", req.body.money.join(','));
  

    async function result() {
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": `if my youtube search is about: ${youtube.choices[0].message.content}, browser search about ${browser.choices[0].message.content}, bookmarks about ${bookmarks.choices[0].message.content}, my characteristcs are ${favouriteMovie.choices[0].message.content} my favorite books are about ${books.choices[0].message.content}, i talk about ${talkAbout.choices[0].message.content} and spand money on ${spendMoney.choices[0].message.content} tell me which business will be best for me, just give me the business that will suit me, give me some wasy i could do that, and some explanation` },
          ],
          model: "gpt-3.5-turbo",
        });
        return completion;
      } catch (error) {
        console.error("Error in OpenAI API call:", error);
        throw error;
      }
    }

    const resultData = await result();

    console.log(youtube, browser, bookmarks, favouriteMovie, books, talkAbout, spendMoney);



  
    res.json(resultData.choices[0].message.content);
  } catch (error) {
    console.error("Error in processing request:", error);
    res.status(500).json({ message: error.message });
  }



}

module.exports = generateResult;