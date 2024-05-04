import Letter from "./Letter";

export default function LetterGrid({ secretWord, guessed }) {
  let letters = secretWord.split('')
                .map(letter => {
                  let isShown = guessed.indexOf(letter.toLowerCase()) > -1;
                  return(<Letter value={ letter } isShown={isShown}/>);
                });
  return <div className="flex"> { letters } </div>
}