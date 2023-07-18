const posts = [
  {
    id: 1,
    title: "The Coke Fuel: Why Endurance Athletes Consume Coke During a Race",
    introduction:
      "When you hear the drink Coke, what is it that pops into your head? For me, it’s obesity followed closely by sluggish. Yet whenever I watch someone on YouTube or elsewhere doing an ultra endurance race, I see them drinking cans of Coke at almost every aid station. Which immediately makes me wonder, why? Shouldn’t you be drinking some highly tested and formulated sports drink that is designed for these exact scenarios? Maybe, but a lot of those sports drink mixes can be really hard to consume because they do not taste the best. So let’s dive into some reasons why you might stash a Coke at your next transition.",
    link: "/nutrition/the_coke_fuel.html",
    disqusIdentifier: "the_coke_fuel",
    tags: ["Nutrition"],
    publishedAt: "July 18th, 2023",
    thumbnailImage: "/assets/images/coke-square.jpg",
    bannerImage: "/assets/images/coke-rectangle.jpg",
  },
];

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
  return postList;
}

export function getMainFeature(id) {
  const post = posts.find((article) => article.id === id);
  const mainFeature = document.getElementById("main-feature");
  mainFeature.innerHTML = `
    <div class="p-4 p-md-5 mb-4 text-white bg bg-dark position-relative" style="background-image: url(${window.location.origin}${post.bannerImage})">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">
          ${post.title}
        </h1>
        <p class="lead my-3 text-truncate text-truncate--2">
          ${post.introduction}
        </p>
        <p class="lead mb-0">
          <a href="${post.link}" class="text-white fw-bold stretched-link">Continue reading...</a>
        </p>
      </div>
    </div>
  `;
}

function getArticleHtml(post) {
  console.log(post);
  return `
    <article class="position-relative">
      <h2 class="blog-post-title">
        ${post.title}
      </h2>
      <p class="blog-post-meta">${post.publishedAt} <span class="disqus-comment-count" data-disqus-identifier="${post.disqusIdentifier}"></span></p>
      <p class="text-truncate text-truncate--2">
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
