import { useLocation } from "react-router-dom";

function TravelStories(){

const location = useLocation();
const { place, user } = location.state || {};

return(

```
<div className="max-w-4xl mx-auto p-10">

  <h1 className="text-3xl font-bold mb-4">
    @{user}'s Trip to {place}
  </h1>

  <p className="text-gray-600">
    A travel story shared by the community.
  </p>

</div>
```

)

}

export default TravelStories;
