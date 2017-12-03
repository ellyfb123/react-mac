import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { Button } from '../../../components';

import * as D from '../../../definitions';

import './HomePage.css';
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    products: Array<D.Product>
};

class HomePage extends React.Component<HomePageProps<object>> {
  constructor(props: HomePageProps<object>) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1 className="sg-Header">
          <div className="sg-Header-content">
              <div className="sg-Header-column">
                  <div className="sg-Header-logo">Lucky you're with AAMI</div>
              </div>
              <div className="sg-Header-column sg-u-width10of10 sg-u-textRight">
                  <p className="sg-Header-title sg-Type--heading1">Claim Online</p>
              </div>
          </div>
        </h1>
        <div className="sg-Main">
          <div className="sg-Main-content">
            <div>
              <h1>Claiming online is easy</h1>
              <p> AAMI - Claim Online is an easy way to make a claim on most insurance policies at your own time and pace.</p>
              <div className="sg-Grid">
                <div className="sg-Grid-row">
                  <div className="sg-Grid-col12 sg-Grid-col7--large">
                        <h3>Get Started with your claim</h3>
                        <br />
                        <div className="sg-Form-question ">
                            <label className="sg-Form-label">
                                First name
                            </label>

                            <input id="policyAddClaimPage.insurer.firstName" name="policyAddClaimPage.insurer.firstName" className="sg-Input sg-u-widthLarge" type="text" value="" />
                            <div className="sg-Validation-errorWrapper">
                                
                            </div>
                        </div>
                        <div className="sg-Form-question ">
                            <label className="sg-Form-label">
                                Policy Number
                            </label>

                            <input id="policyAddClaimPage.insurer.policyNumber" name="policyAddClaimPage.insurer.policyNumber" className="sg-Input sg-u-widthLarge" type="text" value="" />
                            <div className="sg-Validation-errorWrapper">
                                
                            </div>
                        </div>
                        <Button className="sg-Btn--primary" text="Claim online"/>
                    </div>
                </div>
              </div>
              <div id="footer-copy">
                <p className="sg-Type--small">
                  <strong>Please note:</strong>
                  <br />
                  </p>
                <ol>
                  <li className="sg-Type--size12">
                      Using Claim online is not suitable for all claims. If anyone has been injured or if there are dangers at the scene call 000. If you need immediate assistance to secure your property, please call us anytime on 13 22 44.
                  </li>
                  <li className="sg-Type--size12">
                  Claim online is only for holders of eligible AAMI insurance policies. Claim online is not available for Third Party Property Damage (Car or Motorcycle), Strata Insurance, International Travel, Business, Life, Accidental Death, Income Protection, Bill Protect or Compulsory Third Party (CTP) policy types.
                  </li>   
                </ol>
              </div>

            </div>
          </div>
        </div>
        <footer className="sg-Footer">
          <div className="sg-Footer-content">
            <ul className="sg-List-horizontal">
              <li><a className="sg-Type-linkInverse" href="http://www.aami.com.au/privacy">Online Terms &amp; Privacy Statement</a></li>
              <li><a className="sg-Type-linkInverse" href="http://www.aami.com.au/contact-aami/contact-details" target="_blank">Contact us</a></li>
            </ul>
            <p className="sg-Type--small sg-Type--muted">AAI Limited ABN 48 005 297 807 AFSL No. 230859 trading as AAMI</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(
  (state: D.RootState<object>) => ({
    products: state.products.available
  })
)(HomePage);
