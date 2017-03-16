export default class BufferLoader {
  constructor (context, urls, callback) {
    this.context = context
    this.urls = urls
    this.onload = callback

    this.buffers = new Array()
    this.loadCount = 0
  }

  load () {
    this.urls.forEach((url, i) => this.loadBuffer(url, i))
  }

  loadBuffer (url, index) {
    // Load buffer asynchronously
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.responseType = "arraybuffer"

    request.onload = () => {
        // Asynchronously decode the audio file data in request.response
        this.context.decodeAudioData(
          request.response,
          (buffer) => {
            this.buffers[index] = buffer
            this.loadCount += 1
            // When I finished loading all the audio files
            if (this.loadCount === this.urls.length) {
              this.onload(this.buffers)
            }
          },
          (error) => { console.error('decodeAudioData error', error) }
        );
    }

    request.onerror = (e) => { console.error(e) }

    request.send()
  }
}
