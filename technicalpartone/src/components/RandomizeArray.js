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
        <div
            id="section-randomize-array"
            className="
                py-32
                bg-purple-100
            "
        >
            <div
                className="
                    max-w-screen-lg
                    mx-auto
                "
            >
                <h2
                    className="
                        font-bold
                        text-2xl
                        py-4
                    "
                >
                    Randomize an array.
                </h2>
                <div>
                    <h3
                        className="
                            text-xl
                            pb-4
                        "
                    >
                        Array: [
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
                    className="
                        bg-purple-500
                        py-2
                        px-4
                        text-white
                        font-bold
                        uppercase
                    "
                >
                    Randomize
                </button>
            </div>
        </div>
    )
}

export default RandomizeArray