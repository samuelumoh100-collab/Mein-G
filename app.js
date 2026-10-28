$(window).on("load", function () {
  const allowedNames = ["g", "angelique", "mein g"];
  const askedName = prompt("Gib deinen Namen ein");
  const cleanName = (askedName || "").trim();

  // Falscher oder leerer Name: Sorry-Nachricht zeigen und alles andere abbrechen
  if (!allowedNames.includes(cleanName.toLowerCase())) {
    const sorry = document.createElement("div");
    sorry.textContent = "Sorry, das ist nicht für dich. Falls doch gib deinen Spitznamen von mir ein aber lade die Seite zuerst neu. ";
    sorry.style.cssText =
      "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;" +
      "justify-content:center;background:#111;color:#fff;font-size:24px;" +
      "font-family:sans-serif;text-align:center;padding:20px;";
    document.body.appendChild(sorry);
    return;
  }

  const isMobile = window.matchMedia("(max-width: 990px)").matches;

  $(".enteredName").text(cleanName);
  $(".preloader").addClass("revomed");
  $(".card").addClass("animated");

  TweenLite.set("#petals", { perspective: 700 });
  TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

  const total = 120;
  const warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (let i = 0; i < total; i++) {
    const Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-160, -120),
      z: R(-200, 200),
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(10, 25), {
      y: h + 90,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15,
    });
    TweenMax.to(elm, R(6, 12), {
      x: "+=110",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
    });
    TweenMax.to(elm, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: -5,
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  const typed = new Typed("#text", {
    strings: [
      "Hey, also ich weiß du redest gerade nicht mit mir, aber vergiss einfach die letzten Tage. Ich will noch mit dir eigentlich auf ein Date gehen. Falls du das auch noch ein bisschen willst, ruf mich an, wenn du dir noch nicht sicher bist dann auch, aber wenn du wirklich zu keinem Zeitpunkt das willst, dann ignorier das einfach aber kannst trotzdem mal anrufen. 06601889128 ;)",
    ],
    startDelay: 4500,
    typeSpeed: 75,
    loop: false,
    showCursor: false,
    preStringTyped: function () {
      document.getElementById("title").style.opacity = 1;
    },
    onComplete: function () {
      document.getElementById("author").style.opacity = 1;

      // Blume erst einblenden, wenn der Text fertig ist
      setTimeout(function () {
        if (isMobile) {
          $(".bouquet-img").css("transform", "translate(200px, 140%)");
        } else {
          $(".bouquet-img").css("transform", "translate(220px, 100%)");
        }
        $(".card").attr("style", "opacity: 0.5 !important;");
      }, 1500);
    },
  });

  $(".bouquet-img").on("click mouseleave", function () {
    if (isMobile) {
      $(this).css("transform", "translate(200px, 260%)");
    } else {
      $(this).css("transform", "translate(200px, 220%)");
    }
    $(".card").attr("style", "opacity: 0.8 !important;");
  });
});
