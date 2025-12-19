function Prices() {
  return (
    <div className="container">
      <section className="prices-section">
        <h2>Ring Dressing Packages & Pricing</h2>
        <div className="prices-table-wrapper">
          <table className="prices-table">
            <thead>
              <tr>
                <th>Set</th>
                <th>Includes</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* SET */}
              <tr>
                <td rowSpan="5"><strong>SET</strong></td>
                <td rowSpan="5">Canvas, Rope Cover, Corner Pad, Spacer</td>
                <td>14ft</td>
                <td>£1,606</td>
              </tr>
              <tr>
                <td>16ft</td>
                <td>£1,846</td>
              </tr>
              <tr>
                <td>18ft</td>
                <td>£2,456</td>
              </tr>
              <tr>
                <td>20ft</td>
                <td>£2,945</td>
              </tr>
              <tr>
                <td>24ft</td>
                <td>£3,615</td>
              </tr>
              {/* SET + 1ft skirt */}
              <tr>
                <td rowSpan="5"><strong>SET + 1ft skirt</strong></td>
                <td rowSpan="5">Canvas, Rope Cover, Corner Pad, Spacer, 1ft Skirt</td>
                <td>14ft</td>
                <td>£1,905</td>
              </tr>
              <tr>
                <td>16ft</td>
                <td>£2,145</td>
              </tr>
              <tr>
                <td>18ft</td>
                <td>£2,755</td>
              </tr>
              <tr>
                <td>20ft</td>
                <td>£3,244</td>
              </tr>
              <tr>
                <td>24ft</td>
                <td>£3,914</td>
              </tr>
              {/* SET + 3ft skirt */}
              <tr>
                <td rowSpan="5"><strong>SET + 3ft skirt</strong></td>
                <td rowSpan="5">Canvas, Rope Cover, Corner Pad, Spacer, 3ft Skirt</td>
                <td>14ft</td>
                <td>£1,955</td>
              </tr>
              <tr>
                <td>16ft</td>
                <td>£2,195</td>
              </tr>
              <tr>
                <td>18ft</td>
                <td>£2,805</td>
              </tr>
              <tr>
                <td>20ft</td>
                <td>£3,294</td>
              </tr>
              <tr>
                <td>24ft</td>
                <td>£3,964</td>
              </tr>
            </tbody>
          </table>
          <p className="prices-note">
            All prices include VAT. Delivery and installation available on request. For bespoke packages or larger orders, please <a href="/contact">contact us</a> for a quote.
          </p>
        </div>
      </section>
  <section className="prices-section">
    <h2>Individual Product Pricing</h2>
    <div className="prices-table-wrapper">
      <table className="prices-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>OUR PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>canvas 14 ft. vinyl</td><td>1 pcs.</td><td>£899</td></tr>
          <tr><td>canvas 14ft</td><td>1 pcs.</td><td>£549</td></tr>
          <tr><td>canvas 16 ft.</td><td>1 pcs.</td><td>£589</td></tr>
          <tr><td>canvas 18 ft.</td><td>1 pcs.</td><td>£899</td></tr>
          <tr><td>canvas 20 ft.</td><td>1 pcs.</td><td>£1,049</td></tr>
          <tr><td>canvas 24 ft.</td><td>1 pcs.</td><td>£1,449</td></tr>
          <tr><td>Rope cover 14 ft. ring (11/12 ft.)</td><td>1 pcs.</td><td>£549</td></tr>
          <tr><td>Rope cover 16 ft. ring (13 ft.)</td><td>1 set</td><td>£599</td></tr>
          <tr><td>Rope cover 16 ft. ring (14 ft.)</td><td>1 set</td><td>£749</td></tr>
          <tr><td>Rope cover 18 ft. ring (15 ft.)</td><td>1 set</td><td>£889</td></tr>
          <tr><td>Rope cover 18 ft. ring (16 ft.)</td><td>1 set</td><td>£1,049</td></tr>
          <tr><td>Rope cover 20 ft. ring (17 ft.)</td><td>1 set</td><td>£1,179</td></tr>
          <tr><td>Rope cover 24 ft. ring (21 ft.)</td><td>1 set</td><td>£1,449</td></tr>
          <tr><td>skirts ANY FT RING - 1 ft.</td><td>1 set</td><td>£299</td></tr>
          <tr><td>skirts ANY FT RING - 3 ft.</td><td>1 set</td><td>£349</td></tr>
          <tr><td>corner pads 4 pcs./set</td><td>1 set</td><td>£299</td></tr>
          <tr><td>small corner pads 16 pcs./set</td><td>1 set</td><td>£249</td></tr>
          <tr><td>short turnbuckle cover 16 pcs./set</td><td>1 set</td><td>£209</td></tr>
          <tr><td>Long turnbuckle cover 4 pcs./set</td><td>1 set</td><td>£209</td></tr>
          <tr><td>spacer 8 pcs./set</td><td>1 set</td><td>£209</td></tr>
        </tbody>
      </table>
      <p className="prices-note">
        Min £1000 for free delivery.<br />
        All prices include VAT. For custom sizes, bulk orders, or installation, <a href="/contact">contact us</a>.
      </p>
    </div>
  </section>
  </div>
  );
}

export default Prices;