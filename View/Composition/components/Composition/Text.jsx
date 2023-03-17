 
 export default function Text({addEmoji,addBraket}) {
   let text = "I am  JavaScript Language";

   if (addEmoji) {
     text = addEmoji(text,'😁')
   }
   if (addBraket) {
     text = addBraket(text)
   }
   return (
     <>   
       {text}
     </>
   )
 }