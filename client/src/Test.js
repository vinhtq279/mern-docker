import React from 'react';

const Test = () => {
    return(
        <>
        <form action='http://172.24.104.83:5000/submit-student-data' method='post'>
            <input type="text" name="fisrtName" />
            <input type="text" name="lastName" />
            <input type="submit">POST</input>
        </form>
        </>
    )
};

export default Test;