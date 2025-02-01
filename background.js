chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "check_link") {
    // const apiKey = "###########################"; // Replace with your API key
    const apiKey = "############################";
    const urlToCheck = message.url;

    fetch("https://www.virustotal.com/api/v3/urls", {
      method: "POST",
      headers: {
        "x-apikey": apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(urlToCheck)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error && data.error.code === "QuotaExceededError") {
          sendResponse({
            verdict:
              "❌ VirusTotal Quota Exceeded. Try later or use another API.",
          });
          return;
        }

        if (!data.data || !data.data.id) {
          sendResponse({ verdict: "⚠️ Invalid API response" });
          return;
        }

        return fetch(
          `https://www.virustotal.com/api/v3/analyses/${data.data.id}`,
          {
            method: "GET",
            headers: { "x-apikey": apiKey },
          }
        );
      })
      .then((response) => response.json())
      .then((analysisData) => {
        if (
          !analysisData ||
          !analysisData.data ||
          !analysisData.data.attributes
        ) {
          sendResponse({ verdict: "⚠️ No analysis data available" });
          return;
        }

        const analysisStats = analysisData.data.attributes.stats;
        if (!analysisStats) {
          sendResponse({ verdict: "⚠️ No stats available" });
          return;
        }

        const maliciousCount = analysisStats.malicious || 0;
        const suspiciousCount = analysisStats.suspicious || 0;

        let verdict = "✅ Safe"; // Default

        if (maliciousCount > 0) {
          verdict = "🛑 Malicious"; // Highest priority
        } else if (suspiciousCount > 0) {
          verdict = "⚠️ Suspicious"; // Lower priority than malicious
        }

        sendResponse({ verdict });
      })
      .catch((error) => {
        console.error("Error checking link:", error);
        sendResponse({ verdict: "⚠️ Error checking link" });
      });

    return true; // Keep the message channel open for async response
  }
});
