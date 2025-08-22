const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Open WhatsApp Web
  await page.goto("https://web.whatsapp.com");
  console.log("Scan QR code manually...");

  // Wait until chats load
  await page.waitForSelector("._3uIPm"); 

  const phoneNumber = "919354912492"; // receiver phone number
  const message = "Hello from my hacky bot 😎";

  // Open chat by URL
  await page.goto(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
  await page.waitForSelector("._3HQNh"); // message box loaded

  // Click send
  await page.keyboard.press("Enter");

  console.log("Message sent!");
})();
