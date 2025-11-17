// make two api calls sequentially using fetch in JavaScript

async function makeAPICalls () {
    try {

        const url = 'https://jsonplaceholder.typicode.com';

        const users = await fetch(url + '/users', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            }
        );
        const userResp = await users.json();

        // const posts = await fetch(url + '/posts?userId='+ userResp[0].id);
        // const postsResp = await posts.json();

        return {
            users: userResp,
            // posts: postsResp
        }
        
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// Usage
const result = makeAPICalls();
    result.then(data => console.log(data))
    .catch(error => console.error('Error:', error));