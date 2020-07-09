import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/beaadelrosario
*/


const myStuff = {data: [{
  "avatar_url": "https://avatars0.githubusercontent.com/u/65781305?v=4",
  "bio": "New Yorker living in San Francisco, CA. Studying Front End Web Development at Lambda School.",
  "blog": "",
  "company": null,
  "created_at": "2020-05-22T16:51:43Z",
  "email": null,
  "events_url": "https://api.github.com/users/beaadelrosario/events{/privacy}",
  "followers": 6,
  "followers_url": "https://api.github.com/users/beaadelrosario/followers",
  "following": 3,
  "following_url": "https://api.github.com/users/beaadelrosario/following{/other_user}",
  "gists_url": "https://api.github.com/users/beaadelrosario/gists{/gist_id}",
  "gravatar_id": "",
  "hireable": null,
  "html_url": "https://github.com/beaadelrosario",
  "id": 65781305,
  "location": "San Francisco, CA",
  "login": "beaadelrosario",
  "name": "Bea Del Rosario",
  "node_id": "MDQ6VXNlcjY1NzgxMzA1",
  "organizations_url": "https://api.github.com/users/beaadelrosario/orgs",
  "public_gists": 0,
  "public_repos": 20,
  "received_events_url": "https://api.github.com/users/beaadelrosario/received_events",
  "repos_url": "https://api.github.com/users/beaadelrosario/repos",
  "site_admin": false,
  "starred_url": "https://api.github.com/users/beaadelrosario/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/beaadelrosario/subscriptions",
  "twitter_username": null,
  "type": "User",
  "updated_at": "2020-07-09T20:21:30Z",
  "url": "https://api.github.com/users/beaadelrosario"
},
{
  "avatar_url": "https://avatars1.githubusercontent.com/u/66022270?v=4",
  "bio": "This is my bio",
  "blog": "",
  "company": null, 
  "created_at": "2020-05-27T14:45:40Z",
  "email": null,
  "events_url": "https://api.github.com/users/zavier-lambda/events{/privacy}",
  "followers": 0,
  "followers_url": "https://api.github.com/users/zavier-lambda/followers", 
  "following": 0,
  "following_url": "https://api.github.com/users/zavier-lambda/following{/other_user}",
  "gists_url": "https://api.github.com/users/zavier-lambda/gists{/gist_id}",
  "gravatar_id": "", 
  "hireable": null,
  "html_url": "https://github.com/zavier-lambda",
  "id": 66022270,
  "location": "Orlando, FL", 
  "login": "zavier-lambda",
  "name": "Zavier",
  "node_id": "MDQ6VXNlcjY2MDIyMjcw",
  "organizations_url": "https://api.github.com/users/zavier-lambda/orgs", 
  "public_gists": 0,
  "public_repos": 20,
  "received_events_url": "https://api.github.com/users/zavier-lambda/received_events",
  "repos_url": "https://api.github.com/users/zavier-lambda/repos", 
  "site_admin": false,
  "starred_url": "https://api.github.com/users/zavier-lambda/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/zavier-lambda/subscriptions",
  "twitter_username": null,
  "type": "User",
  "updated_at": "2020-07-09T18:24:27Z",
  "url": "https://api.github.com/users/zavier-lambda"
}
]}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["zavier-lambda",
"sambrown0322","micherre","nicholas-myers", "jdulay91", "StaceyLouis", "OrlandoDavila", "avawing", "galosandoval"];

console.log(followersArray)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function socialCard(object){
  // object = object.data
  let divCard = document.createElement('div')
  divCard.className = 'card'

  let image = document.createElement('img')
  image.src = object.avatar_url
  image.classList.add = ('user-image')
  divCard.classList.add = ('div-Card')

  let divCardInfo = document.createElement('div')
  divCardInfo.className = 'card-info'

  let name = document.createElement('h3')
  name.className = 'name'
  name.textContent = object.name

  let userName = document.createElement('p')
  userName.className = 'username'
  userName.textContent = object.login
  let location = document.createElement('p')
  location.className = 'location'
  location.textContent = `LOCATION: ${object.location}`

  let profile = document.createElement('p')
  profile.className = 'profile'
  profile.textContent = 'Profile: '
  let profileLink = document.createElement('a')
  profileLink.className = 'profileLink'
  profileLink.textContent = object.html_url

  let followers = document.createElement('p')
  followers.className = 'followers'
  // followers.textContent = 'Followers: '
  followers.textContent = `FOLLOWERS: ${object.followers}`
  let following = document.createElement('p')
  following.className = 'following'
  following.textContent = `FOLLOWING: ${object.following}`
  let bio = document.createElement('p')
  bio.className = 'bio'
  bio.textContent = `BIO: ${object.bio}`

  divCard.appendChild(image)
  divCard.appendChild(divCardInfo)
  divCardInfo.appendChild(name)
  divCardInfo.appendChild(userName)
  divCardInfo.appendChild(location)
  divCardInfo.appendChild(profile)
  divCardInfo.appendChild(followers)
  divCardInfo.appendChild(following)
  divCardInfo.appendChild(bio)
  profile.appendChild(profileLink)

  return divCard
}

console.log(socialCard)

let cards = document.querySelector('.cards') //step4?
cards.appendChild(socialCard(myStuff))

let followersCards = document.querySelector('.cards')
// followersArray.forEach((object) => {
//   console.log(object)
//   const otherUsersURL = `https://api.github.com/users/${object}`
//   axios.get(otherUsersURL)
//   .then(function(value){
//     console.log(value)
//     followersCards.appendChild(socialCard(value))
//   })
//   .catch(function(error){
//     console.log(error)
//   })
// })

let dataSet = myStuff.data
dataSet.forEach((object) => {
    console.log(object)
      followersCards.appendChild(socialCard(object))
    })


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
