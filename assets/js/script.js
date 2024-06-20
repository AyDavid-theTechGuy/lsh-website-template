// Submenus - Dropdowns

const dropdown = document.querySelectorAll(".submenu .dropdown-btn");
const dropdownIcon = document.querySelectorAll(".submenu .dropdown-btn .drop-icon i");
const dropdownContent = document.querySelectorAll(".submenu .dropdown-content");

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].parentElement.addEventListener("mouseenter", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "block";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].classList.remove("bi-chevron-down");
				dropdownIcon[k].classList.add("bi-chevron-up");
			}
		}
	});

	dropdown[i].parentElement.addEventListener("mouseleave", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "none";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].classList.remove("bi-chevron-up");
				dropdownIcon[k].classList.add("bi-chevron-down");
			}
		}
	});
}

// WhatsApp Quick Contact Over 

const waQc = document.querySelector(".wa-qc");

waQc.innerHTML = `
	<div class="wrapper">
		<a href="#"><i class="bi bi-whatsapp"></i></a>
	</div>`;

const waBg = document.querySelector(".wa-qc .wrapper");
const waIcon = document.querySelector(".wa-qc .wrapper i");

waBg.addEventListener("mouseover", () => {
	waBg.style.backgroundColor = "#f1f1f1";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#1a8754";
	waIcon.style.transition = "0.75s";
});

waBg.addEventListener("mouseleave", () => {
	waBg.style.backgroundColor = "#20a869";
	waBg.style.transition = "0.75s";
	waIcon.style.color = "#f1f1f1";
	waIcon.style.transition = "0.75s";
});
