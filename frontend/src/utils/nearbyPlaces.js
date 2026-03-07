export function getNearbyPlaces(destination){

 const places={

  Goa:[
   {name:"Baga Beach",type:"Beach"},
   {name:"Fort Aguada",type:"Fort"},
   {name:"Anjuna Market",type:"Shopping"}
  ],

  Paris:[
   {name:"Eiffel Tower",type:"Landmark"},
   {name:"Louvre Museum",type:"Museum"},
   {name:"Montmartre",type:"Street"}
  ],

  Bali:[
   {name:"Ubud",type:"Village"},
   {name:"Tanah Lot Temple",type:"Temple"},
   {name:"Kuta Beach",type:"Beach"}
  ]

 };

 return places[destination] || [
  {name:"City Center",type:"Attraction"},
  {name:"Local Market",type:"Shopping"},
  {name:"Popular Temple",type:"Temple"}
 ];

}