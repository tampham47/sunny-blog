import React from "react";
import { Link } from 'gatsby'
import s from "./PostItem.module.css";

const PostItem = class extends React.PureComponent {
  render() {
    const { post } = this.props;
    return (
      <div className={s.essay}>
        <Link to={post.fields.slug} className={s.title}>
          {post.frontmatter.title}
        </Link>
        <div className={s.date}>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </div>
        <div className={s.body}>
          {post.frontmatter.description}
        </div>
      </div>
    );
  }
};

export default PostItem;
