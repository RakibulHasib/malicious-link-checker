document.querySelectorAll("a").forEach((link) => {
  chrome.runtime.sendMessage({ action: "check_link", url: link.href }, (response) => {
    if (response.verdict === "⚠️ Malicious") {
      link.style.color = "red";
      link.style.fontWeight = "bold";
      link.innerHTML += " 🔥 [Warning]";

      // Display an alert
      alert(`Warning: The link "${link.href}" is flagged as suspicious!`);

      // Add warning banner
      const warningBanner = document.createElement('div');
      warningBanner.style.position = 'fixed';
      warningBanner.style.top = '0';
      warningBanner.style.left = '0';
      warningBanner.style.width = '100%';
      warningBanner.style.backgroundColor = 'red';
      warningBanner.style.color = 'white';
      warningBanner.style.textAlign = 'center';
      warningBanner.style.padding = '10px';
      warningBanner.style.zIndex = '1000';
      warningBanner.innerText = `⚠️ Suspicious link detected: ${link.href}`;
      
      document.body.appendChild(warningBanner);
      
      // Remove the banner after 5 seconds
      setTimeout(() => {
        document.body.removeChild(warningBanner);
      }, 5000);
    }
  });
});
