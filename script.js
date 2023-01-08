var body = document.querySelector("body");
body.style.backgroundImage = "url('./background.jpg')";
body.style.height = "100vh";
body.style.backgroundSize = "cover";

// *structure
const container = document.createElement("div");
const row = document.createElement("div");
const column = document.createElement("div");
const formContainer = document.createElement("div");

container.classList.add("container", "vh-100", "p-5");
row.classList.add("row", "justify-content-center", "my-5");
column.classList.add("col-5");
formContainer.setAttribute("id", "formContainer");
formContainer.classList.add("p-5", "text-center", "d-flex", "align-items-center", "flex-column", "mt-5");
formContainer.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
formContainer.style.height = "50vh";


body.appendChild(container);
container.appendChild(row);
row.appendChild(column);
column.appendChild(formContainer);

// *creating element
const heading = document.createElement("h1");
const text = document.createTextNode("Login");
heading.appendChild(text);
const inputTag = document.createElement("input");
const password = document.createElement("input");
const submitBtn = document.createElement("button")
const submitBtnTxt = document.createTextNode("Login") 
submitBtn.appendChild(submitBtnTxt);

// setting class and attribute
heading.classList.add("text-center", "mb-5");
inputTag.classList.add("form-control", "mb-3");
password.classList.add("form-control", "mb-3");
submitBtn.classList.add("btn", "btn-success");
heading.style.color = "white";
inputTag.style.width = "80%";
password.style.width = "80%";

Object.assign(inputTag, {
  placeholder: "Enter an Email",
  type: "email",
});

Object.assign(password, {
  placeholder: "Enter an Password",
  type: "password",
});

formContainer.appendChild(heading);
formContainer.appendChild(inputTag);
formContainer.appendChild(password);
formContainer.appendChild(submitBtn)
