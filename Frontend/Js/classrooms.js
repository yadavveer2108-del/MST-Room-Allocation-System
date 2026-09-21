function openRoomModal() {

    document
        .getElementById("roomModal")
        .classList.add("show");

}


function closeRoomModal() {

    document
        .getElementById("roomModal")
        .classList.remove("show");

}


function saveRoom(event) {

    event.preventDefault();

    const roomNumber =
        document.getElementById("roomNumber").value.trim();

    const block =
        document.getElementById("roomBlock").value;

    const capacity =
        document.getElementById("roomCapacity").value;

    const status =
        document.getElementById("roomStatus").value;


    if (!roomNumber || !block || !capacity || !status) {

        alert("Please fill all fields.");

        return;

    }


    if (Number(capacity) <= 0) {

        alert("Capacity must be greater than zero.");

        return;

    }


    alert(
        "Classroom " +
        roomNumber +
        " saved successfully!"
    );


    document
        .getElementById("roomForm")
        .reset();

    closeRoomModal();

}


function filterRooms() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const block =
        document
            .getElementById("blockFilter")
            .value;

    const status =
        document
            .getElementById("statusFilter")
            .value;


    const rows =
        document.querySelectorAll(
            "#roomTable tbody tr"
        );


    let visibleCount = 0;


    rows.forEach(function (row) {

        const text =
            row.textContent.toLowerCase();

        const rowBlock =
            row.dataset.block;

        const rowStatus =
            row.dataset.status;


        const searchMatch =
            text.includes(searchValue);

        const blockMatch =
            block === "all" ||
            rowBlock === block;

        const statusMatch =
            status === "all" ||
            rowStatus === status;


        if (
            searchMatch &&
            blockMatch &&
            statusMatch
        ) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";

        }

    });


    document.getElementById("roomCount")
        .textContent =
        visibleCount + " Rooms";

}


function editRoom(roomNumber) {

    alert(
        "Edit functionality for " +
        roomNumber +
        " will be connected to the database later."
    );

}


function deleteRoom(roomNumber) {

    const confirmed =
        confirm(
            "Are you sure you want to delete " +
            roomNumber +
            "?"
        );


    if (confirmed) {

        alert(
            roomNumber +
            " will be deleted after backend integration."
        );

    }

}