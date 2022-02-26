import React, { useState } from 'react'
const rand = () => Math.floor(Math.random() * 100) + 1;

const sampleArray = [
    rand(),
    rand(),
    rand(),
    rand(),
    rand()
]

function RandomizeArray() {
    const [, arrayRandom] = useState(sampleArray.sort((a, b) => 0.5 - Math.random()))

    // const arrayRandomize = (arraytorandomize) => {
    //     arraytorandomize = sampleArray.sort((a, b) => 0.5 - Math.random())
    //     arrayRandom(arraytorandomize)
    // }

    return (
        <div id="section-is-contained">
            <h2>Randomize an array.</h2>
            <div>
                <h3>Randomized array: [
                    {sampleArray.map((n) => (
                        <span className="sampleArrayItem" key={n}>{n}</span>
                    ))}
                    ]
                </h3>
            </div>
            <button
                onClick={arrayRandom}
            >
                Randomize
            </button>

        </div>
    )
}

export default RandomizeArray