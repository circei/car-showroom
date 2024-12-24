document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting immediately

    // Simple validation (for demonstration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize and add the map
function initMap() {
    // The location of the showroom (Calea București 138, Brașov, Romania)
    const showroomLocation = { lat: 45.6312, lng: 25.6200 }; // Coordinates for Calea București 138, Brașov, Romania
    // The map, centered at showroomLocation
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: showroomLocation,
    });
    // The marker, positioned at showroomLocation
    const marker = new google.maps.Marker({
        position: showroomLocation,
        map: map,
        title: "Car Showroom",
    });

    // Add click event to open Google Maps with directions
    google.maps.event.addListener(marker, 'click', function() {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${showroomLocation.lat},${showroomLocation.lng}`, '_blank');
    });
}

// Initialize the map when the window loads
window.onload = initMap;
