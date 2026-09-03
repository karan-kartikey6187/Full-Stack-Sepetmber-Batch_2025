const registrationForm = document.getElementById("registrationForm")
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("mail");
let passwordEl = document.getElementById("password");
let ageEl = document.getElementById("age");
let dobEl = document.getElementById("dob");
let introductionEl = document.getElementById('introduction');
let qualificationEl = document.getElementById('qualification');
let resumeEl = document.getElementById('resume');

const handleSubmit = (e)=>{    
    e.preventDefault();
    let genderEl = document.querySelector('input[name="gender"]:checked');
    let skillsEl = document.querySelectorAll('input[name="skills"]:checked');

    let cleanName = nameEl?.value?.trim()
    let cleanEmail = emailEl?.value?.trim()
    let cleanPassword = passwordEl?.value?.trim()
    let cleanAge = ageEl?.value?.trim()
    let cleanDob = dobEl?.value?.trim()
    let cleanGender = genderEl?.value?.trim()
    let cleanSkills = []; 
    skillsEl?.forEach((el)=> cleanSkills.push(el.value.trim()))
    let cleanQualification = qualificationEl?.value?.trim()
    let cleanResume = resumeEl?.files[0]
    let cleanIntroduction = introductionEl?.value?.trim();

    const isNameValid = validateNameField();
    const isEmailValid = validateEmailField();
    const isPasswordValid = validatePasswordField();
    const isAgeValid = validateAgeField();
    const isDOBValid = validateDOBField();
    const isIntroValid = validateIntroductionField();
    const isGenderValid = validateGenderField();
    const isSkillsValid = validateSkillsField();
    const isQualificationValid = validateQualificationField();
    const isResumeValid = validateResumeField();

    if(
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isAgeValid &&
    isDOBValid &&
    isIntroValid &&
    isGenderValid &&
    isSkillsValid &&
    isQualificationValid &&
    isResumeValid
    ){
        alert("Form Submitted Successfully");
    }

}  

registrationForm.addEventListener('submit', handleSubmit);


function validateName(str){
    let namePattern = /^(?=.{3,}$)[A-Za-z]+(?:[.\s][A-Za-z]+)*$/;
    return namePattern.test(str)
}

function validateEmail(str){
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(str)
}

function validatePassword(str){
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
    return passwordPattern.test(str)
}

function validateDOB(dob){
   const minDate = new Date("1986-02-01");
   const maxDate = new Date("2008-02-01");
   const selectedDate = new Date(dob);
   return selectedDate >= minDate && selectedDate <= maxDate;
}

function createErrorEl(message){
    const errEl = document.createElement("span")
    errEl.classList.add("error")
    errEl.textContent = message;
    return errEl
}

// EventListener

function validateNameField(){
    let cleanName = nameEl.value.trim();
    if(!validateName(cleanName)){
        nameEl.parentElement.querySelector('.error')?.remove();
        let errEl = createErrorEl("Please Enter a valid name. Name must be atleast 3 character long");
        nameEl.parentElement.appendChild(errEl);
        return false;
    }else{
        nameEl.parentElement.querySelector('.error') ?.remove();
        return true;
    }
}


function validateEmailField(){

    let cleanEmail =emailEl.value.trim();

    if(!validateEmail(cleanEmail)){
        emailEl.parentElement.querySelector('.error')?.remove();
        let errEl =createErrorEl("Please enter a valid email address (example: abc@gmail.com)");
        emailEl.parentElement.appendChild(errEl);
        return false;
    }else{
        emailEl.parentElement.querySelector('.error') ?.remove();
        return true;
    }
}


function validatePasswordField(){
    
    let cleanPassword =passwordEl.value.trim();
    if(!validatePassword(cleanPassword)){
        passwordEl.parentElement.querySelector('.error')?.remove();
        let errEl =createErrorEl("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
        passwordEl.parentElement.appendChild(errEl);
        return false;
    }else{
        passwordEl.parentElement.querySelector('.error')?.remove();
        return true;
    }
}

function validateAgeField(){
    let cleanAge =ageEl.value.trim();
    if( !cleanAge || isNaN(cleanAge) || cleanAge < 18 || cleanAge > 100){

        document.querySelector(".age-error")?.remove();

        let errEl =createErrorEl("Age must be a valid number between 18 and 100");
        errEl.classList.add("age-error");
        document.querySelector(".age-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".age-error") ?.remove();
        return true;
    }
}

function validateDOBField(){
    let cleanDob =dobEl.value.trim();
    if(!validateDOB(cleanDob)){
        dobEl.parentElement.querySelector('.error') ?.remove();
        let errEl =createErrorEl("Date of birth must be between 1986-02-01 and 2008-02-01");
        dobEl.parentElement.appendChild(errEl);
        return false;
    }else{
        dobEl.parentElement.querySelector('.error')?.remove();
        return true;
    }
}

function validateIntroductionField(){
    let cleanIntroduction = introductionEl.value.trim();
    if(!cleanIntroduction || cleanIntroduction.length < 20){
        document.querySelector(".intro-error")?.remove();
        let errEl = createErrorEl("Introduction must be at least 20 characters long");
        errEl.classList.add("intro-error");
        document.querySelector(".intro-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".intro-error")?.remove();
        return true;
    }
}


function validateGenderField(){
    let genderEl = document.querySelector('input[name="gender"]:checked');
    if(!genderEl){
        document.querySelector(".gender-error")?.remove();
        let errEl = createErrorEl("Please select your gender");
        errEl.classList.add("gender-error");
        document.getElementById("male").parentElement.appendChild(errEl);
        return false;

    }else{
        document.querySelector(".gender-error")?.remove();
        return true;
    }
}


function validateSkillsField(){
    let skillsEl = document.querySelectorAll('input[name="skills"]:checked');
    if(skillsEl.length === 0){
        document.querySelector(".skills-error")?.remove();
        let errEl = createErrorEl("Please select at least one skill");
        errEl.classList.add("skills-error");
        document.querySelector(".skills-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".skills-error")?.remove();
        return true;
    }
}

function validateQualificationField(){
    let cleanQualification = qualificationEl.value.trim();
    if(!cleanQualification){
        document.querySelector(".qualification-error")?.remove();
        let errEl = createErrorEl("Please select your qualification");
        errEl.classList.add("qualification-error");
        document.querySelector(".qualification-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".qualification-error")?.remove();
        return true;
    }
}

function validateResumeField(){
    let cleanResume = resumeEl.files[0];
    if(!cleanResume){
        document.querySelector(".resume-error")?.remove();
        let errEl = createErrorEl("Please upload your resume");
        errEl.classList.add("resume-error");
        document.querySelector(".resume-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".resume-error")?.remove();
        return true;
    }
}

function validateIntroductionField(){
    let cleanIntroduction = introductionEl.value.trim();
    if(!cleanIntroduction || cleanIntroduction.length < 20){
        document.querySelector(".intro-error")?.remove();
        let errEl = createErrorEl("Introduction must be at least 20 characters long");
        errEl.classList.add("intro-error");
        document.querySelector(".intro-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".intro-error")?.remove();
        return true;
    }
}



nameEl.addEventListener("change",validateNameField);
emailEl.addEventListener("change",validateEmailField);
passwordEl.addEventListener("change",validatePasswordField);
ageEl.addEventListener("change",validateAgeField);
dobEl.addEventListener("change",validateDOBField);
introductionEl.addEventListener("change", validateIntroductionField);
document.querySelectorAll('input[name="gender"]').forEach((radio)=>{
    radio.addEventListener("change", validateGenderField);});
document.querySelectorAll('input[name="skills"]').forEach((checkbox)=>{
    checkbox.addEventListener("change", validateSkillsField);});
qualificationEl.addEventListener("change", validateQualificationField);
resumeEl.addEventListener("change", validateResumeField);
introductionEl.addEventListener("input", validateIntroductionField);


dobEl.addEventListener("change", function(){
    let dob = new Date(dobEl.value);
    let now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())){
        age--;
    }
    ageEl.value=age;
    validateAgeField();
})

