const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/pancakes.jpg" alt="Pancake"/>
        </div>
        <div>
          Photo by <a href="https://unsplash.com/@derlinden?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">None Other</a> on <a href="https://unsplash.com/photos/pancakes-on-plate-beside-fork-1aV-dbXWoiM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        <a href="/places">
          <button className="btn btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
