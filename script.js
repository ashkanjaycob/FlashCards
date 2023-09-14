$(document).ready(function () {
  const txtTitle = $("#titletext");
  const explain = $("#explain");
  const cardsParent = $("#cardsParent");


    $("#createButton").click(function () {
      // console.log(txtTitle.val());
      // console.log(explain.val());

      const Craddiv = $(document.createElement("div"));
      Craddiv.addClass("col-3");
      Craddiv.append(`
        <div class="flip-card m-2">
        <div class="flip-card-inner">
            <div class="flip-card-front p-4">
                <h2>${txtTitle.val()}</h2>
            </div>
            <div class="flip-card-back p-4">
                <h4>${explain.val()}</h4>
            </div>
        </div>
        </div>
        `);

      cardsParent.append(Craddiv.html());
      txtTitle.val("");
      explain.val("");
    });

});
