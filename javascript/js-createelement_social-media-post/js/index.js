console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postContainer = document.querySelector("body");

//hier den Artikel bauen ohne "innerHTML" zu verwenden:
// New Post
const newPost = document.createElement("article");
newPost.classList.add("post");
//postContainer.append(newPost);
document.body.append(newPost);

//Post Content / Text

const postHeader = document.createElement("p");
postHeader.classList.add("post__content");
postHeader.textContent = "My first new post! vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv";
newPost.append(postHeader);

//Post Footer

const footer = document.createElement("footer");
footer.classList.add("post__footer");
newPost.append(footer);

// Post-Username

const postUserName = document.createElement("span");
postUserName.classList.add("post__username");
postUserName.textContent = "from_Ole";
footer.append(postUserName);

// Like-Button

const button2 = document.createElement("button");
button2.classList.add("post__button");
button2.textContent = "♥ Like";
footer.append(button2);

// <p class="post__content">My first new Post!</p> _______OKAY

//<footer class="post__footer"> _______OKAY

//<span class="post__username">@username</span> _______NOT Okay

//<button type="button" class="post__button" data-js="like-button">♥ Like</button> _______not realy ok

//</footer> */}
