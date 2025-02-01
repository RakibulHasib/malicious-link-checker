document.getElementById("checkBtn").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  if (!url) return alert("Please enter a URL");

  chrome.runtime.sendMessage({ action: "check_link", url }, (response) => {
    document.getElementById("result").innerText = response.verdict;
  });
});
