const getData = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const responseUserData = await userResponse.json()

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responsePostData = await postsResponse.json();

    const usersWithPosts = responseUserData.map(user => {
        const userPosts = responsePostData.filter(post => post.userId === user.id);
        return {
            ...user,
            posts: userPosts,
        };
    });

    return usersWithPosts

}

getData()