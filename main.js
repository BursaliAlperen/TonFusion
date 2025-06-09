const BIN_ID = "6846b36cd62dc04f2a8f17e9";
const API_KEY = "$2a$10$c/5/8xOcCSHJMdZlQW5GXubnFhwEddhTvT5GnDqX31BeU1FVfWIsm";

async function saveData() {
  const wallet = document.getElementById("wallet").value;
  const status = document.getElementById("status");

  const data = {
    wallet: wallet,
    balance: 0.0002
  };

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
        "X-Bin-Private": "true"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("Failed to save");

    const result = await response.json();
    status.innerText = "✅ Data saved successfully!";
  } catch (err) {
    console.error(err);
    status.innerText = "❌ Failed to save data.";
  }
        }
