function openClassModal() {

    document
        .getElementById("classModal")
        .classList.add("show");

}


function closeClassModal() {

    document
        .getElementById("classModal")
        .classList.remove("show");

}


function saveClass(event) {

    event.preventDefault();

    const branch =
        document.getElementById("branch").value;

    const year =
        document.getElementById("year").value;

    const section =
        document.getElementById("section").value;

    const strength =
        document.getElementById("strength").value;


    if (!branch || !year || !section || !strength) {

        alert("Please fill all fields.");

        return;

    }


    const className =
        branch + "-" + section;


    alert(
        "Class " +
        className +
        " saved successfully!"
    );


    closeClassModal();

    document
        .getElementById("classForm")
        .reset();

}


function searchClasses() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const rows =
        document.querySelectorAll(
            "#classTable tbody tr"
        );


    rows.forEach(function (row) {

        const text =
            row.textContent.toLowerCase();


        if (text.includes(searchValue)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


function filterClasses() {

    const branch =
        document
            .getElementById("branchFilter")
            .value;

    const year =
        document
            .getElementById("yearFilter")
            .value;


    const rows =
        document.querySelectorAll(
            "#classTable tbody tr"
        );


    rows.forEach(function (row) {

        const rowBranch =
            row.dataset.branch;

        const rowYear =
            row.dataset.year;


        const branchMatch =
            branch === "all" ||
            rowBranch === branch;


        const yearMatch =
            year === "all" ||
            rowYear === year;


        if (branchMatch && yearMatch) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


function editClass(className) {

    alert(
        "Edit functionality for " +
        className +
        " will be connected to the database later."
    );

}


function deleteClass(className) {

    const confirmed =
        confirm(
            "Are you sure you want to delete " +
            className +
            "?"
        );


    if (confirmed) {

        alert(
            className +
            " will be deleted after backend integration."
        );

    }

}