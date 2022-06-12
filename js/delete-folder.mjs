const deleteFolderBtn = document.querySelector(".delete-folder");
const deleteFolderName = document.querySelector(".delete-folder-name");

deleteFolderBtn.addEventListener('click', async () => {
    await window.directoryHandle.removeEntry(deleteFolderName, { recursive: true });
});