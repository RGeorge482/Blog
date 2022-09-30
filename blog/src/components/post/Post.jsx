import "./Post.css";
import postImg from '../../assets/postImg.png';

export default function Post() {
    return (
      <div className="post">
        <img className="postImg" src={postImg} alt="post img" />
          <div className="postInfo">
          <div className="postCats">
            <span className="postCat">HTML</span>
          </div>
          <span className="posttitle">Lorem ipsum dolorel fsit amet</span>
        </div>
        </div>
    )
  }