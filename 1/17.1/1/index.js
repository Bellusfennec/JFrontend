const renderPost = async (postId) => {
  try {
    const responsePost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const resultPost = await responsePost.json();
    const postList = document.querySelector("#post-list");
    postList.insertAdjacentHTML(
      "beforeend",
      `
      <div id="post" class="post">
        <h1 class="post__title">${resultPost.title}</h1>
        <p class="post__text">${resultPost.body}</p>
        <b class="post__comments-text">Комментарии</b>
        <div class="post__comments">
        </div>
      </div>
      `
    );

    const responseComments = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const resultComments = await responseComments.json();
    const postComments = document.querySelector(".post__comments");
    resultComments.forEach((comment) => {
      postComments.insertAdjacentHTML(
        "beforeend",
        `
        <div class="post-comment">
          <span class="post-comment__author">${comment.email}</span>
          <span class="post-comment__text">
          ${comment.body}
          </span>
        </div>
        `
      );
    });
  } catch (error) {
    console.error(error);
  }
};

renderPost(3);
