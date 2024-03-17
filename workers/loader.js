onmessage = async function () {
  const response = await this.fetch('/data/skills.json');
  const body = await response.json()
  this.postMessage(body)
}
