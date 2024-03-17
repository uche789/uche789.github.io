onmessage = async function () {
  const response = await this.fetch('/data/blogPosts.json');
  const result = await response.json();
  if (Array.isArray(result)) {
    result.sort((a, b) => {
      return b.date < a.date ? -1 : 0;
    });
  }
  this.postMessage(result)
}
