const fs = require('fs')
fs.readFile('postsData.json', 'utf-8', (error, data) => {
    let reqData = JSON.parse(data)
    const postsData = reqData.posts

    let postsCount = {}

    postsData.forEach(eachPost => {
        const userID = eachPost.posted_by;
        if(postsCount[userID] === undefined){
            postsCount[userID] = 1
        } else{
            postsCount[userID] = postsCount[userID] + 1
        }
    });

    reqData.eachUserPosts = postsCount 

    const modifiedData = JSON.stringify(reqData)

    fs.writeFile('postsData.json', modifiedData, (err) => {
        console.log("Data modified in postsData.json")
    })

    fs.writeFile('newjsonfile.json', modifiedData, (err) => {
        console.log("New JSON file is created")
    })



})