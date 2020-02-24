const dogImgContainer = document.getElementById('dog-image-container')
const breedList = document.getElementById('dog-breeds')
const breedDropdown = document.getElementById('breed-dropdown')

function main(){
	document.addEventListener('DOMContentLoaded', function(){
		fetchImages()
	});
}

function fetchImages() {
	fetch('https://dog.ceo/api/breeds/image/random/4')
	.then(resp => resp.json())
	.then(images => {
		renderImages(images.message)
	});
}

function renderImages(images) {
	images.forEach(images => {
		const imgTag = Document.createElement('img')
		imgTag.src = images
		dogImgContainer.appendChild(imgTag)
	});
}

function fetchBreeds() {
	fetch('https://dog.ceo/api/breeds/list/all')
	.then(resp => resp.json())
	.then(breeds => {
		renderBreeds(breeds.message)
	});
}

function renderBreeds(breeds) {
	breeds.forEach(breeds => {
		for (const breed in breeds) {
			const li = document.createElement('li')
			li.innerText = breed
			breedList.appendChild(li)
		}
	})
}

breedList.addEventListener('click', handleBreedClick)

function handleBreedClick() {
	if (event.target.tagName === 'LI') {
		if (event.target.style.color === 'red') {
			event.target.style.color = 'blue'
		} else {
			event.target.style.color = 'red'
		}
	}
}


