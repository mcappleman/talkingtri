import data from "../posts.json";
const posts = data.posts;

export function getMorePosts(postList, length, filter) {
  console.log(data);
  const startingId = postList.length > 0 ? postList[postList.length - 1].id : 1;
  for (let i = startingId - 1; i < posts.length; i++) {
    let post = posts[i];
    console.log(post);
    console.log(filter);
    if (filter) {
      if (!post.tags.includes(filter)) continue;
    }
    postList.push(post);
    if (postList.length === length) break;
  }
  return postList;
}

function getArticleHtml(post) {
  return `
    <article class="position-relative">
      <h2 class="blog-post-title">
        ${post.title}
      </h2>
      <p class="blog-post-meta">${post.publishedAt}</p>
      <p class="text-truncate">
        ${post.introduction}
      </p>
      <a href="${post.link}" class="stretched-link">Continue reading</a>
    </article>
    <hr />
  `;
}

export function populateArticles(postList) {
  const articles = document.getElementById("articles");
  let articlesHtml = "";
  postList.forEach((post) => {
    articlesHtml = articlesHtml + `${getArticleHtml(post)}\n`;
  });
  articles.innerHTML = articlesHtml;
}
