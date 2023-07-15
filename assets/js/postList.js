import data from "../posts.json" assert { type: "json" };
const posts = data.posts;

export function getMorePosts(postList, length, filter) {
  const startingId = postList.length > 0 ? postList[postList.length - 1].id : 1;
  for (let i = startingId - 1; i < posts.length; i++) {
    let post = posts[i];
    if (filter) {
      if (!post.tags.includes(filter)) continue;
    }
    postList.push(post);
    if (postList.length === length) break;
  }
}

function getArticleHtml(post) {
  return `
    <article>
      <h2 class="blog-post-title">
        ${post.title}
      </h2>
      <p class="blog-post-meta">${post.publishedAt}</p>
      <p class="article-intro-description">
        ${post.introduction}
      </p>
      <a href="${post.link}" class="stretched-link">Continue reading</a>
    </article>
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
