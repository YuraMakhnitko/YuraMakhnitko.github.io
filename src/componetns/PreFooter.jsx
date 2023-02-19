import { useSelector } from 'react-redux';

const PreFooter = () => {
  const lang = useSelector((state) => state.filter.lang);

  const enFooter = (
    <section className="shop-center__pre-footer pre-footer">
      <p className="pre-footer__title">Order sushi in Kiyv</p>
      <p className="pre-footer__text">
        Restaurant "Sushi and Noodles" offer our customers the most delicious
        sushi with home delivery, cooked according to classic and adapted to
        European audience recipes, as well as our own developments cooks. We
        value the time of our customers, so you can order sushi in Kiyv with
        delivery to your home or office.
      </p>
      <p className="pre-footer__text">
        There are more than 20 types of sushi in our menu:
      </p>
      <ul className="pre-footer__list">
        <li className="pre-footer__li">
          Classic with raw salmon, tuna, perch.
        </li>
        <li className="pre-footer__li">Exotic with tiger shrimp, scallop.</li>
        <li className="pre-footer__li">Spicy with smoked salmon, eel.</li>
      </ul>
      <p className="pre-footer__text">
        The menu also features gunkans: stuffed with red caviar and tobiko, as
        well as felix, where Japanese mayonnaise is combined with fish, seafood,
        eel. Spicy lovers can buy sushi with sauce spicy. Popular toppings are
        smoked chicken, snow crab, shrimp, scallops, tuna, salmon and perch.
      </p>
    </section>
  );

  const uaFooter = (
    <section className="shop-center__pre-footer pre-footer">
      <p className="pre-footer__title">Замовити суші в Києві</p>
      <p className="pre-footer__text">
        Ресторан «Суші і локшина» пропонує своїм клієнтам найсмачніше суші з
        доставкою додому, приготовані за класичними та адаптованими до Рецепти
        європейської аудиторії, а також власні розробки кухарів. ми цінуємо час
        наших клієнтів, тому ви можете замовити суші в Києві у доставка додому
        або в офіс .
      </p>
      <p className="pre-footer__text">У нашому меню більше 20 видів суші:</p>
      <ul className="pre-footer__list">
        <li className="pre-footer__li">
          Класичний з сирим лососем, тунцем, окунем.
        </li>
        <li className="pre-footer__li">
          Екзотика з тигровою креветкою, гребінцем.
        </li>
        <li className="pre-footer__li">Гострий з копченим лососем, вугром.</li>
      </ul>
      <p className="pre-footer__text">
        Також в меню є гункани: фаршировані червоною ікрою і тобіко, ас а також
        фелікс, де японський майонез поєднується з рибою, морепродуктами, вугор.
        Любителі гострого можуть купити суші з соусом спайсі. Популярні топінги
        копчена курка, сніжний краб, креветки, гребінці, тунець, лосось і окунь.
      </p>
    </section>
  );

  return lang ? uaFooter : enFooter;
};

export default PreFooter;
