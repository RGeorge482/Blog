import "./Post.css";
import postImg from '../../assets/postImg.png';

export default function Post() {
    return (
      <div className="post">
        <img className="postImg" src={postImg} alt="post img" />
         
        </div>
    )
  }