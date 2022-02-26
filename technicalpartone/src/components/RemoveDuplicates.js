import React, { useState } from 'react'

const rand = () => Math.floor(Math.random() * 10) + 1;
var sampleArray = [
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

function RemoveDuplicates() {
    const samplearray = sampleArray

    const [samplearraynew, arrayRandom] = useState(new Array(1))

    const removeDuplicate = (samplearraynew) => {
        samplearraynew = samplearraynew.filter(function (x, i, a) {
            return a.indexOf(x) === i
        })
        arrayRandom(samplearraynew)
    }

    return (
        <div id="section-remove-duplicate">
            <div className="original-array">
                <h3>Original array: [
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
            <div className="filtered-array">
                <h3>Filtered array: [
                    {samplearraynew.map((n) => (
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
                onClick={() => removeDuplicate(sampleArray)}
            >
                Remove duplicates
            </button>
        </div>
    )
}

export default RemoveDuplicates