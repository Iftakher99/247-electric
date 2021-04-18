import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import wilson from "../../../images/wilson.png";
import "./Blogs.css";

const blogData = [
  {
    title: "Check the experienced a electrician for you",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Tom",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Expedita quos minus repudiandae laborum quis!",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
];

const Blogs = () => {
  return (
    <section className='blogs my-5'>
      <div className='container '>
        <div className='section-header text-center '>
          <h5 className='text-primary text-uppercase'>our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className='card-deck  row  mt-5'>
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
