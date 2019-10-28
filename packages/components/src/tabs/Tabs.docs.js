import React from 'react';
import Tabs from './Tabs';
import Alert from '../alert';

export const tabs = [
  {
    title: 'Title 1',
    disabled: false,
    content: (
      <Alert>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
        voluptatem pariatur blanditiis, vel quibusdam. Vero praesentium iste dignissimos eaque,
        officiis temporibus, nihil consectetur quod illum sunt modi exercitationem in minus incidunt
        accusantium nemo placeat? Molestias consectetur dolor ab sapiente explicabo tempore, nemo
        velit laborum eos suscipit distinctio.
      </Alert>
    ),
  },
  {
    title: 'Title 2',
    disabled: false,
    content: (
      <Alert type="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta officia animi incidunt
        praesentium ea aliquam, molestias numquam consequuntur facere laboriosam! Recusandae
        dignissimos expedita ducimus dolorum molestias animi aliquid ullam corrupti quis, eum
        placeat voluptatibus nobis minima optio necessitatibus praesentium reiciendis soluta,
        nesciunt neque reprehenderit impedit. Ipsum quasi recusandae architecto explicabo. Nulla
        atque omnis dicta. Dolor totam ratione labore debitis adipisci repellendus ullam blanditiis
        ab, repellat culpa dolorem! Ex numquam illo rem quos tempore illum laborum mollitia.
        Voluptas nostrum enim eaque illum ipsam aliquid tempore consequuntur quo similique minima
        ratione, vero, perferendis recusandae fuga eum nam, possimus adipisci ut soluta culpa?
      </Alert>
    ),
  },
  {
    title: 'Title 3',
    disabled: false,
    content: (
      <Alert type="error">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat doloribus nulla non
        autem qui a mollitia, recusandae quos! Laudantium possimus sint architecto explicabo culpa
        fuga, blanditiis sapiente cumque a amet commodi quaerat maiores? Iure neque reiciendis minus
        sint ducimus.
      </Alert>
    ),
  },
];

class TabsDocs extends React.PureComponent {
  state = {
    tabs: tabs.map(tab => ({ ...tab })),
    selected: 0,
  };

  handleTabSelect = index => {
    this.setState({ selected: index });
  };

  render() {
    return (
      <div className="container" id="tabs">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Tabs</h2>
              <p>Wat is tab</p>
            </div>
            <div className="col-md-6 m-t-2">
              <Tabs
                className="tabs-custom-class"
                name="tabs-docs"
                tabs={this.state.tabs}
                selected={this.state.selected}
                onTabSelect={this.handleTabSelect}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TabsDocs;
