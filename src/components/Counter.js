import React, { useState, useEffect } from 'react';

function Counter() {
    // State variable to hold the count value
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Retrieve the stored count from localStorage
        const storedCount = localStorage.getItem('pageVisits');
        // Parse it as a number, or use 0 if it's not available
        const initialCount = Number(storedCount) || 0;
        // Increment the count by 1
        const newCount = initialCount + 1;
        // Update the state with the new count
        setCount(newCount);
        // Store the new count back into localStorage
        localStorage.setItem('pageVisits', newCount.toString());
    }, []);

    return (
        <div>
            {/* Display the count with some Tailwind CSS classes for styling */}
            <h1 className='counter'>Page Visits: {count}</h1>
        </div>
    );
}

export default Counter;
