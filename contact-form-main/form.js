const redBorder = document.querySelectorAll(".red-border");
const submit = document.querySelector("button");
const radio = document.querySelectorAll('input[name="query-type"]');
const QueryErrrorMessage = document.querySelector(
  ".queryType-container p:nth-child(3)"
);
const textAreaErrorMessage = document.querySelector(".message-container p");

const textArea = document.querySelector("textarea");
const consentCheck = document.querySelector(".consentInput");
const consentCheckErrorMessage = document.querySelector(".consent-container p");

const paragraphs = document.querySelector("p");
const textInputs = document.querySelectorAll(".text_input");

console.log(paragraphs);

// console.log(paragraphs.parentElement);

// console.log(radio);

// console.log(Array.from(radio)[0]);

submit.addEventListener("click", function () {
  // console.log(paragraphs.parentNode.querySelector("input"));

  // console.log(Inputs);

  Array.from(textInputs)
    .filter((input) => input.value === "")
    .map((input) => (input.nextElementSibling.style.color = "red"));
  // .map((input) => console.log(input.parentNode.querySelector("input")));
  // .map((p) => (p.style.color = "red"));
  //   console.log(inputCheck);

  Array.from(redBorder)
    .filter((input) => {
      return input.value === "";
    })
    .map((input) => {
      return (input.style.border = "1px solid red");
    });
  //   if (radio.checked) {
  //     console.log(`Selected value: ${radio.value}`);
  //   } else {
  //
  //   }
  let checkedRadio = Array.from(radio).filter((query) => {
    return query.checked;
  });
  const [a] = checkedRadio;
  console.log(a);
  if (a) {
    console.log(`Selected value: ${a.value}`);
  } else {
    QueryErrrorMessage.style.color = "red";
  }
  if (textArea.value) {
    console.log(`${textArea.value}`);
  } else {
    textAreaErrorMessage.style.color = "red";
  }

  if (consentCheck.checked) {
    console.log("Checkbox is checked");
  } else {
    consentCheckErrorMessage.style.color = "red";
  }
});
