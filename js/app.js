const masters = [
  {
    id: "alina",
    name: "Алина Березина",
    city: "Санкт-Петербург",
    bio: "Вяжу теплые свитеры и кардиганы из мериноса. Люблю природные оттенки и крупную фактуру.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    tags: ["Меринос", "Оверсайз", "Свитеры"],
    works: [
      {
        title: "Свитер «Лесной мох»",
        price: "8 900 ₽",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
        desc: "Мягкий свободный свитер с высоким воротом."
      },
      {
        title: "Кардиган «Олива»",
        price: "9 400 ₽",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
        desc: "Плотная вязка и крупные пуговицы из дерева."
      }
    ]
  },
  {
    id: "marina",
    name: "Марина Полякова",
    city: "Казань",
    bio: "Создаю детские комплекты, шапки и пледы. В работе использую гипоаллергенную пряжу.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    tags: ["Детские вещи", "Пледы", "Шапки"],
    works: [
      {
        title: "Детский плед «Мята»",
        price: "4 200 ₽",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
        desc: "Легкий плед 90x120 см для кроватки и прогулок."
      },
      {
        title: "Комплект «Листик»",
        price: "3 700 ₽",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
        desc: "Шапка и шарф-снуд для детей 3-6 лет."
      }
    ]
  },
  {
    id: "sofya",
    name: "Софья Ларионова",
    city: "Екатеринбург",
    bio: "Вяжу аксессуары для дома: корзины, чехлы на подушки и уютные накидки.",
    avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    tags: ["Домашний декор", "Эко-стиль", "Аксессуары"],
    works: [
      {
        title: "Набор корзин «Шалфей»",
        price: "5 100 ₽",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
        desc: "Три корзины для хранения мелочей и текстиля."
      },
      {
        title: "Чехол на подушку",
        price: "2 900 ₽",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
        desc: "Ручная вязка и натуральный хлопок, размер 45x45."
      }
    ]
  }
];

const app = document.getElementById("app");

function getTopWorks(limit = 4) {
  return masters.flatMap((master) =>
    master.works.map((work) => ({ ...work, masterName: master.name, masterId: master.id }))
  ).slice(0, limit);
}

function renderWorksGrid(works) {
  if (!works.length) {
    return '<div class="empty">Работы пока не добавлены.</div>';
  }

  return `
    <div class="grid grid--works">
      ${works.map((work) => `
        <article class="card">
          <img src="${work.image}" alt="${work.title}">
          <h3>${work.title}</h3>
          <p>${work.desc}</p>
          <div class="card__meta">
            <span>${work.masterName ? `Мастер: ${work.masterName}` : ""}</span>
            <span class="price">${work.price}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMastersGrid() {
  return `
    <div class="grid grid--masters">
      ${masters.map((master) => `
        <article class="card">
          <img src="${master.avatar}" alt="${master.name}">
          <h3>${master.name}</h3>
          <p>${master.city}</p>
          <p>${master.bio}</p>
          <div class="chips">
            ${master.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
          <div class="actions">
            <a class="btn btn--soft" href="#/master/${master.id}">Страница мастера</a>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHome() {
  app.innerHTML = `
    <div class="container">
      <section class="hero">
        <div>
          <h1>Магазин вязаных вещей от частных мастеров</h1>
          <p>На площадке собраны авторские работы: свитеры, пледы, шапки и декор для дома. У каждого мастера есть личная страница с примерами работ и ценами.</p>
          <div class="actions">
            <a class="btn btn--primary" href="#/masters">Посмотреть мастеров</a>
            <a class="btn btn--soft" href="#/about">Как это работает</a>
          </div>
        </div>
        <div class="hero__media">
          <img src="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1200&q=80" alt="Вязаные изделия ручной работы">
        </div>
      </section>

      <section class="section">
        <div class="section__head">
          <h2>Популярные работы</h2>
          <p>Актуальная подборка от наших мастеров</p>
        </div>
        ${renderWorksGrid(getTopWorks())}
      </section>
    </div>
  `;
}

function renderMasters() {
  app.innerHTML = `
    <div class="container">
      <section class="section">
        <div class="section__head">
          <h2>Наши мастера</h2>
          <p>Переходите в профиль и выбирайте готовые работы</p>
        </div>
        ${renderMastersGrid()}
      </section>
    </div>
  `;
}

function renderMasterPage(masterId) {
  const master = masters.find((item) => item.id === masterId);
  if (!master) {
    renderNotFound("Мастер не найден");
    return;
  }

  app.innerHTML = `
    <div class="container">
      <div class="actions">
        <a class="btn btn--soft" href="#/masters">← Ко всем мастерам</a>
      </div>
      <section class="section master-page">
        <article class="card master-page__profile">
          <img src="${master.avatar}" alt="${master.name}">
          <h2>${master.name}</h2>
          <p>${master.city}</p>
          <p>${master.bio}</p>
          <div class="chips">
            ${master.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </article>
        <div>
          <div class="section__head">
            <h2>Работы мастера</h2>
            <p>${master.works.length} товаров</p>
          </div>
          ${renderWorksGrid(master.works)}
        </div>
      </section>
    </div>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <div class="container">
      <section class="section">
        <div class="section__head">
          <h2>О магазине</h2>
          <p>Как покупать вязаные вещи на платформе</p>
        </div>
        <article class="card">
          <p>1. Выберите мастера в разделе «Мастера» и откройте его страницу.</p>
          <p>2. Посмотрите работы и цены.</p>
          <p>3. Для заказа напишите мастеру через контакт, который вы добавите позже в карточку.</p>
          <p>Платформа ориентирована на небольшие авторские коллекции и индивидуальные заказы.</p>
        </article>
      </section>
    </div>
  `;
}

function renderNotFound(message = "Страница не найдена") {
  app.innerHTML = `
    <div class="container">
      <section class="section">
        <div class="empty">
          <h2>${message}</h2>
          <p>Вернитесь на главную и продолжите выбор.</p>
          <div class="actions">
            <a class="btn btn--primary" href="#/">На главную</a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function setActiveNav(route) {
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === route || (route.startsWith("#/master/") && href === "#/masters");
    link.classList.toggle("active", isActive);
  });
}

function router() {
  const hash = window.location.hash || "#/";
  const route = hash.split("?")[0];

  if (route === "#/" || route === "") {
    setActiveNav("#/");
    renderHome();
    return;
  }

  if (route === "#/masters") {
    setActiveNav("#/masters");
    renderMasters();
    return;
  }

  if (route.startsWith("#/master/")) {
    const id = route.replace("#/master/", "").trim();
    setActiveNav("#/masters");
    renderMasterPage(id);
    return;
  }

  if (route === "#/about") {
    setActiveNav("#/about");
    renderAbout();
    return;
  }

  setActiveNav("");
  renderNotFound();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
