const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const subject = e.target[2].value;
  const message = e.target[3].value;

  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message }),
  });

  const data = await response.json();
  if (data.success) {
    alert("Message sent successfully!");
    e.target.reset();
  } else {
    alert("Failed to send message!");
  }
};

export default handleSubmit;
