const React = require("react");
const Def = require("../default");

function show({ place }) {
  const cuisinesBadges = place.cuisines.split(",").map((cuisine) => {
    return <span key = {cuisine} className="badge text-bg-info me-2">{cuisine}</span>;
  });
  return (
    <Def>
      <main className="container">
        <div className="row align-items-start">
          <div className="col">
            <img src={place.pic} alt={place.name} />
          </div>
          <div className="col">
            <h1>{place.name}</h1>
            <p>
              {place.city}, {place.state}
            </p>
            <p>{cuisinesBadges}</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
