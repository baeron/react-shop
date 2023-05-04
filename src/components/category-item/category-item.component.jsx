import "./category-item.styles.scss";

const CategoryItem = (
  { title, imageUrl } // destructure the props
) => (
  <section className="category__container">
    <div
      className="category__image-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="category__body-container">
        <h2 className="category__title">{title}</h2>
        <p>Order now</p>
      </div>
    </div>
  </section>
);

export default CategoryItem;
