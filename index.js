class App{
    constructor() {
      this.$els = {
        glitch: $('.glitch')
      }
      this.fontFamily = ['varela', 'open', 'oswald']
      this.words = ['test', 'glitch', 'Quentin']
    }
    
    glitch(delay) {
      setInterval(() => {
        this.removeFontFamily()
        this.$els.glitch.addClass(this.getRandomFontFamily())
        let text = this.getRandomWord()
        this.$els.glitch.attr('data-text', text)
        this.$els.glitch.text(text)
      }, delay)
    }
    
    getRandomWord() {
      return this.words[Math.floor(Math.random()*this.words.length)]
    }
    
    getRandomFontFamily() {
      return this.fontFamily[Math.floor(Math.random()*this.fontFamily.length)]
    }
    
    removeFontFamily() {
      for(let family of this.fontFamily) {
        this.$els.glitch.removeClass(family);
      }
    }
  }
  
  let app = new App();
  app.glitch(1500);