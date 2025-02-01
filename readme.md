# 🔍 Malicious Link Checker Extension  

A lightweight **Chrome Extension** that detects **suspicious and malicious URLs** using the **VirusTotal API**.  

## 🚀 Features  
✅ Detects if a website is **malicious, suspicious, or safe**  
✅ Uses **VirusTotal API** to analyze links  
✅ **Easy-to-use** popup interface  
✅ Works in **Google Chrome**  

## 📌 Installation  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/malicious-link-checker.git

2. **Open Chrome Extensions Page**
Open chrome://extensions/ in the browser
Enable Developer Mode (top-right corner)
Click on "Load Unpacked"
Select the project folder



🛠️ Usage
Click on the extension icon in the toolbar.
Click "Check URL" to analyze the current website.
Results will be displayed:
🛑 Malicious (Dangerous site)
⚠️ Suspicious (Potentially unsafe)
✅ Safe (No threats detected)


⚡ API Key Setup
Get a VirusTotal API key from VirusTotal Developer Portal.
Open background.js and replace:
const API_KEY = "YOUR_VIRUSTOTAL_API_KEY";
Save & reload the extension.

🛑 Limitations
⚠️ VirusTotal API has a request limit for free users. Upgrade if needed.
⚠️ Some websites may not have prior reports on VirusTotal.

🏗️ Future Improvements
 Add more security APIs (Google Safe Browsing, PhishTank)
 Improve UI/UX
 Add real-time protection

 🤝 Contributing
Contributions are welcome! Feel free to fork the repo, make changes, and submit a pull request.