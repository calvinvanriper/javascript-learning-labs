const storyContainer = document.querySelector('.story-container');
const resultParagraph = document.getElementById('result');

const storyObj = {
  scary: {
    story:
      'In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They entered the cabin and awakened something malevolent that had been dormant for centuries.',
    borderColor: '#ee4b2b',
  },
  funny: {
    story:
      'During a camping trip, Mark tried to impress everyone with his cooking skills, but ended up burning dinner and his eyebrows.',
    borderColor: '#f1be32',
  },
  adventure: {
    story:
      'Lost deep in the Amazon, Sarah and Jake uncovered an ancient temple, braving traps and strange wildlife while solving mysterious clues.',
    borderColor: '#acd157',
  },
};
/**
 * Displays a story and updates the container styling based on the selected genre.
 *
 * @param {string} genre - The key corresponding to a story category in storyObj.
 * Updates the text content of the result paragraph and the border color of the story container.
 */
function displayStory(genre) {
  if (!storyObj[genre]) return;

  resultParagraph.textContent = storyObj[genre].story;
  storyContainer.style.borderColor = storyObj[genre].borderColor;
}

document.getElementById('scary-btn').addEventListener('click', () => displayStory('scary'));
document.getElementById('funny-btn').addEventListener('click', () => displayStory('funny'));
document.getElementById('adventure-btn').addEventListener('click', () => displayStory('adventure'));
