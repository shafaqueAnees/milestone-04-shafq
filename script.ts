document.getElementById('resumeForm')!.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const hackathons = (document.getElementById('hackathons') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Display the information in the resume preview section
    (document.getElementById('displayName') as HTMLElement).textContent = fullName;
    (document.getElementById('displayEmail') as HTMLElement).textContent = email;
    (document.getElementById('displayPhone') as HTMLElement).textContent = phone;
    (document.getElementById('displayLinkedIn') as HTMLElement).textContent = linkedin;
    (document.getElementById('displayGitHub') as HTMLElement).textContent = github;
    (document.getElementById('displayObjective') as HTMLElement).textContent = objective;
    (document.getElementById('displaySkills') as HTMLElement).textContent = skills;
    (document.getElementById('displayHackathons') as HTMLElement).textContent = hackathons;
    (document.getElementById('displayProjects') as HTMLElement).textContent = projects;
    (document.getElementById('displayEducation') as HTMLElement).textContent = education;
});
