(function () {
  Reveal.configure({
    keyboard: {
      38: "prev",
      40: "next"
    }
  });

  $(document).mousedown(function(e){
    switch(e.button) {
      case 0:
        Reveal.next()
        break;
      case 2:
        Reveal.prev()
        break;
    }
    return false;
  });
})();
