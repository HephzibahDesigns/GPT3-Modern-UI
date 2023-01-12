import React, { Fragment } from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const BrandImages = () => (
  <Fragment>
    <div>
      <img src={google} alt="google" />
    </div>

    <div>
      <img src={slack} alt="slack" />
    </div>

    <div>
      <img src={atlassian} alt="atlassian" />
    </div>

    <div>
      <img src={dropbox} alt="dropbox" />
    </div>

    <div>
      <img src={shopify} alt="shopify" />
    </div>
  </Fragment>
);

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <BrandImages />
      </div>
    </div>
  );
};

export default Brand;
