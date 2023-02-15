import Cart from "./Cart";

const RightSideBar = () => {
  return (
    <div className="shop__right-sidebar sidebar-right">
      <Cart />

      <div className="map">
        <div className="map__place">
          <iframe
            className="map-google"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39555386.955078304!2d12.297534517766024!3d52.76341788801527!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sru!2sua!4v1674471004570!5m2!1sru!2sua"
            width=""
            height="116"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="map__title">Enter your adress</p>
        <p className="map__sub-title">Find out the delivery time</p>
      </div>
    </div>
  );
};

export default RightSideBar;
