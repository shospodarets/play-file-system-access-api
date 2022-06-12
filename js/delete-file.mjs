const deleteFileBtn = document.querySelector(".delete-file");
const deleteFileName = document.querySelector(".delete-file-name");

deleteFileBtn.addEventListener('click', async () => {
    await window.directoryHandle.removeEntry(deleteFileName.value);
});