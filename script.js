function generateResume(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let phone=document.getElementById("phone").value
let objective=document.getElementById("objective").value
let skills=document.getElementById("skills").value.split(",")
let projects=document.getElementById("projects").value.split(",")
let education=document.getElementById("education").value
let certifications=document.getElementById("certifications").value.split(",")

document.getElementById("rname").innerText=name
document.getElementById("rcontact").innerText=email+" | "+phone
document.getElementById("robjective").innerText=objective
document.getElementById("reducation").innerText=education

let skillList=""
skills.forEach(skill=>{
skillList+="<li>"+skill+"</li>"
})

document.getElementById("rskills").innerHTML=skillList

let projectList=""
projects.forEach(project=>{
projectList+="<li>"+project+"</li>"
})

document.getElementById("rprojects").innerHTML=projectList

let certList=""
certifications.forEach(cert=>{
certList+="<li>"+cert+"</li>"
})

document.getElementById("rcertifications").innerHTML=certList

}

function downloadPDF(){

let element=document.getElementById("resume")

html2pdf().from(element).save("resume.pdf")

}