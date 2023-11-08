function updateProfileInfo(profileData){

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkill = document.getElementById('profile.hardSkill');
    hardSkill.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateIdiomas(profileData){
    const idiomas = document.getElementById('profile.idiomas');
    idiomas.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('');
}

function updateJob(profileData){
    const jobName = document.getElementById('profile.jobName');
    jobName.innerHTML = profileData.professionalExperience.name.map(jobName => `${jobName}`).join('');
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateIdiomas(profileData);
})();