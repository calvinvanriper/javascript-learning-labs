const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const htmlPreview = document.getElementById('preview');

const blockElementRegex = /^<(h[1-3]|blockquote|ul|\/ul|ol|\/ol|li\b|hr|code)/;

const headingRegex = /^(#{1,3}) (.+)/gm;
const boldRegex = /(\*\*|__)(.+?)\1/g;
const emphasisRegex = /(\*|_)(.+?)\1/g;
const linkRegex = /\[(.+?)\]\((.+?)\)/g;
const imageRegex = /!\[(.+?)\]\((.+?)\)/g;
const quoteRegex = /^> (.+)/gm;
const listItemRegex = /^- (.+)/gm;
const orderedListItemRegex = /^\d+\. (.+)/gm;
const hrRegex = /^\s*-{3}\s*$/gm;
const inlineCodeRegex = /`(.+?)`/g;

const inlineRules = [
  [imageRegex, '<img alt="$1" src="$2">'],
  [linkRegex, '<a href="$2">$1</a>'],
  [inlineCodeRegex, '<code>$1</code>'],
  [boldRegex, '<strong>$2</strong>'],
  [emphasisRegex, '<em>$2</em>'],
  [quoteRegex, '<blockquote>$1</blockquote>'],
  [listItemRegex, '<li data-list="ul">$1</li>'],
  [orderedListItemRegex, '<li data-list="ol">$1</li>'],
  [hrRegex, '<hr>'],
];

/**
 * Converts Markdown input into HTML output and updates
 * both the raw HTML display and rendered preview.
 */
function convertMarkdown() {
  let text = markdownInput.value;

  text = text.replace(headingRegex, (match, hashes, headingText) => {
    const level = hashes.length;
    return `<h${level}>${headingText}</h${level}>`;
  });

  inlineRules.forEach(([regex, replacement]) => {
    text = text.replace(regex, replacement);
  });

  const lines = text.split('\n');
  const listWrappedLines = [];

  // Wrap consecutive list items in the correct parent list element
  for (let index = 0; index < lines.length; index += 1) {
    const currentLine = lines[index];
    const previousLine = lines[index - 1];
    const nextLine = lines[index + 1];

    const currentIsListItem = currentLine.startsWith('<li');
    const currentListType = currentLine.includes('data-list="ol"') ? 'ol' : 'ul';
    const previousIsListItem = previousLine?.startsWith('<li');
    const nextIsListItem = nextLine?.startsWith('<li');

    if (currentIsListItem && !previousIsListItem) {
      listWrappedLines.push(`<${currentListType}>`);
    }

    listWrappedLines.push(currentLine);

    if (currentIsListItem && !nextIsListItem) {
      listWrappedLines.push(`</${currentListType}>`);
    }
  }

  const cleanedLines = listWrappedLines.map((line) => line.replace(/ data-list="(ul|ol)"/g, ''));

  const wrappedLines = cleanedLines.map((line) => {
    if (line.trim() === '') {
      return line;
    }

    if (blockElementRegex.test(line)) {
      return line;
    }

    return `<p>${line}</p>`;
  });

  text = wrappedLines.join('\n');

  htmlOutput.textContent = text;
  htmlPreview.innerHTML = text;
}

const sampleMarkdown = `# Markdown Demo

## Supported Elements

This converter supports **bold**, *italic*, and \`inline code\`.

> This is a blockquote.

- Unordered list item
- Another unordered item

1. Ordered item one
2. Ordered item two

[Visit my portfolio](https://calvinvanriper.dev)

![Example image](https://via.placeholder.com/150)

---`;

markdownInput.value = sampleMarkdown;
convertMarkdown();
markdownInput.focus();

markdownInput.addEventListener('input', convertMarkdown);
