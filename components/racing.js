import { getMorePosts, populateArticles } from "/assets/js/postList.js";
import { buildBreadcrumbs } from "/assets/js/breadcrumb.js";

const subpageName = "Racing";
let breadcrumbs = [
  { name: "Home", link: "/" },
  { name: "Racing", link: "/racing" },
];
buildBreadcrumbs(breadcrumbs);

let postListLength = 5;

const postList = getMorePosts([], postListLength, subpageName);

populateArticles(postList);
