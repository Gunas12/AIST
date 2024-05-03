let folders = [];

function createFolder() {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
        folders.push({ name: folderName, subfolders: [] });
        renderFolders();
    }
}

function renameFolder(index) {
    const newName = prompt("Enter new name:", folders[index].name);
    if (newName) {
        folders[index].name = newName;
        renderFolders();
    }
}

function deleteFolder(index) {
    folders.splice(index, 1);
    renderFolders();
}

function createSubfolder(parentIndex) {
    const subfolderName = prompt("Enter subfolder name:");
    if (subfolderName) {
        folders[parentIndex].subfolders.push({ name: subfolderName, subfolders: [] });
        renderFolders();
    }
}

function renameSubfolder(parentIndex, subfolderIndex) {
    const newName = prompt("Enter new name:", folders[parentIndex].subfolders[subfolderIndex].name);
    if (newName) {
        folders[parentIndex].subfolders[subfolderIndex].name = newName;
        renderFolders();
    }
}

function deleteSubfolder(parentIndex, subfolderIndex) {
    folders[parentIndex].subfolders.splice(subfolderIndex, 1);
    renderFolders();
}

function renderFolders() {
    const foldersContainer = document.getElementById("folders");
    foldersContainer.innerHTML = "";
    folders.forEach((folder, index) => {
        const folderElement = document.createElement("div");
        folderElement.classList.add("folder");

        const renameButton = document.createElement("button");
        renameButton.textContent = "Rename";
        renameButton.onclick = (event) => {
            event.stopPropagation();
            renameFolder(index);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (event) => {
            event.stopPropagation();
            deleteFolder(index);
        };

        const createButton = document.createElement("button");
        createButton.textContent = "Create Subfolder";
        createButton.onclick = (event) => {
            event.stopPropagation();
            createSubfolder(index);
        };

        folderElement.textContent = `${index + 1}. ${folder.name}`;
        folderElement.prepend(deleteButton, renameButton, createButton);

        foldersContainer.appendChild(folderElement);

        if (folder.subfolders.length > 0) {
            renderSubfolders(folder.subfolders, folderElement, index);
        }
    });
}

function renderSubfolders(subfolders, parentElement, parentIndex) {
    subfolders.forEach((subfolder, index) => {
        const subfolderElement = document.createElement("div");
        subfolderElement.classList.add("folder");

        const renameButton = document.createElement("button");
        renameButton.textContent = "Rename";
        renameButton.onclick = (event) => {
            event.stopPropagation();
            renameSubfolder(parentIndex, index);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (event) => {
            event.stopPropagation();
            deleteSubfolder(parentIndex, index);
        };

        const createButton = document.createElement("button");
        createButton.textContent = "Create Subfolder";
        createButton.onclick = (event) => {
            event.stopPropagation();
            createSubfolder(parentIndex);
        };

        subfolderElement.textContent = `    - ${subfolder.name}`;
        subfolderElement.prepend(deleteButton, renameButton, createButton);

        parentElement.appendChild(subfolderElement);

        if (subfolder.subfolders.length > 0) {
            renderSubfolders(subfolder.subfolders, subfolderElement, parentIndex);
        }
    });
}

renderFolders();
