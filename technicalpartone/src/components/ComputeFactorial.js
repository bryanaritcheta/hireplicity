import React, { useState } from 'react'

function ComputeFactorial() {
    const [number, setNumber] = useState("Input")
    const [factorial, getFactorial] = useState("number.")

    function computeFactorial(num) {
        if (num < 2) return 1
        return num *= computeFactorial(num - 1)
    }

    const updateNumber = (factorial) => {
        factorial = computeFactorial(factorial)
        getFactorial(factorial)
    }

    return (
        <div
            id="section-compute-factorial"
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
                    Function to compute the factorial of a given number.
                </h2>
                <h3
                    className="
                        text-xl
                        pb-4
                    "
                >
                    {number} <span className="font-bold">{factorial}</span>
                </h3>
                <form>
                    <label>Enter number: </label>
                    <input
                        className="
                            border
                        "
                        type="number"
                        onChange={(e) => {
                            setNumber("Factorial is ");
                            updateNumber(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default ComputeFactorial