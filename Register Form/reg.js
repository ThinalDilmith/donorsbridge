<script>
const form = document.getElementById('registrationForm');
const loader = document.getElementById('loader');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    loader.style.display = 'block'; // Show loader
    setTimeout(() => {
        form.submit(); // Simulate form submission
    }, 2000); // Simulate a delay
});
</script>