import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import wilson from "../../../images/team3.jpg";
import aliza from "../../../images/aliza.png";
import wilson2 from "../../../images/wilson.png";
import "./Blogs.css";

const blogData = [
  {
    title: "Check the experienced a electrician for you",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Obaidul Kader",
    authorImg: wilson,
    date: "3 Feb 2021",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Sheikh Hasina",
    authorImg: aliza,
    date: "2 April 2021",
  },
  {
    title: "Expedita quos minus repudiandae laborum quis!",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Khaleda Zia",
    authorImg: wilson2,
    date: "23 May 2021",
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
