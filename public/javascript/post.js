document
  .querySelector("#create-new-post")
  .addEventListener("click", createPostHandler);
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}