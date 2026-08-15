
    function switchView(view) {
      document.querySelectorAll(".view").forEach(item => item.classList.toggle("is-active", item.id === `${view}-view`));
      document.querySelectorAll(".nav-link[data-view]").forEach(button => button.classList.toggle("is-active", button.dataset.view === view));
      const resetScroll = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      };
      resetScroll();
      requestAnimationFrame(() => {
        resetScroll();
        requestAnimationFrame(() => {
          resetScroll();
          setTimeout(resetScroll, 0);
        });
      });
    }
    document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
    document.querySelectorAll("[data-contact]").forEach(button => button.addEventListener("click", () => {
      switchView("home");
      setTimeout(() => document.getElementById("contact").scrollIntoView({behavior:"smooth"}),80);
    }));
    document.querySelector("[data-scroll]").addEventListener("click", () => document.getElementById("skills").scrollIntoView({behavior:"smooth"}));
    lucide.createIcons();
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.08});
    document.querySelectorAll(".reveal").forEach(section=>observer.observe(section));
  