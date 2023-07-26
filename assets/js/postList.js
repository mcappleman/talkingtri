function getArticleById(id) {
  return posts.find((article) => article.id === id);
}

function getArticleHtml(post) {
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

function getTags(tags) {
  let tagHtml = "";
  tags.forEach((tag) => {
    tagHtml += `<strong class="d-inline-block mb-2 text-primary">${tag}</strong>`;
  });
  return tagHtml;
}

function getSecondaryFeature(post) {
  return `
    <div class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          ${getTags(post.tags)}
          <h3 class="mb-0 text-truncate text-truncate--2">${post.title}</h3>
          <div class="mb-1 text-muted">${
            post.publishedAt
          } <span class="disqus-comment-count" data-disqus-identifier="${
    post.disqusIdentifier
  }"></span>
  </div>
          <p class="card-text mb-auto text-truncate text-truncate--2">
            ${post.introduction}
          </p>
          <a href="${post.link}" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="secondary-feature-thumbnail" src="${
            post.thumbnailImage
          }" />
        </div>
      </div>
    </div>
  `;
}

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
  const post = getArticleById(id);
  const mainFeature = document.getElementById("main-feature");
  mainFeature.innerHTML = `
    <div class="p-4 p-md-5 mb-4 text-white bg bg-dark position-relative" style="background-image: url(${window.location.origin}${post.bannerImage}); background-position: center;">
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

export function populateSecondaryFeatureArticles(id1, id2) {
  const post1 = getArticleById(id1);
  const post2 = getArticleById(id2);
  const secondaryFeatures = document.getElementById("secondary-features");
  let secondaryFeaturesHtml = `<div class="row mb-2">`;
  secondaryFeaturesHtml += getSecondaryFeature(post1);
  secondaryFeaturesHtml += getSecondaryFeature(post2);
  secondaryFeaturesHtml += `</div>`;
  secondaryFeatures.innerHTML = secondaryFeaturesHtml;
}

export function populateArticles(postList) {
  const articles = document.getElementById("articles");
  let articlesHtml = "";
  postList.forEach((post) => {
    articlesHtml += `${getArticleHtml(post)}\n`;
  });
  articles.innerHTML = articlesHtml;
}

const posts = [
  {
    id: 3,
    title: "PTO US Open 2023 Preview",
    introduction:
      "The next big PTO race is upon us and it is truly bringing out the best of the best. I am very excited to watch this race unfold. I believe that this will be the biggest and best race of the year. The PTO was wise to combine this event with the USAT Nationals race to ensure there would be many fans from around the USA there. It should be a fun one, just check out the trailer below.",
    link: "/racing/pto-us-open-2023-preview.html",
    disqusIdentifier: "pto-us-open-2023-preview",
    tags: ["Racing"],
    publishedAt: "July 26th, 2023",
    thumbnailImage: "/assets/images/mark-rohan-milwaukee-square.jpg",
    bannerImage: "/assets/images/pto-us-open-2023-rectangle.jpg",
  },
  {
    id: 2,
    title: "Training Motivation: My Top 7 YouTube Channels (2023)",
    introduction:
      "Sometimes training is fun and rewarding, but other times it is daunting. In those daunting times, doing a training session can be one of the last things that I want to do. It just seems awful. Do I really want to push myself that hard? I could just continue to happily scroll through my phone or get a couple extra hours of sleep. Which if you have a full time job and kids at home, those extra hours of sleep are all the more tempting. One of the easiest ways that I have found to find motivation is to take a step back and enjoy a YouTube video. I find that once the video has ended, I cannot wait to tackle the training session that I have on my calendar. I start to remind myself of the bigger picture and can get myself out of my current wallowing and yearning for instant gratification. So here is a list of my go to triathlon related YouTube channels to give me that extra boost I need.",
    link: "/training/top-tri-youtube-2023.html",
    disqusIdentifier: "top-tri-youtube-2023",
    tags: ["Training"],
    publishedAt: "July 24th, 2023",
    thumbnailImage: "/assets/images/alexander-shatov-youtube-square.jpg",
    bannerImage: "/assets/images/christian-wiediger-youtube-rectangle.jpg",
  },
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
