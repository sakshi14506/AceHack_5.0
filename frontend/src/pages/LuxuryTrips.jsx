import { useLocation } from "react-router-dom";

function LuxuryTrips(){

const location = useLocation();
const { destination } = location.state || {};

return(

```
<div className="max-w-5xl mx-auto p-10">

  <h1 className="text-4xl font-bold">
    Luxury Experiences in {destination}
  </h1>

  <p className="text-gray-600 mt-4">
    Discover premium resorts, private tours and luxury experiences.
  </p>

</div>
```

)

}

export default LuxuryTrips;
