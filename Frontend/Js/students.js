function openStudentModal() {

    document
        .getElementById("studentModal")
        .classList.add("show");

}


function closeStudentModal() {

    document
        .getElementById("studentModal")
        .classList.remove("show");

}


function saveStudent(event) {

    event.preventDefault();

    const studentId =
        document.getElementById("studentId").value.trim();

    const studentName =
        document.getElementById("studentName").value.trim();

    const branch =
        document.getElementById("studentBranch").value;

    const year =
        document.getElementById("studentYear").value;

    const studentClass =
        document.getElementById("studentClass").value;


    if (
        !studentId ||
        !studentName ||
        !branch ||
        !year ||
        !studentClass
    ) {

        alert("Please fill all required fields.");

        return;

    }


    alert(
        "Student " +
        studentName +
        " (" +
        studentId +
        ") saved successfully!"
    );


    document
        .getElementById("studentForm")
        .reset();

    closeStudentModal();

}


function searchStudents() {

    applyStudentFilters();

}


function filterStudents() {

    applyStudentFilters();

}


function applyStudentFilters() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const branch =
        document
            .getElementById("branchFilter")
            .value;

    const year =
        document
            .getElementById("yearFilter")
            .value;

    const studentClass =
        document
            .getElementById("classFilter")
            .value;


    const rows =
        document.querySelectorAll(
            "#studentTable tbody tr"
        );


    let visibleCount = 0;


    rows.forEach(function (row) {

        const text =
            row.textContent.toLowerCase();

        const rowBranch =
            row.dataset.branch;

        const rowYear =
            row.dataset.year;

        const rowClass =
            row.dataset.class;


        const searchMatch =
            text.includes(searchValue);

        const branchMatch =
            branch === "all" ||
            rowBranch === branch;

        const yearMatch =
            year === "all" ||
            rowYear === year;

        const classMatch =
            studentClass === "all" ||
            rowClass === studentClass;


        if (
            searchMatch &&
            branchMatch &&
            yearMatch &&
            classMatch
        ) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";

        }

    });


    document.getElementById("studentCount")
        .textContent =
        visibleCount + " Students";

}


function editStudent(studentId) {

    alert(
        "Edit functionality for " +
        studentId +
        " will be connected to the database later."
    );

}


function deleteStudent(studentId) {

    const confirmed =
        confirm(
            "Are you sure you want to delete " +
            studentId +
            "?"
        );


    if (confirmed) {

        alert(
            studentId +
            " will be deleted after backend integration."
        );

    }

}