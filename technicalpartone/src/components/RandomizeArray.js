import React, { useState } from 'react'
const rand = () => Math.floor(Math.random() * 100) + 1;

const sampleArray = [
    rand(),
    rand(),
    rand(),
    rand(),
    rand(),
    rand(),
    rand(),
    rand(),
    rand(),
    rand()
]

function RandomizeArray() {
    const [samplearray, arrayRandom] = useState(sampleArray)

    const arrayRandomize = (samplearray) => {
        const samplearraynew = samplearray.slice(0).sort((a, b) => 0.5 - Math.random())
        arrayRandom(samplearraynew)
    }

    return (
        <div id="section-randomize-array">
            <h2>Randomize an array.</h2>
            <div>
                <h3>Randomized array: [
                    {samplearray.map((n) => (
                        <span
                            className="sampleArrayItem"
                            key={n * Math.random() * Math.random()}>
                            {n}
                        </span>
                    ))}
                    ]
                </h3>
            </div>
            <button
                onClick={() => arrayRandomize(sampleArray)}
            >
                Randomize
            </button>

        </div>
    )
}

export default RandomizeArray