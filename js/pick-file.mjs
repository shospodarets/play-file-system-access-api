const logTimeStamp = console.log.bind( console, '[' + new Date().toUTCString() + ']' );
const fileContentTextarea = document.querySelector('.file-content');

const options = {
    multiple: true,
    types: [
        {
            description: "Images",
            accept: {
                "image/jpeg": ".jpeg",
            },
        },
    ],
    excludeAcceptAllOption: true,
};

document.querySelector(".pick-file").onclick = async () => {
    let [fileHandle] = await window.showOpenFilePicker();

    const file = await fileHandle.getFile();
    const content = await file.text();

    fileContentTextarea.value = content;

    // let fileHandles = await window.showOpenFilePicker(options);
    //
    // const allContent = await Promise.all(
    //     fileHandles.map(async (fileHandle) => {
    //         const file = await fileHandle.getFile();
    //         const content = await file.text();
    //         return content;
    //     })
    // );

};