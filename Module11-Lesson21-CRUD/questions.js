const elements = {
  container: document.querySelector('.js-list'),
};

serviceGetAll().then((data) =>
  elements.container.insertAdjacentHTML('beforeend', createMarkup(data))
);

// Function GET request to the backend
function serviceGetAll() {
  return fetch('http://127.0.0.1:3000/api/getAll').then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// Markup function
function createMarkup(arr) {
  return arr
    .map(
      ({ name, phone, email, comment, _id }) => ` <li data-question-id="${_id}">
         <ul>
            <li>Name: ${name}</li>
            <li>Phone: ${phone}</li>
            <li>Email: ${email}</li>
         </ul>
         <p>${comment}</p>
      </li>`
    )
    .join('');
}
