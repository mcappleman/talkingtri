import { getMorePosts, populateArticles } from "/assets/js/postList.js";

let postListLength = 5;

const postList = getMorePosts([], postListLength);

populateArticles(postList);
