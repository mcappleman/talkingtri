console.log("Hello World!");
import { getMorePosts, populateArticles } from "/assets/js/postList.js";

let postListLength = 5;

console.log(`postListLength: ${postListLength}`);
const postList = getMorePosts([], postListLength);

console.log("postList", postList);
populateArticles(postList);
console.log("End of File");
