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
      html2canvas(document.querySelector("#resumeToDown")).then((canvas) => {
        let base64image = canvas.toDataURL("image/png");
        // console.log(base64image);
        let pdf = new jsPDF("p", "px", [595, 842]);
        pdf.addImage(base64image, "PNG", 0, 0, 595, 842);
        pdf.save("webtylepress-two.pdf");
      });
    });
});
