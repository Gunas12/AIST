
document.getElementById("urlInput").addEventListener("input", getUrlParts);
function getUrlParts() {
    const inputUrl = document.getElementById("urlInput").value;
    const url = new URL(inputUrl);
    const path = url.pathname;
    document.getElementById("urlPath").innerText = "URL Path: " + path;
    if (url.search) {
        const searchParams = url.searchParams.toString();
        const queryParams = searchParams.split("&");
        const formattedQueryParams = queryParams.map(param => {
            const [key, value] = param.split("=");
            return `${key}: ${value}`;
        }).join("\n");
        document.getElementById("queryParams").innerText = "URL Query:\n" + formattedQueryParams;
    } else {
        document.getElementById("queryParams").innerText = "No query parameters found.";
    }
}