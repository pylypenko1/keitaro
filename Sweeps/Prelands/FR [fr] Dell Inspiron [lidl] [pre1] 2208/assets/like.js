const likeButtons = document.querySelectorAll('.like-button');
const likeCounts = document.querySelectorAll('.like-count');

likeButtons.forEach(function(likeButton, index) {
  let isLiked = false;
  let likes = parseInt(likeCounts[index].textContent);

  likeButton.addEventListener('click', function() {
    if (isLiked) {
      unlike();
    } else {
      like();
    }
  });

  function like() {
    likes++;
    likeCounts[index].textContent = likes;

    isLiked = true;
    likeButton.classList.add('liked');
  }

  function unlike() {
    likes--;
    likeCounts[index].textContent = likes;

    isLiked = false;
    likeButton.classList.remove('liked');
  }
});