import React, { useState } from 'react'

function RegularExpression() {
    const [valid, isValid] = useState("date.")

    const checkDate = (valid) => {
        var regex = /[0-1]{1}(\d{1})?\/[0-3]{1}(\d{1})?\/\d{4}$/
        valid = regex.test(valid) ? valid = "is valid." : valid = "is not valid."
        isValid(valid)
    }

    return (
        <div id="section-regular-expression">
            <h2>Regular expression for multiple date formats.</h2>
            <p>Input {valid}</p>
            <form>
                <label>Enter date: </label>
                <input
                    type="text"
                    onChange={(e) => checkDate(e.target.value)}
                />
            </form>
        </div>
    )
}

export default RegularExpression