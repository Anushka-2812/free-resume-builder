window.onload = () => {
    setTemplate('ats');
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");
const experienceInput = document.getElementById("experience");


nameInput.addEventListener("input", () => {
document.getElementById("preview-name").innerText = nameInput.value || "Your Name";
});


function updateContact() {
const email = emailInput.value || "Email";
const phone = phoneInput.value || "Phone";
document.getElementById("preview-contact").innerText = `${email} | ${phone}`;
}


emailInput.addEventListener("input", updateContact);
phoneInput.addEventListener("input", updateContact);
skillsInput.addEventListener("input", () => {
document.getElementById("preview-skills").innerText = skillsInput.value || "Your skills will appear here";
});


educationInput.addEventListener("input", () => {
document.getElementById("preview-education").innerText = educationInput.value || "Your education details";
});


experienceInput.addEventListener("input", () => {
document.getElementById("preview-experience").innerText = experienceInput.value || "Your experience details";
});

document.getElementById("download-pdf").addEventListener("click", () => {
    const resume = document.getElementById("resume");

    html2canvas(resume).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    });
});

 
document.getElementById("download-word").addEventListener("click", () => {
    const resumeHTML = document.getElementById("resume").innerHTML;

    const wordContent = `
        <html>
        <head>
            <meta charset="utf-8">
            <title>Resume</title>
        </head>
        <body>
            ${resumeHTML}
        </body>
        </html>
    `;

    const blob = new Blob(['\ufeff', wordContent], {
        type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
function setTemplate(type) {
    const resume = document.getElementById("resume");
    resume.className = `resume ${type}`;

    document.querySelectorAll(".template-buttons button").forEach(btn => {
        btn.classList.remove("active-template");
    });

    event.target.classList.add("active-template");
}

const projectsInput = document.getElementById("projects");

projectsInput.addEventListener("input", () => {
    document.getElementById("preview-projects").innerText =
        projectsInput.value || "Your projects will appear here";
});


