import './SinglePost.css';
import singlePostImg from '../../assets/singlePostImg.png';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={singlePostImg} alt="single post" className='singlePostImg' />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      </div>
  )
}