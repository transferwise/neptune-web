import React, { StrictMode } from 'react';
import './Docs.less';

import Refractor from 'react-refractor';
import './less/prism.css';

import '../bundles/neptune';

import NavbarDoc from './NavbarDocs';
import PublicNavigationDoc from './PublicNavigationDocs';
import Alerts from './AlertsDocs';
import Core from './CoreDocs';
import ComponentList from './ComponentListDocs';
import Breadcrumbs from './BreadcrumbsDocs';
import Badge from './BadgeDocs';
import Blocks from './BlocksDocs';
import Buttons from './ButtonsDocs';
import Circles from './CirclesDocs';
import CircleBackgrounds from './CircleBackgroundsDocs';
import Carousel from './CarouselDocs';
import Color from './ColorDocs';
import Forms from './FormsDocs';
import FooterDoc from './FooterDocs';
import Grid from './GridDocs';
import Columns from './ColumnsDocs';
import Container from './ContainerDocs';
import Skew from './SkewDocs';
import Flex from './FlexDocs';
import Media from './MediaDocs';
import Background from './BackgroundDocs';
import Utilities from './UtilitiesDocs';

import Table from './TableDocs';
import Spacing from './SpacingDocs';

const Docs = () => (
  <StrictMode>
    <div className="doc" id="top">
      <a href="#top" className="doc-go-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
          <title>up-arrow</title>
          <polygon
            fill="#2e4369"
            points="18.01 7.47 12 1.46 5.99 7.47 6.7 8.18 11.5 3.38 11.5 22 12.5
            22 12.5 3.38 17.3 8.18 18.01 7.47"
          />
        </svg>
      </a>
      <header className="container container--wide section">
        <h1 className="display-4 colored-dot">Neptune CSS.</h1>
        <p className="lead">CSS library</p>
        <Refractor
          language="javascript"
          value={`import "~neptune-css/build/css/[component].css";`}
        />
      </header>
      <ComponentList />
      <Color />
      <Core />
      <Spacing />
      <CircleBackgrounds />
      <Alerts />
      <Badge />
      <Blocks />
      <Breadcrumbs />
      <Buttons />
      <Carousel />
      <Circles />
      <Forms />
      <Media />
      <Table />
      <Skew />
      <Columns />
      <Flex />
      <Grid />
      <Container />
      <Background />
      <Utilities />
      <NavbarDoc />
      <PublicNavigationDoc />
      <FooterDoc />
    </div>
  </StrictMode>
);
export default Docs;
