export default function TripStory({destination}){

 const stories = {
  Goa:"Sunsets, beaches and salty air. Goa is where every moment feels like freedom.",
  Paris:"Paris whispers romance in every street, every cafe and every sunset.",
  Bali:"Bali blends spirituality, nature and adventure into a magical escape."
 };

 const story = stories[destination] || 
 "This journey is about discovering new places and unforgettable memories.";

 return(

  <div className="bg-white/10 p-6 rounded-xl">
   <h2 className="text-xl font-bold mb-2">
    AI Trip Story
   </h2>
   <p>{story}</p>
  </div>

 );

}