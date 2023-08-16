document.addEventListener('DOMContentLoaded', function() {
    // Locate the main editor container
    let editorWrapper = document.querySelector('.w-field--draftail_rich_text_area');

    // If the editor container doesn't exist, exit the script.
    if (!editorWrapper) return;

    // Create an element for the character counter
    let charCounter = document.createElement('div');
    charCounter.id = 'char-counter';

    // Add the character counter directly below the editor container
    editorWrapper.parentNode.insertBefore(charCounter, editorWrapper.nextSibling);

    // Locate the contenteditable element
    let textField = editorWrapper.querySelector('.DraftEditor-editorContainer [contenteditable="true"]');

    // Function to update the character count
    const updateCounter = () => {
        // Get the raw text from the editor
        const textContent = textField.textContent || "";
        charCounter.innerText = `Characters: ${textContent.length}`;
    };

    // Update the character count in response to changes in the editor
    textField.addEventListener('input', updateCounter);

    // Handle pasted text with a delay
    textField.addEventListener('paste', function(event) {
        setTimeout(updateCounter, 50);  // Update the counter after a short delay
    });
});