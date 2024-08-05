document.addEventListener("DOMContentLoaded", function () {
  var textareas = document.querySelectorAll(".textview");

  textareas.forEach((textarea) => {
    // Добавляем обработчик события 'input' для каждого textarea
    textarea.addEventListener("input", resize);

    // Вызываем функцию resize сразу для каждого textarea
    resize.call(textarea);
  });

  function resize() {
    var el = this;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";

      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 1);
  }

  document
    .querySelector("#toDowloandPdf")
    .addEventListener("click", function () {
      const element = document.querySelector(".resume");
      const opt = {
        margin: 0,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    });
});
