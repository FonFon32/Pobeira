document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('image', document.getElementById('image').files[0]);

    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('Success:', data);
            alert('User registered successfully!');
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});
