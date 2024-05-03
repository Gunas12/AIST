// Function to create a new folder recursively
function createFolderRecursively(parentFolder) {
    var folderName = prompt("Enter folder name:");
    if (folderName) {
        var folder = document.createElement("div");
        folder.className = "sub-folder";
        folder.innerHTML = `
            <span>${folderName}</span>
            <div class="folder-controls">
                <button class="create-file">Create File</button>
                <button class="create-folder">Create Folder</button>
                <button class="delete-folder">Delete Folder</button>
                <button class="rename-folder">Rename Folder</button>
            </div>
            <div class="file-list"></div>
        `;
        parentFolder.appendChild(folder);
        bindFolderEvents(folder);

        // Ask if the user wants to create another subfolder
        var createAnother = confirm("Do you want to create another subfolder?");
        if (createAnother) {
            createFolderRecursively(folder);
        }
    }
}

// Function to create a new folder
function createFolder() {
    var folderName = prompt("Enter folder name:");
    if (folderName) {
        var folder = document.createElement("div");
        folder.className = "folder";
        folder.innerHTML = `
            <span>${folderName}</span>
            <div class="folder-controls">
                <button class="create-file">Create File</button>
                <button class="create-folder">Create Folder</button>
                <button class="delete-folder">Delete Folder</button>
                <button class="rename-folder">Rename Folder</button>
            </div>
            <div class="file-list"></div>
        `;
        document.getElementById("fileExplorer").appendChild(folder);
        bindFolderEvents(folder);

        // Ask if the user wants to create a subfolder
        var createSubFolder = confirm("Do you want to create a subfolder?");
        if (createSubFolder) {
            createFolderRecursively(folder);
        }
    }
}

// Function to delete a folder
function deleteFolder(folder) {
    folder.remove();
}

// Function to rename a folder
function renameFolder(folder) {
    var newName = prompt("Enter new folder name:");
    if (newName) {
        folder.querySelector("span").textContent = newName;
    }
}

// Function to create a file within a folder
function createFile(folder) {
    var fileName = prompt("Enter file name:");
    if (fileName) {
        var file = document.createElement("div");
        file.className = "file";
        file.textContent = fileName;
        folder.querySelector(".file-list").appendChild(file);
    }
}

// Function to bind events to a folder
function bindFolderEvents(folder) {
    var folderControls = folder.querySelector(".folder-controls");

    folderControls.querySelector(".create-file").addEventListener("click", function() {
        createFile(folder);
    });

    folderControls.querySelector(".create-folder").addEventListener("click", function() {
        createFolderRecursively(folder);
    });

    folderControls.querySelector(".delete-folder").addEventListener("click", function() {
        deleteFolder(folder);
    });

    folderControls.querySelector(".rename-folder").addEventListener("click", function() {
        renameFolder(folder);
    });
}

// Event listener for creating a folder
document.getElementById("createFolderBtn").addEventListener("click", createFolder);
