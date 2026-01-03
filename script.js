function addField() { 
  const input = document.createElement('input'); 
  input.placeholder = 'Extra Field'; 
  document.querySelector('form').appendChild(input); 
}

// LO3: Save form data to localStorage
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert("Form data saved to localStorage!");
});
function addField() { const input = document.createElement('input'); input.placeholder = 'Extra Field'; document.querySelector('form').appendChild(input); }
