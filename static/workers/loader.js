onmessage = async function () {
  const response1 = await this.fetch('/data/skills.json');
  const response2 = await this.fetch('/data/portfolio.json');
  const skills = await response1.json()
  const portfolio = await response2.json()
  this.postMessage({
    skills,
    projects: portfolio.projects,
  })
}
