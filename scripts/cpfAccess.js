document.querySelector("input").addEventListener('keypress', function() {
  const InputLenght = this.value.length
  
  if (InputLenght > 13) {
    this.value = this.value.slice(0, this.maxLength)
  }

  if (InputLenght === 3 || InputLenght === 7) this.value += '.'
  else if (InputLenght === 11) this.value += '-'
})