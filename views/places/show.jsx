const React = require('react')
const Def = require('../default')

function show ({place}) {
    return (
        <Def>
          <main className='container'>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={place.pic} alt={place.name}/>
                </div>
                <div className='col'>
                    <h1>{place.name}</h1>
                    <p>{place.cuisines}</p>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

