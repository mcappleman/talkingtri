import {
  getMorePosts,
  getMainFeature,
  populateArticles,
  populateSecondaryFeatureArticles,
} from "/assets/js/postList.js";

let postListLength = 5;

const postList = getMorePosts([], postListLength);

populateArticles(postList);
getMainFeature(3);
populateSecondaryFeatureArticles(3, 2);
