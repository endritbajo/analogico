import BufferLoader from './BufferLoader'

export default class AudioPlayer {
  constructor (context, sounds) {
    this.context = context
    this.sounds = sounds
    this.buffers = [];
    
    this.nameToBufferIndex = sounds.reduce((acc, sound, i) => {
      acc[sound.label] = i
      return acc
    }, {})

    const sources = sounds.map(sound => sound.src);
    this.bufferLoader = new BufferLoader(
      this.context,
      sources,
      (buffers) => { this.buffers = buffers }
    )

    this.bufferLoader.load()
  }

  play (name) {
    const index = this.nameToBufferIndex[name]
    var src = this.context.createBufferSource();
    src.buffer = this.buffers[index];
    src.connect(this.context.destination);
    src.start(0);
  }
}
