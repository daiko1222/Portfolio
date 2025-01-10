function toggleClass(className) {
	document.getElementById("typescript_preview").classList.toggle(className) // Toggle la classe sur l'aperçu

	updateCodeEditor()
}

function updateCodeEditor() {
	const classes = document.getElementById("typescript_preview").className
	document.querySelector("section#Typescript .vscode-content pre").textContent = `
<div id="preview-box" class="${classes}">
    Preview Box
</div>;
    `.trim()
}


updateCodeEditor()