document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('invertedcursor');

    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('invertedcursor');
        // Include the scroll offset in the position calculation
        const adjustedX = e.clientX + window.scrollX;
        const adjustedY = e.clientY + window.scrollY;
        cursor.style.left = `${adjustedX}px`;
        cursor.style.top = `${adjustedY}px`;
    });

    // Change cursor appearance on hover over links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.background = 'gray'; // Example modification
            cursor.style.boxShadow = '0 0 20px 20px rgba(128,128,128)'; // Example modification
            
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.background = 'white'; // Reverting modification
            cursor.style.boxShadow = '0 0 40px 40px rgba(255,255,255,1)'; // Original style
        });
    });
});