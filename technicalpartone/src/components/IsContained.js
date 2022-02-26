import React, { useState } from 'react'

const sampleArray = [
    Math.floor((Math.random() * 100) + 1),
    Math.floor((Math.random() * 100) + 1),
    Math.floor((Math.random() * 100) + 1),
    Math.floor((Math.random() * 100) + 1),
    Math.floor((Math.random() * 100) + 1)
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
        <div id="section-is-contained">
            <h2>Function to see if a number is contained within a sorted array.</h2>
            <div>
                <h3>Sample array: [
                    {sampleArray.map((n) => (
                        <span className="sampleArrayItem" key={n}>{n}</span>
                    ))}
                    ]
                </h3>
            </div>
            <p>{number} {contained}</p>
            <form>
                <label>Enter number: </label>
                <input
                    type="number"
                    onChange={(e) => {
                        setNumber(e.target.value);
                        isContained(e.target.value);
                    }}
                />
            </form>
        </div>
    )
}

export default IsContained