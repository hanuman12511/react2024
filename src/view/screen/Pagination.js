/* 
import React,
{
    useState,
    useEffect
} from 'react';
import GetData from './GetData';

function Pagination() {
    const [loadedData, setLoadedData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;
    const [moreData, setMoreData] = useState(true);

    useEffect(() => {
        const loadMoreData = async () => {
            try {
                setLoading(true);
                const newData = await GetData(page, 2);
                if (Array.isArray(newData)
                    && newData.length > 0) {
                    setLoadedData(
                        prevData =>
                            [...prevData, ...newData]
                    );
                    setPage(prevPage => prevPage + 1);
                }
                else {
                    setMoreData(false);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setMoreData(false);
            } finally {
                setLoading(false);
            }
        };

        if (moreData && !loading) {
            loadMoreData();
        }
    }, [page, pageSize, moreData, loading]);

    const handleScroll = () => {
        if (
            window.innerHeight +
            document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {loadedData.map(item => (
                <>
                    <div key={item.id} className='infiniteScroll'>
                        <h3>ID : {item.id}</h3>
                        <hr />
                        <h4>Title : {item.title}</h4>
                        <p>Body : {item.body}</p>
                    </div>
                    <br />
                </>
            ))}
            {
                loading &&
                <div>Loading...</div>
            }
            {
                !loading &&
                !moreData &&
                <div>
                    No more data
                </div>
            }
        </div>
    );
}

 export default Pagination; */
/*
import React, { useState, useEffect } from 'react';
function Pagination() {
  // Initialize state variables
  const [todos, setTodos] = useState([]); // To store the fetched to-do items
  const [currentPage, setCurrentPage] = useState(1); // To track the current page
  const itemsPerPage = 10; // Number of items to display per page
  const [totalPages, setTotalPages] = useState(0); // To store the total number of pages
  // useEffect to fetch to-do items based on the currentPage
  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data); // Update the todos state with the fetched data
      });
  }, [currentPage]); // This effect runs whenever currentPage changes
  // useEffect to fetch the total number of todos and calculate total pages
  useEffect(() => {
    // Fetch the total number of todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        // Calculate the total number of pages based on total todos and itemsPerPage
        const totalPages = Math.ceil(data.length / itemsPerPage);
        setTotalPages(totalPages); // Update the totalPages state
      });
  }, []); // This effect runs once when the component mounts
  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update the currentPage state to the new page
  };
  // Slice the todos array to display only items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTodos = todos.slice(startIndex, endIndex);
  return (
    <div>
      
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
   
      <ul>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              cursor: 'pointer',
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination; */

import React, {
    useState,
    useEffect
} from 'react';
import './App.css';


const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        fetchPosts();
    }, [page]);


    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            const data = await response.json();
            setPosts(prevPosts => [...prevPosts, ...data]);
            setHasMore(data.length > 0);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleScroll = () => {
        if (!loading && hasMore &&
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 20) {
            setPage(prevPage => prevPage + 1);
        }
    };


    useEffect(() => {
        console.log("***");
       addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);


    return (
        <div>
            <h1>Infinite Scroll</h1>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                <h2>


                    {loading && <div>Loading...</div>}
                </h2>
            </div>
        </div>
    );
};


export default Pagination;