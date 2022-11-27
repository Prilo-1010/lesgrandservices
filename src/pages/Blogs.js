import '../styles/Blogs.css'
import BlogList from '../components/BlogList';
import BlogInfo from '../components/BlogInfo';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const Blogs = () => {
    const { data: blogs, loading, error } = useFetch('/blogs');

    return (
        <>
            <div className="blogs">
                <div className='btext'>
                    <h1>Blogs</h1>
                    <p>Articles for the work we done </p>
                </div>
                <div className="blogs-container">
                    {error && <div>{error}</div>}
                    {loading && <div className='btext'><h2>Loading..</h2></div>}
                    {blogs && <BlogList blogs={blogs} />}
                </div>
            </div>
        </>
    );
}

export const BlogDetails = () => {
    const { id } = useParams()
    const { data: blogs, error, loading } = useFetch(`/blogs/${id}`)

    return (
        <>
            <div className="blog-container">
                {error && <div>{error}</div>}
                {loading && <div className='btext'><h2>Loading..</h2></div>}
                {blogs && <BlogInfo blogs={blogs} />}
            </div>
        </>

    );
}


