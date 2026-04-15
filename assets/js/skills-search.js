/**
 * Skills search — filters skill tags by name and description keywords.
 * Matching tags stay bright, non-matching tags dim. Categories with
 * zero visible tags are hidden entirely.
 */
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("skills-search");
  if (!input) return;

  var tags = document.querySelectorAll(".skill-tag");
  var categories = document.querySelectorAll(".skill-category");
  var noResults = document.getElementById("skills-no-results");

  input.addEventListener("input", function () {
    var query = this.value.toLowerCase().trim();
    var anyMatch = false;

    tags.forEach(function (tag) {
      if (!query) {
        tag.classList.remove("dimmed", "highlight");
        anyMatch = true;
        return;
      }

      var name = tag.getAttribute("data-name") || "";
      var desc = tag.getAttribute("data-desc") || "";

      if (name.indexOf(query) !== -1 || desc.indexOf(query) !== -1) {
        tag.classList.remove("dimmed");
        tag.classList.add("highlight");
        anyMatch = true;
      } else {
        tag.classList.add("dimmed");
        tag.classList.remove("highlight");
      }
    });

    // Hide categories where all tags are dimmed
    categories.forEach(function (cat) {
      var visibleTags = cat.querySelectorAll(".skill-tag:not(.dimmed)");
      if (query && visibleTags.length === 0) {
        cat.classList.add("hidden");
      } else {
        cat.classList.remove("hidden");
      }
    });

    if (noResults) {
      noResults.style.display = query && !anyMatch ? "block" : "none";
    }
  });
});
