/**
 * Example usuage in vue component
 *
 onMounted(() => {
  if (window.Worker) {
    const worker = new Worker('/workers/loader.js');

    worker.onmessage = (e) => {
      skillsInterest.value = e.data;
    }

    worker.postMessage('start worker');
  }
})
 */

onmessage = async function () {
  const response = await this.fetch('/data/skills.json');
  const body = await response.json()
  this.postMessage(body)
}
