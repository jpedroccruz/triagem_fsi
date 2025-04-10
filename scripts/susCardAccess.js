document.querySelector("input").addEventListener('keypress', function() {
  const InputLenght = this.value.length
  
  if (InputLenght > 17) {
    this.value = this.value.slice(0, this.maxLength)
  }

  if (InputLenght === 3 || InputLenght === 8 || InputLenght === 13) this.value += ' ' 
})