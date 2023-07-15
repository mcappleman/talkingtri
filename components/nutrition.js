import { getMorePosts, populateArticles } from "/assets/js/postList.js";
import { buildBreadcrumbs } from "/assets/js/breadcrumb.js";

const subpageName = "Nutrition";
let breadcrumbs = [
  { name: "Home", link: "/" },
  { name: subpageName, link: "/nutrition" },
];
buildBreadcrumbs(breadcrumbs);
let postListLength = 5;

const postList = getMorePosts([], postListLength, subpageName);

populateArticles(postList);
