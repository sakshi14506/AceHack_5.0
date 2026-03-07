import { useLocation } from "react-router-dom";

function TrendPage(){

const location = useLocation();
const { place } = location.state || {};

return(

```
<div className="max-w-4xl mx-auto p-10">

  <h1 className="text-3xl font-bold">
    🔥 Trending Destination: {place}
  </h1>

  <p className="text-gray-600 mt-4">
    Travelers are currently exploring {place}.
  </p>

</div>
```

)

}

export default TrendPage;
