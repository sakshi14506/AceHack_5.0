import { useNavigate } from "react-router-dom";

const luxury = [

{
name:"Maldives",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
},

{
name:"Switzerland",
image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
},

{
name:"Bali",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
},

{
name:"Dubai",
image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
}

];

function LuxuryDestinations(){

const navigate = useNavigate()

return(

<div className="mt-20">

<h2 className="text-2xl font-bold mb-6">
✨ Luxury Destinations
</h2>

<div className="grid md:grid-cols-4 gap-6">

{luxury.map((d,i)=>(
<div
key={i}
onClick={()=>navigate("/planner",{state:{destination:d.name}})}
className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
>

<img
src={d.image}
className="h-48 w-full object-cover"
/>

<div className="p-4 font-semibold">
{d.name}
</div>

</div>
))}

</div>

</div>

)

}

export default LuxuryDestinations