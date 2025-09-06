lucide.createIcons();

    function execCmd(command, value = null) {
      document.execCommand(command, false, value);
    }

    function toggleHighlightMenu() {
      const menu = document.getElementById("highlightMenu");
      menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }

    function highlight(color) {
      execCmd("hiliteColor", color);
      document.getElementById("highlightMenu").style.display = "none";
    }

    function saveNote() {
      const content = document.getElementById("editor").innerHTML;
      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Note-${new Date().toISOString().slice(0,10)}.html`;
      a.click();

      URL.revokeObjectURL(url);
    }