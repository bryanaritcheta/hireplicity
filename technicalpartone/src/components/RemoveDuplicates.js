import React, { useState } from 'react'

const rand = () => Math.floor(Math.random() * 10) + 1;
var sampleArray = {
    0: rand(),
    1: rand(),
    2: rand(),
    3: rand(),
    4: rand(),
    5: rand(),
    6: rand(),
    7: rand(),
    8: rand(),
    9: rand()
}

function RemoveDuplicates() {
    const samplearray = Object.values(sampleArray)

    const [samplearraynew, arrayFilter] = useState(new Array(1))

    const removeDuplicate = (samplearraynew) => {
        samplearraynew = Object.values(samplearraynew).filter(function (x, i, a) {
            return a.indexOf(x) === i
        })
        arrayFilter(samplearraynew)
    }

    return (
        <div
            id="section-remove-duplicate"
            className="
                py-32
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
                    Remove duplicates from a hash array.
                </h2>
                <div className="original-array">
                    <h3
                        className="
                            text-xl
                            pb-4
                        "
                    >
                        Original array: [
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
                    <h3
                        className="
                            text-xl
                            pb-4
                        "
                    >
                        Filtered array: [
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
                    className="
                        bg-purple-500
                        py-2
                        px-4
                        text-white
                        font-bold
                        uppercase
                    "
                >
                    Remove duplicates
                </button>
            </div>
        </div>
    )
}

export default RemoveDuplicates