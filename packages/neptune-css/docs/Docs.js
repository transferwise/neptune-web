import React, { StrictMode } from 'react';
import './Docs.less';

import Refractor from 'react-refractor';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

import '@transferwise/public-navigation/dist/public-navigation.css';

import '../build/css/alerts.css';
import '../build/css/badge.css';
import '../build/css/breadcrumbs.css';
import '../build/css/buttons.css';
import '../build/css/carousel.css';
import '../build/css/circles.css';
import '../build/css/var-color.css';
import '../build/css/core.css';
import '../build/css/flex.css';
import '../build/css/grid.css';
import '../build/css/footer.css';
import '../build/css/media.css';
import '../build/css/skew.css';
import '../build/css/spacing.css';
import '../build/css/table.css';
import '../build/css/container.css';
import '../build/css/header.css';
import '../build/css/background.css';
import '../build/css/columns.css';

import { PublicNavigation } from '@transferwise/public-navigation';
import Alerts from './AlertsDocs';
import Core from './CoreDocs';
import ComponentList from './ComponentListDocs';
import Breadcrumbs from './BreadcrumbsDocs';
import Badge from './BadgeDocs';
import Buttons from './ButtonsDocs';
import Circles from './CirclesDocs';
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

import Table from './TableDocs';
import Spacing from './SpacingDocs';
import Header from './HeaderDocs';

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
      <header className="container--wide section">
        <h1 className="display-4 colored-dot">Thalassa</h1>
        <p className="lead">CSS library</p>
        <Refractor
          language="javascript"
          value={`import "~thalassa/build/css/[component].css";`} />
      </header>
      <ComponentList />
      <Color />
      <Core />
      <Spacing />
      <Alerts />
      <Badge />
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
      <Header />
      <FooterDoc />
    </div>
  </StrictMode>
);
export default Docs;
