export const baseURL = 'https://jsonplaceholder.typicode.com/'
export const requestLinks = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    postById: (id) =>`/posts/${id}`
}