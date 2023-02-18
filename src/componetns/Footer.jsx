import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Footer = () => {
  const footerLocation = useLocation();
  const lang = useSelector((state) => state.lang.type);

  console.log(footerLocation.pathname);
  // {footerLocation.pathname !=="/cart" && }

  return (
    <>
      {footerLocation.pathname !== '/cart' && (
        <footer className="footer">
          <div className="footer__items">
            <div className="footer__links">
              <a href="#" className="footer__link">
                {lang ? 'Про нас' : 'About us'}
              </a>
              <a href="#" className="footer__link">
                {lang ? 'Доставка та оплата' : 'Shipping and payment'}
              </a>
              <a href="#" className="footer__link">
                {lang ? 'Оновлення' : 'Material Tape'}
              </a>
              <a href="#" className="footer__link">
                {lang ? 'Повернення' : 'Return policy'}
              </a>
            </div>
            <div className="footer__contacts">
              <p className="footer__contacts-text">
                {lang ? 'Контакти' : 'Contacts'}
              </p>
              <a href="#" className="footer__phone">
                Tel:+00 000 000 955{' '}
              </a>
              <a href="#" className="footer__phone">
                Tel:+00 000 000 955{' '}
              </a>
              <p className="footer__contacts-text">
                {lang ? 'Адреса: вул. Велика ХХХ' : 'Adress: Big Street XXX'}
              </p>
            </div>
            <div className="footer__messengers">
              <a href="#" className="footer__link-messenger">
                <svg
                  className="footer__messenger-icon"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7_1315)">
                    <path
                      d="M0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25Z"
                      fill="#1BD741"
                    />
                    <path
                      d="M9 42.0085L11.4491 33.3099C9.8742 30.6343 9.04498 27.5901 9.04498 24.4628C9.04498 14.8338 16.8788 7 26.5078 7C36.1368 7 43.9705 14.8338 43.9705 24.4628C43.9705 34.0919 36.1368 41.9256 26.5078 41.9256C23.5075 41.9256 20.5695 41.1576 17.9705 39.6993L9 42.0085ZM18.4291 36.5224L18.9637 36.8487C21.2297 38.2321 23.8385 38.9634 26.5078 38.9634C34.5034 38.9634 41.0082 32.4584 41.0082 24.4628C41.0082 16.4672 34.5034 9.96227 26.5078 9.96227C18.5122 9.96227 12.0073 16.4672 12.0073 24.4628C12.0073 27.2488 12.7991 29.9542 14.2969 32.2866L14.6568 32.8472L13.2465 37.8565L18.4291 36.5224Z"
                      fill="white"
                    />
                    <path
                      d="M21.6023 16.3351L20.4691 16.2733C20.1132 16.2539 19.7641 16.3728 19.4951 16.6065C18.9457 17.0835 18.0674 18.0058 17.7976 19.2076C17.3953 20.9995 18.017 23.1938 19.6262 25.3881C21.2354 27.5824 24.2342 31.0932 29.537 32.5927C31.2458 33.0759 32.59 32.7501 33.6271 32.0867C34.4485 31.5613 35.0148 30.7179 35.2188 29.7645L35.3998 28.9195C35.4572 28.6509 35.3209 28.3784 35.0714 28.2634L31.2418 26.4982C30.9932 26.3836 30.6984 26.4561 30.5312 26.6727L29.0278 28.6217C28.9142 28.7689 28.7198 28.8273 28.5443 28.7656C27.5147 28.4038 24.066 26.9594 22.1736 23.3143C22.0916 23.1562 22.112 22.9643 22.2284 22.8295L23.6652 21.1673C23.812 20.9976 23.8491 20.7589 23.7609 20.5527L22.1101 16.6906C22.0222 16.485 21.8253 16.3472 21.6023 16.3351Z"
                      fill="white"
                    />
                    <rect width="51" height="50" rx="25" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1315">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className="footer__link-messenger">
                <img
                  src="img/icons/telegram.svg"
                  alt="telegram"
                  className="footer__messenger-icon"
                />
              </a>
              <a href="#" className="footer__link-messenger">
                <svg
                  className="footer__messenger-icon"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipath="url(#clip0_77_147)">
                    <path
                      d="M-0.216677 0.0267646C-4.76142 4.74649 -3.83126 9.76014 -3.83126 24.9914C-3.83126 37.64 -6.03857 50.3199 5.51365 53.3049C9.121 54.2325 41.0836 54.2325 44.6861 53.3001C49.4959 52.0593 53.4093 48.1588 53.9443 41.3575C54.019 40.4082 54.019 9.59149 53.9419 8.62297C53.3732 1.37835 48.9128 -2.79688 43.0354 -3.64252C41.6884 -3.83767 41.4185 -3.8955 34.5074 -3.90754C9.99332 -3.8955 4.61964 -4.98689 -0.216677 0.0267646V0.0267646Z"
                      fill="url(#paint0_linear_77_147)"
                    />
                    <rect width="51" height="50" rx="25" />
                    <path
                      d="M25.0004 8.01639C18.0372 8.01639 11.425 7.39746 8.89941 13.8742C7.85618 16.5492 8.00767 20.0232 8.00767 24.9976C8.00767 29.3627 7.86768 33.4652 8.89941 36.1191C11.4193 42.5997 18.0852 41.9788 24.9966 41.9788C31.6644 41.9788 38.5394 42.6725 41.0957 36.1191C42.1408 33.4173 41.9874 29.995 41.9874 24.9976C41.9874 18.3638 42.3537 14.0811 39.1339 10.8658C35.8738 7.60824 31.465 8.01639 24.9928 8.01639H25.0004ZM23.4778 11.0765C38.0024 11.0535 39.8511 9.44011 38.8309 31.8537C38.4684 39.781 32.4277 38.911 25.0023 38.911C11.4634 38.911 11.0741 38.5239 11.0741 24.9899C11.0741 11.2988 12.148 11.0842 23.4778 11.0727V11.0765ZM34.0711 13.8952C32.9455 13.8952 32.0326 14.8073 32.0326 15.9321C32.0326 17.0569 32.9455 17.969 34.0711 17.969C35.1968 17.969 36.1097 17.0569 36.1097 15.9321C36.1097 14.8073 35.1968 13.8952 34.0711 13.8952V13.8952ZM25.0004 16.2771C20.1812 16.2771 16.2749 20.1822 16.2749 24.9976C16.2749 29.813 20.1812 33.7162 25.0004 33.7162C29.8196 33.7162 33.724 29.813 33.724 24.9976C33.724 20.1822 29.8196 16.2771 25.0004 16.2771V16.2771ZM25.0004 19.3372C32.489 19.3372 32.4986 30.658 25.0004 30.658C17.5137 30.658 17.5022 19.3372 25.0004 19.3372Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_77_147"
                      x1="-0.105782"
                      y1="50.2213"
                      x2="53.6352"
                      y2="3.70001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFDD55" />
                      <stop offset="0.5" stopColor="#FF543E" />
                      <stop offset="1" stopColor="#C837AB" />
                    </linearGradient>
                    <clipPath id="clip0_77_147">
                      <rect width="50" height="50" rx="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
