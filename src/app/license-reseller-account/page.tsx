import React from 'react';
import './page.css'; // Import the CSS file
import Component from '../header/page';
import Hero from '../hero/page';
import Footer from '@/components/footer';
import PricingShad from '@/components/pricing-2/page';

const LicenseCenterPage = () => {
  return (
    <div className="containers ">
      <div className="navbar">
        <Component />
        <Hero />
      </div>
      <section className="section">
        <h2 className="section-heading">About LicenseCenter</h2>
        <p className="section-paragraph">
          Since 2017, LICENSECENTER Projects has been a reliable provider of stable and secure licensing solutions. We offer affordable licenses for popular software such as cPanel, LiteSpeed, and CloudLinux. Additionally, we provide a reseller program, a WHMCS module, an API, and a fully manageable licensing panel. This makes it easy for businesses to efficiently manage their licenses at a low cost.
        </p>
      </section>

      {/* Why LicenseCenter Section */}
      <section className="section">
        <h2 className="section-heading">Why LicenseCenter?</h2>
        <p className="section-paragraph">
          We offer a reliable and secure shared licensing system trusted by businesses of all sizes globally. Our licenses provide access to the latest software versions and include free technical support for all users. Additionally, we offer a user-friendly license panel for both clients and resellers, allowing them to manage their licenses with just one click.
        </p>
        <p className="section-paragraph">For more details, please refer to our documentation and FAQ.</p>
        <a href="#" className="section-button blue-button">More Details</a>
      </section>

      {/* Reseller Panel Section */}
      <section className="section">
        <h2 className="section-heading">Reseller Panel</h2>
        <p className="section-paragraph">
          We provide Reseller panel with many features such as license list, license actions (Register, Renew, Suspend, Unsuspend, Change LiteSpeed core (FREE), Sub reseller, 2 step verification, whitelist service, customize license style (NEW), instant panel recharge and more!
        </p>
        <p className="section-paragraph">
          Our Reseller Panel is one of the best manage panels and it keeps getting new updates!
        </p>
      </section>

      {/* Price Panel Section */}
      <section className="section">
      <PricingShad/>
      </section>

      {/* Footer Section */}
      <div className="card-text-section mt-10 px-0">
        <Footer />
      </div>
    </div>
  );
};

export default LicenseCenterPage;
