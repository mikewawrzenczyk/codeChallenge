//Example fetch using pokemonapi.co
document.querySelector('.datepicker-input').addEventListener('change', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=JiIGiTrLmIOSD9792qSNO8enK5205BMR6ecsc7eO&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type == 'image'){
          document.querySelector('.videoframe').style = 'visibility: hidden;'
          document.querySelector('.hero').style = `background-image: url('${data.hdurl}');`
        }
        else if(data.media_type == 'video'){
          document.querySelector('.hero').style = `background-image: url('');`
          document.querySelector('.videoframe').style = 'visibility: visible;'
          document.querySelector('.videoframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

