import "./App.css";
import Sajol from "./components/Sajol";
import Vison from "./components/vison";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ApiExt></ApiExt>
    </div>
  );
}

function ApiExt() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setBlog(data));
    },
    []);

  //handle data ,getting from API

  return (
    <div>
      <h2>BLOG</h2>
      {blog.map(value => <Post title={value.title} body={value.body}></Post>)}
    </div>
  );
}

const Post = (props) => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Title: {props.title}</h1>
      <p style={{
        width: '400px',
        margin: '1px solid black',
        backgroundColor: 'cyan',
        textAlign:'center'
      }}> {props.body}</p>
    </div>
  );
};

export default App;
