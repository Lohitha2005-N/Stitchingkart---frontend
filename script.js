// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const category = document.getElementById('category').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  // You can dynamically fetch userId and tailorId when authentication & selection is implemented
  const bookingData = {
    userId: 'dummyUserId123',         // Replace this with actual logged-in userId
    tailorId: 'dummyTailorId456',     // Replace this with selected tailor's ID
    date: date,
    service: service
  };

  fetch('http://localhost:5000/api/bookings/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  })
  .then(res => res.json())
  .then(data => {
    alert(`Booking Confirmed!\nName: ${name}\nCategory: ${category}\nService: ${service}\nDate: ${date}`);
    this.reset();
  })
  .catch(err => {
    console.error('Booking failed:', err);
    alert('Failed to confirm booking. Please try again.');
  });
});

// Contact/Enquiry Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const cname = document.getElementById('cname').value;
  const cemail = document.getElementById('cemail').value;
  const cmessage = document.getElementById('cmessage').value;

  const enquiryData = {
    name: cname,
    email: cemail,
    message: cmessage
  };

  fetch('http://localhost:5000/api/enquiry/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enquiryData)
  })
  .then(res => res.json())
  .then(data => {
    alert(`Thank you ${cname}, your enquiry has been submitted successfully!`);
    this.reset();
  })
  .catch(err => {
    console.error('Enquiry failed:', err);
    alert('Failed to submit enquiry. Please try again.');
  });
});
