class Footer extends Component {
  constructor(props) {
    super(props);
    // Initialize State
    this.initialState = {
      lastOrder: null,
      error: null
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    Meteor.call("orders.getLastOrder", (error, response) => {
      if (error) {
        this.setState(() => ({ error: error }));
      }
      this.setState(() => ({ lastOrder: response }));
    });
  }

  render() {
    const { lastOrder, error } = this.state;
    return (
      <Page>
        <Row>
          <Col>
            <Alert className="mt-3">
              I would highly recommend understanding the structure of the order
              object first and how it should relate to the designs.
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            {JSON.stringify(lastOrder)}
          </Col>
        </Row>
        <Row>
          <Col>
            {error}
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Footer;