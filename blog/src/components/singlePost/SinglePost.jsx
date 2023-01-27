import './SinglePost.css';
import singlePostImg from '../../assets/singlePostImg.png';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={singlePostImg} alt="single post" className='singlePostImg' />
      </div>
      </div>
  )
}