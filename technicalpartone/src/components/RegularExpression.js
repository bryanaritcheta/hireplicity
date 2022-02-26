import React, { useState } from 'react'

function RegularExpression() {
    const [valid, isValid] = useState("date.")

    const checkDate = (valid) => {
        var regex = /[0-1]{1}(\d{1})?\/[0-3]{1}(\d{1})?\/\d{4}$/
        valid = regex.test(valid) ? valid = "is valid." : valid = "is not valid."
        isValid(valid)
    }

    return (
        <div
            id="section-regular-expression"
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
                    Regular expression for multiple date formats.
                </h2>
                <p
                    className="
                        pb-4
                    "
                >
                    Input <span className="font-bold">{valid}</span>
                </p>
                <form>
                    <label>Enter date: </label>
                    <input
                        type="text"
                        onChange={(e) => checkDate(e.target.value)}
                        className="
                            border
                        "
                    />
                </form>
            </div>
        </div>
    )
}

export default RegularExpression