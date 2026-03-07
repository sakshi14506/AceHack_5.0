export default function HiddenGems(){

 const gems=[
  "Secret sunset point",
  "Local street food market",
  "Hidden temple in old town"
 ];

 return(

  <div className="bg-white/10 p-4 rounded-xl">

   <h2 className="font-bold mb-2">
    Hidden Gems
   </h2>

   <ul>

    {gems.map((g,i)=>(
     <li key={i}>✨ {g}</li>
    ))}

   </ul>

  </div>

 );

}