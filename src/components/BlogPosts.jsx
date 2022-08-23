import React from "react";
import "../styles/BlogPosts.scss";
import Posts from "./Posts.";

const BlogPosts = () => {
  const [allPosts, setAllPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data.slice(0, 5)));
  }, []);

  const postsElements = allPosts.map((post) => {
    return <Posts key={post.id} title={post.title} body={post.body} />;
  });

  const [formData, setFormData] = React.useState({
    title: "",
    body: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitToApi(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
      .then((res) => res.json())
      .then((post) => {
        allPosts.unshift(post);
        console.log(allPosts);
      });
  }

  let form = document.getElementById("new-post")

  function handleSubmit(event) {
    event.preventDefault();
    submitToApi(formData);
  }

  return (
    <div>
      <div className="division"></div>
      <nav className="blog-navbar">
        <h3>BlogSpace</h3>
      </nav>
      <form onSubmit={handleSubmit} className="new-post" id="new-post">
        <label htmlFor="new-title">Title: </label>
        <input
          id="new-title"
          type="text"
          onChange={handleChange}
          name="title"
          value={formData.title}
        />
        <label htmlFor="new-body">Body: </label>
        <textarea
          id="new-body"
          onChange={handleChange}
          name="body"
          value={formData.body}
        />
        <button className="post-btn">Post</button>
      </form>
      <div id="blog-list">
        {postsElements}
        {console.log("postsElements")}
      </div>
    </div>
  );
};

export default BlogPosts;

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
//         let html = ""
//         for (let post of postsArr) {
//             html += `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr />
//             `
//         }
//         document.getElementById("blog-list").innerHTML = html
//     })

// document.getElementById("new-post").addEventListener("submit", function(e) {
//     e.preventDefault()
//     const postTitle = document.getElementById("post-title").value
//     const postBody = document.getElementById("post-body").value
//     const data = {
//         title: postTitle,
//         body: postBody
//     }

//     const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }

//     fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
//         .then(res => res.json())
//         .then(post => {
//             document.getElementById("blog-list").innerHTML = `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr />
//                 ${document.getElementById("blog-list").innerHTML}
//             `
//         })
// })
