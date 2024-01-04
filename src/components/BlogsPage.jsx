import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 2,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 3,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 4,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 5,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 6,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
  {
    id: 7,
    title: "Zero Click Account Takeover - Password Overwrite",
    desc: "Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...",
    date: "july 24 2023",
  },
];

const BlogsPage = () => {
  return (
    <div className="row flex-wrap px-10">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};
export default BlogsPage;
