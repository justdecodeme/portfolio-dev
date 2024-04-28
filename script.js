/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById('year');
const projectsEl = document.getElementById('projects');
const filterEls = document.querySelectorAll('#filters li');

// filterEls[0].addEventListener('click', function() {
// 	console.log('clicked')
// })
// filterEls[1].addEventListener('click', function() {
// 	console.log('clicked')
// })
// filterEls[2].addEventListener('click', function() {
// 	console.log('clicked')
// })
// filterEls[3].addEventListener('click', function() {
// 	console.log('clicked')
// })
// filterEls[4].addEventListener('click', function() {
// 	console.log('clicked')
// })
// filterEls[5].addEventListener('click', function() {
// 	console.log('clicked')
// })

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) {
		document.querySelector('#filters li.active').classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	});
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio-dev/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio-dev/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
];

function renderProjects(tag) {
	let output = '';
	// <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < projects.length; i++) {
		if (tag == 'all' || projects[i].tags.includes(tag)) {
			output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<div class="content flex">
					<p>${projects[i].name}</p>
					<p class="flex">
						<a href="${projects[i].codeUrl}" target="_blank"><img src="img/icon/github.svg" alt="GitHub"></a>
						<a href="${projects[i].liveUrl}" target="_blank"><img src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link"></a>
					</p>
				</div>
			</div> `;
		}
	}

	projectsEl.innerHTML = output;
}

renderProjects('all');
