let footer = document.getElementById("footer");
let now = new Date();
footer.classList.add("blog-footer")

footer.innerHTML = `
<div class="container">
  <p>
    <a href="https://twitter.com/">@talkingtri</a>
  </p>
  <p>&copy; <span>${now.getFullYear()}</span> - talkingtri</p>
</div>
`;