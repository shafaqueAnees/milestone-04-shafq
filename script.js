document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var objective = document.getElementById('objective').value;
    var skills = document.getElementById('skills').value;
    var hackathons = document.getElementById('hackathons').value;
    var projects = document.getElementById('projects').value;
    var education = document.getElementById('education').value;
    // Display the information in the resume preview section
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayLinkedIn').textContent = linkedin;
    document.getElementById('displayGitHub').textContent = github;
    document.getElementById('displayObjective').textContent = objective;
    document.getElementById('displaySkills').textContent = skills;
    document.getElementById('displayHackathons').textContent = hackathons;
    document.getElementById('displayProjects').textContent = projects;
    document.getElementById('displayEducation').textContent = education;
});
