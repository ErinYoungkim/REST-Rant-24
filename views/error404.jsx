const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
            <div>
              <img src="/images/404-cat.jpg" alt="Cat"/>
            </div>
            <div>
            Photo by <a href="https://unsplash.com/@miklevasilyev?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mikhail Vasilyev</a> on <a href="https://unsplash.com/photos/brown-scottish-fold-in-brown-thick-pile-blanket-NodtnCsLdTE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404