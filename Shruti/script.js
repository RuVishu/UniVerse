const editBtn = document.getElementById('editpost');
const modal = document.getElementById('optionsModal');

editBtn.addEventListener('click', () => {
    modal.style.display = "flex";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelectorAll('#optionsModal li').forEach(item => {
    item.addEventListener('click', () => {
        if (item.innerText === "Cancel") {
            modal.style.display = "none";
        }
    });
});

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset all buttons
    buttons.forEach(b => {
      b.style.backgroundColor = "#fff";
    });
    btn.style.backgroundColor = "#5ebec4";
  });
});

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  searchBtn.style.display = "none";    
  searchInput.style.display = "block"; 
  searchInput.focus();                 
});

searchInput.addEventListener("blur", () => {
  searchInput.style.display = "none";
  searchBtn.style.display = "inline-block";
});

const likeBtn = document.querySelector(".likes button");

const outlineSVG = `<svg xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 512 456.549">
                                <path fill-rule="nonzero"
                                    d="M463.044 117.283c-10.125-26.729-28.412-47.537-50.269-60.578-13.478-8.048-28.343-13.125-43.461-14.808-14.879-1.655-30.018.007-44.284 5.407-37.461 14.189-50.601 41.912-66.522 74.028-3.422 6.887-1.964 6.964-5.893.078-17.576-30.87-33.786-63.684-70.127-75.725-12.879-4.26-26.554-5.408-40.088-3.845-13.83 1.606-27.546 6.028-40.207 12.83-25.068 13.485-45.883 36.215-55.382 64.916-31.525 95.237 83.379 188.376 170.42 258.918 12.97 10.506 25.363 20.547 36.834 30.251 15.449-13.288 32.356-26.695 49.995-40.687 87.815-69.634 195.291-154.872 158.984-250.785zm-29.173-95.842c29.483 17.589 54.094 45.531 67.663 81.351 46.924 123.973-73.479 219.471-171.871 297.485-22.829 18.11-44.418 35.228-61.078 50.41-7.626 7.478-19.85 7.894-27.969.711-13.9-12.323-31.033-26.201-49.312-41.01C94.743 332.128-32.73 228.808 7.688 106.7c12.956-39.151 41.144-70.042 75.028-88.266C99.939 9.175 118.705 3.147 137.724.943c19.337-2.232 38.983-.556 57.65 5.619 22.047 7.302 42.601 20.751 59.55 41.271 16.316-18.527 35.37-31.35 55.614-39.018 20.513-7.759 42.13-10.168 63.283-7.816 20.913 2.324 41.453 9.337 60.05 20.442z" />
                            </svg>`;
const filledSVG = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39"><defs><style>.cls-1{fill:#ed1b24;fill-rule:evenodd;}</style></defs><title>red-heart</title><path class="cls-1" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"/></svg>`;

let liked = false;

likeBtn.addEventListener("click", () => {
  liked = !liked;
  likeBtn.innerHTML = liked ? filledSVG : outlineSVG;
});

const saveBtn = document.querySelector(".save button");

const save = `<svg xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 459 511.87">
                                <path fill-rule="nonzero"
                                    d="M32.256 0h394.488c8.895 0 16.963 3.629 22.795 9.462C455.371 15.294 459 23.394 459 32.256v455.929c0 13.074-10.611 23.685-23.686 23.685-7.022 0-13.341-3.07-17.683-7.93L230.124 330.422 39.692 505.576c-9.599 8.838-24.56 8.214-33.398-1.385a23.513 23.513 0 01-6.237-16.006L0 32.256C0 23.459 3.629 15.391 9.461 9.55l.089-.088C15.415 3.621 23.467 0 32.256 0zm379.373 47.371H47.371v386.914l166.746-153.364c8.992-8.198 22.933-8.319 32.013.089l165.499 153.146V47.371z" />
                            </svg>`;
const click_save=`<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="89.842px" viewBox="0 0 122.881 89.842" enable-background="new 0 0 122.881 89.842" xml:space="preserve"><g><path d="M1.232,55.541c-1.533-1.388-1.652-3.756-0.265-5.289c1.388-1.534,3.756-1.652,5.29-0.265l34.053,30.878l76.099-79.699 c1.429-1.501,3.804-1.561,5.305-0.132c1.502,1.428,1.561,3.803,0.133,5.305L43.223,88.683l-0.005-0.005 c-1.396,1.468-3.716,1.563-5.227,0.196L1.232,55.541L1.232,55.541z"/></g></svg>`;

let saved = false;

saveBtn.addEventListener("click", () => {
  saved = !saved;
  saveBtn.innerHTML = saved ? click_save : save;
});
