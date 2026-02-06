import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover_pic,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div>
      <h2 className="text-4xl">{title}</h2>
      <img src={cover_pic} alt={`Cover picture of the title${title}`} />

      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx} className="mr-2">
            <a href="#" className="text-blue-500 hover:underline">
              {hash}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
