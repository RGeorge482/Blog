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
      <div className="singlePostInfo">
        <span className='singlePostAuthor'>Autor: <b>George</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla exercitationem rerum at? Id voluptas quidem fuga veniam quibusdam molestiae illo quia animi. Maiores omnis voluptas facere impedit aliquid reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum aperiam suscipit voluptate dolor ut hic atque id nemo laudantium quis cum sit veritatis perferendis, fugiat voluptates error natus blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur itaque veniam laborum ipsam, iste obcaecati facere quibusdam harum ipsa voluptate sit iure quam quasi ab perspiciatis totam unde odit!</p>
    </div>
  )
}