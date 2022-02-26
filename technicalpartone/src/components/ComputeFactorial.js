import React, { useState } from 'react'

function ComputeFactorial() {
    function computeFactorial(num) {
        if (num < 2) return 1
        return num *= computeFactorial(num - 1)
    }

    //console.log(computeFactorial(5));

    const [number, setNumber] = useState("");

    const updateNumber = (number) => {
        number = computeFactorial(number)
        setNumber(number)
    }

    return (
        <div id="section-compute-factorial">
            <h2>Function to compute the factorial of a given number.</h2>
            <h3>Factorial is {number}</h3>
            <form>
                <label>Enter number: </label>
                <input type="number"
                    onChange={(e) => updateNumber(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ComputeFactorial