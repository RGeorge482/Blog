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
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, est maxime, voluptas hic laudantium minus nihil quidem ea, alias consequatur perspiciatis similique laboriosam adipisci tenetur ut ipsam dolorum. Quo, tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, aperiam enim voluptatum placeat ipsam amet pariatur minima eius cum voluptates laboriosam maiores necessitatibus nam in officiis beatae explicabo! Repudiandae, perspiciatis!</p>
        </div>
    )
  }