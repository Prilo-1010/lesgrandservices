import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogInfo = ({ blogs }) => {
    return (
        <>
            {blogs.map((blog) => (
                <div className="blog-card-info" key={blog.id}>
                    <div className='blog-image-info'>
                        <img src={blog.image} alt='pic' />
                    </div>
                    <div className='blog-details-info'>
                        <div className='blog-header'>
                            <h2>{blog.title}</h2>
                            <p>by <span className='blog-span'>{blog.author}</span> <span className='blog-span'>{blog.comapny}</span>  - {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}</p>
                        </div>
                        <p className='para'>{blog.body}</p>
                        <Link className='blink' to='/blogs'>
                            <h3>Go back</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BlogInfo;