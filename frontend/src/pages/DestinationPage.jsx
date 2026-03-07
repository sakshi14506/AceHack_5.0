import { useLocation } from "react-router-dom";

function DestinationPage() {

const location = useLocation();
const { destination } = location.state || {};

return (

```
<div className="max-w-5xl mx-auto p-10">

  <h1 className="text-4xl font-bold mb-6">
    Explore {destination}
  </h1>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white shadow rounded-xl p-6">
      🏝 Top Attractions
    </div>

    <div className="bg-white shadow rounded-xl p-6">
      🍜 Best Food Places
    </div>

    <div className="bg-white shadow rounded-xl p-6">
      📸 Hidden Gems
    </div>

  </div>

</div>
```

);
}

export default DestinationPage;
