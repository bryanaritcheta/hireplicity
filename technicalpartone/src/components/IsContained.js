import React, { useState } from 'react'

const rand = () => Math.floor(Math.random() * 100) + 1;
const sampleArray = [
    rand(),
    rand(),
    rand(),
    rand(),
    rand()
].sort()

function IsContained() {
    const [number, setNumber] = useState("Input")
    const [contained, numberContained] = useState("number.")

    const isContained = (contained) => {
        contained = parseInt(contained)
        sampleArray.includes(contained) ? contained = "is in the array." : contained = "is not in the array."
        numberContained(contained)
    }

    return (
        <div
            id="section-is-contained"
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
                    Function to see if a number is contained within a sorted array.
                </h2>
                <div>
                    <h3
                        className="
                            text-xl
                            pb-4
                        "
                    >
                        Sample array: [
                        {sampleArray.map((n) => (
                            <span
                                className="sampleArrayItem"
                                key={n * Math.random() * Math.random()}>
                                {n}
                            </span>
                        ))}
                        ]
                    </h3>
                </div>
                <p
                    className="
                        pb-4
                    "
                >
                    {number} <span className="font-bold">{contained}</span>
                </p>
                <form>
                    <label>Enter number: </label>
                    <input
                        className="
                            border
                        "
                        type="number"
                        onChange={(e) => {
                            setNumber(e.target.value);
                            isContained(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default IsContained