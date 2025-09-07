// Select buttons and log container
const talkBtn = document.querySelector(".talk");
const unlockBtn = document.querySelector(".unlock");
const alertBtn = document.querySelector(".alert");
const activityLog = document.getElementById("activity-log");

// Function to add a new activity item
function addActivity(type, icon, message) {
  const li = document.createElement("li");
  li.className = type;
  li.innerHTML = `${icon} ${message} <span>just now</span><p>Action triggered from dashboard</p>`;
  activityLog.prepend(li); // add new event on top
}

// Button actions
talkBtn.addEventListener("click", () => {
  alert("You are now talking through the Smart Doorbell 🎤");
  addActivity("talk", "🎤", "Talk Activated");
});

unlockBtn.addEventListener("click", () => {
  alert("The door has been unlocked 🔓");
  addActivity("unlock", "🔓", "Door Unlocked");
});

alertBtn.addEventListener("click", () => {
  alert("🚨 Security alert has been triggered!");
  addActivity("security", "🚨", "Security Alert");
});
