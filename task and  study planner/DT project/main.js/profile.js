// Save profile and profile picture in localstorage
function saveProfile() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const bio = document.getElementById("bio").value.trim();
    const notifications = document.getElementById("notifications").checked;

    const profilePicElement = document.getElementById("profilePic");
    const profilePicSrc = profilePicElement.src;  // This should be a base64 string after upload

    // Validate inputs
    if (name === "" || email === "") {
        alert("Name and email are required.");
        return;
    }

    const profileData = {
        name,
        email,
        bio,
        notifications,
        profilePicSrc,  // Save base64 string of the image
    };

    // Save profile to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    alert("Profile saved successfully!");
}

// Load profile from localStorage
function loadProfile() {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name || "";
        document.getElementById("email").value = savedProfile.email || "";
        document.getElementById("bio").value = savedProfile.bio || "";
        document.getElementById("notifications").checked =
            savedProfile.notifications || false;

        // Load profile picture if available
        const profilePicElement = document.getElementById("profilePic");
        profilePicElement.src =
            savedProfile.profilePicSrc || "default-profile.png";  // Default if no profile pic
    }
}
// Save profile to localStorage
console.log("Saving profile data:", profileData);
localStorage.setItem("userProfile", JSON.stringify(profileData));
alert("Profile saved successfully!");


// Preview uploaded profile picture and save it in localstorage
function previewImage(event) {
    const image = document.getElementById("profilePic");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;  // Set the preview image
        };
        reader.readAsDataURL(file);  // Read the image as a base64 string
    }
}
