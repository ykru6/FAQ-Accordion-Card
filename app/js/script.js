let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let Accordions = $$('.accordion');
let Panels = $$('.panel');
let Icons = $$('#icons');

function panelFlushEvent() {
	Accordions.forEach((Accordion, index) => {
		Accordion.addEventListener('click', (event) => {
			const Panel = Panels[index];

			Panel.classList.toggle('expand');
			event.currentTarget.classList.toggle('active');

			for (let x = 0; x < Accordions.length; x++) {
				if (x !== index) {
					Accordions[x].classList.remove('active');
				};
			};

			for (let y = 0; y < Panels.length; y++) {
				if (y !== index) {
					Panels[y].classList.remove('expand');
				};		
			};
		});
	});
};

function evtIconRotation() {
	Accordions.forEach((Accordion, index) => {
		Accordion.addEventListener('click', () => {
			for (let z = 0; z < Icons.length; z++) {
				if (z !== index) {
					Icons[z].className = `fa fa-chevron-down`;
				} else {
					Icons[z].classList.toggle('open');
				};
			};
		});
	});
};

const executeProgram = () => {
	panelFlushEvent();
	evtIconRotation();
};

executeProgram();