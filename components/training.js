import { getMorePosts, populateArticles } from "/assets/js/postList.js";
import { buildBreadcrumbs } from "/assets/js/breadcrumb.js";

const subpageName = "Training";
let breadcrumbs = [
  { name: "Home", link: "/" },
  { name: "Training", link: "/training" },
];
buildBreadcrumbs(breadcrumbs);

let postListLength = 5;

const postList = getMorePosts([], postListLength, subpageName);

populateArticles(postList);
