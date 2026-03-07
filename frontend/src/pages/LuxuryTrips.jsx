import { useLocation } from "react-router-dom";

function LuxuryTrips(){

const location = useLocation();
const { destination } = location.state || {};

return(

```
<div className="max-w-5xl mx-auto p-10">

  <h1 className="text-4xl font-bold mb-4">
    Luxury Trips in {destination}
  </h1>

  <p className="text-gray-600">
    Discover premium resorts, luxury experiences and private tours.
  </p>

</div>
```

)

}

export default LuxuryTrips;
