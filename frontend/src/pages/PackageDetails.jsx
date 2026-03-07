import { useLocation } from "react-router-dom";

function PackageDetails(){

const location = useLocation();
const { place, price } = location.state || {};

return(

```
<div className="max-w-4xl mx-auto p-10">

  <h1 className="text-3xl font-bold">
    {place} Travel Package
  </h1>

  <p className="text-blue-600 text-xl mt-4 font-semibold">
    Starting at {price}
  </p>

</div>
```

)

}

export default PackageDetails;
