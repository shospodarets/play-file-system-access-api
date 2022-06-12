const fileContentTextarea = document.querySelector('.file-content');

document.querySelector(".save-file").onclick = async () => {
    const options = {
        types: [
            {
                description: "Test files",
                accept: {
                    "text/plain": [".txt"],
                    "text/html": [".html"]
                },
            },
        ],
    };

    const handle = await window.showSaveFilePicker(options);
    const writable = await handle.createWritable();

    await writable.write(fileContentTextarea.value);
    await writable.close();

    return handle;
};