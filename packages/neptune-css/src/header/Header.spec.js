import React from "react";
import { shallow } from "enzyme";
import { PublicNavigation } from "@transferwise/public-navigation";

import Header from ".";
import Locales from "../Locales";

describe("Header", () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header locale={Locales.BR} />);
  });

  it("passes public navigation the locale from props", () => {
    expect(publicNavigation().prop("locale")).toBe(Locales.BR);
  });

  function publicNavigation() {
    return header.find(PublicNavigation);
  }
});
