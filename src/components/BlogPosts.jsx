import React from "react";
import "../styles/BlogPosts.scss";

const BlogPosts = () => {
  
  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

  return (
    <div>
      <div id="blog-list"></div>
    </div>
  );
};

export default BlogPosts;
