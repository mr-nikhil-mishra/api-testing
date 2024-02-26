import axios from "axios"
import {URLSearchParams} from "url"

export async function translateController(req, res) {
  const text = req.body.text;

  if(!text) {
    return res.status(404).json({message: "Text payload is not provided"})
  }

  const encodedParams = new URLSearchParams()

  encodedParams.set("source_language", "en");
  encodedParams.set("target_language", "fr");
  encodedParams.set("text", text);

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {

    const response = await axios.request(options)

    res.status(200).json({translation: response.data.data.translatedText})


  } catch (error) {
    res.status(500).send("Translation failed")
    console.log(error);
  }
}
