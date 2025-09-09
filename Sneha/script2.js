window.onload = function () {
            const options = { weekday: "long", day: "numeric", month: "short" };
            const today = new Date();

            function setAssignmentStatus(postId, dueId, statusId, dueDate, isSubmitted) {
                document.getElementById(postId).textContent =
                    "Posted " + today.toLocaleDateString("en-GB", options).replace(",", "");
                document.getElementById(dueId).textContent =
                    "Due " + dueDate.toLocaleDateString("en-GB", options).replace(",", "");

                const statusEl = document.getElementById(statusId);

                if (isSubmitted) {
                    statusEl.textContent = "✔ Done";
                    statusEl.classList.add("done");
                } else if (today > dueDate) {
                    statusEl.textContent =
                        "Missing (" + dueDate.toLocaleDateString("en-GB", options).replace(",", "") + ")";
                    statusEl.classList.add("missing");
                } else {
                    statusEl.textContent =
                        "Due " + dueDate.toLocaleDateString("en-GB", options).replace(",", "");
                    statusEl.style.color = "gray";
                }
            }

            setAssignmentStatus("post-date-1", "due-date-1", "status-1", new Date("2025-09-15"), false); // future due
            setAssignmentStatus("post-date-2", "due-date-2", "status-2", new Date("2025-08-30"), false); // missing
            setAssignmentStatus("post-date-3", "due-date-3", "status-3", new Date("2025-09-05"), true);  // done
        };