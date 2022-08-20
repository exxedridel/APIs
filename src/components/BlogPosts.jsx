import React from "react";
import "../styles/BlogPosts.scss";

const BlogPosts = () => {
  const [allPosts, setAllPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data.slice(0, 5)));
  }, []);

  const postsElements = allPosts.map((post) => {
    return (
      <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr />
      </>
    );
  });

  return (
    <div>
      <nav className="blog-navbar">
        <h3>BlogSpace</h3>
      </nav>
      <form className="new-post">
        <label htmlFor="new-title">Title: </label>
        <input id="new-title" type="text" />
        <label htmlFor="new-body">Body: </label>
        <textarea id="new-body" />
        <button>Post</button>
      </form>
      <div id="blog-list">{postsElements}</div>
    </div>
  );
};

export default BlogPosts;
