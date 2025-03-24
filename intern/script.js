// script.js

// Sentiment Keywords for Analysis
const sentimentKeywords = {
    positive: ["profit", "growth", "success", "strong", "increase"],
    neutral: ["stable", "moderate", "average"],
    negative: ["loss", "decline", "weak", "uncertain", "risk"],
  };
  
  // Image Paths for Sentiments
  const sentimentImages = {
    positive: "images/positive.png",
    neutral: "images/neutral.png",
    negative: "images/negative.png",
  };
  
  // Auto-Refresh Toggle
  let autoRefresh = false;
  
  // Random Asset Generator
  function generateRandomAsset() {
    const assetNames = ["Stock A", "Crypto X", "Bond Y", "Commodity Z", "ETF Q"];
    const descriptions = [
      "Record profits driving growth.",
      "Uncertain regulations causing volatility.",
      "Mass adoption accelerating globally.",
      "Stable performance in tough times.",
      "Price decline due to oversupply.",
    ];
  
    const name = assetNames[Math.floor(Math.random() * assetNames.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    return { name, description };
  }
  
  // Analyze Sentiment from Description
  function analyzeSentiment(description) {
    const lowerText = description.toLowerCase();
  
    if (sentimentKeywords.positive.some((word) => lowerText.includes(word))) {
      return "positive";
    }
    if (sentimentKeywords.negative.some((word) => lowerText.includes(word))) {
      return "negative";
    }
    return "neutral";
  }
  
  // Display Dynamic Assets
  function displayAssets() {
    const assetList = document.getElementById("assets-list");
    assetList.innerHTML = "";
  
    for (let i = 0; i < 5; i++) {
      const asset = generateRandomAsset();
      const sentiment = analyzeSentiment(asset.description);
  
      const assetItem = document.createElement("div");
      assetItem.className = `asset-item ${sentiment}`;
      assetItem.innerHTML = `
        <img src="${sentimentImages[sentiment]}" alt="${sentiment}" class="asset-image">
        <div>
          <strong>${asset.name}</strong>: ${sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
          <br><em>${asset.description}</em>
        </div>
      `;
  
      assetList.appendChild(assetItem);
    }
  }
  
  // Generate New Assets on Button Click
  function generateAssets() {
    displayAssets();
  }
  
  // Toggle Auto-Refresh Sentiments
  function toggleAutoRefresh() {
    autoRefresh = !autoRefresh;
    if (autoRefresh) {
      setInterval(displayAssets, 5000); // Refresh every 5 seconds
    }
  }
  
  // Initialize on Page Load
  window.onload = displayAssets;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  