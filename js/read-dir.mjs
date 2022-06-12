const readDirBtn = document.querySelector(".read-dir");

readDirBtn.addEventListener('click', async () => {
    window.directoryHandle = await window.showDirectoryPicker();

    for await (const entry of window.directoryHandle.values()) {
        console.log(entry.kind, entry.name);
    }
});