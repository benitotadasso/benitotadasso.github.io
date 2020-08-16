import "../scss/main.scss";

fetch(
  "https://api.github.com/users/benitotadasso/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".window-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="window">
        <div class="window__top">
          <span class="window__circle"></span>
          <span class="window__circle"></span>
          <span class="window__circle"></span>
        </div>
        <div class="window__content">
          <img src="img/github.svg" alt="logo github" />
          <h3 class="window__title window__grid">
            <span class="window__label">project:</span>
            <span>${name}</span>
          </h3>
          <p class="window__grid window__grid--descript">
            <span class="window__label">description:</span>
            <span>${description}</span>
          </p>
          <p class="window__grid">
            <span class="window__label">demo:</span>
            <span>
              &lt;<a
                class="window__link"
                href="${homepage}"
                title="${name} - demo"
                >see_here</a
              >&gt;
            </span>
          </p>
          <p class="window__grid">
            <span class="window__label">github:</span>
            <span>
              &lt;<a
                class="window__link"
                href="${html_url}"
                title="${name} - code"
                >source_code</a
              >&gt;
            </span>
          </p>
        </div>
      </article>`;
      if (true) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
