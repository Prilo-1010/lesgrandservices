import { Button } from './Button';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogList = ({ blogs }) => {

    
    return (
        <>
            {blogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                    <div className='blog-image'>
                        {/* <img src={blog.image} alt='pic' /> */}
                        <img src={blog.image} alt='pic' />
                    </div>
                    <div className='blog-details'>
                        <h2>{blog.title}</h2>
                        <p>by <span className='blog-span'>{blog.author}</span> <span className='blog-span'>{blog.comapny}</span>  - {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}</p>
                        <p className='para'>{blog.body}</p>
                        <Link to={`/blogs/${blog.id}`}>
                            <Button
                                buttonStyle='btn-other'
                                buttonSize='btn-medium'
                            >
                                Keep reading...
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BlogList;