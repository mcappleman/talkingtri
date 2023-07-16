const posts = [
  {
    id: 1,
    title: "The Coke Fuel: Why Endurance Athletes Consume Coke During a Race",
    introduction:
      "Endurance athletes push their bodies to the limit, conquering miles upon miles in their quest for peak performance. Fueling their bodies effectively becomes crucial during these grueling events, and surprisingly, one beverage that has gained popularity among athletes is Coca-Cola, or simply Coke. While it may seem counterintuitive to consume a sugary carbonated drink during intense physical activity, there are specific reasons why endurance athletes have embraced Coke as a secret weapon to power them through races. In this article, we'll explore the science behind why athletes turn to Coke for a quick boost during a race.",
    link: "/nutrition/the_coke_fuel.html",
    tags: ["Nutrition"],
    publishedAt: "July 7th, 2023",
  },
];

export function getMorePosts(postList, length, filter) {
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
