
const GetData = async (page, pageSize) => {
    const response =
        await fetch(
`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`);
    const data =
        await response.json();
    return data;
};

export default GetData;