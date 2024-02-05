// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = itemDetails

  return (
    <Link to={`/blogs/${id}`} className="link-con">
      <li className="li-container">
        <div>
          <img src={imageUrl} className="cover-img" alt={topic} />
        </div>
        <div className="text-container">
          <p className="topic">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div className="auth-container">
            <img src={avatarUrl} className="avathar-img" alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
