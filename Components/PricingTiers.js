import React from 'react'
import tierStyles from '../styles/tierstyles.module.css'
import CheckCircle from '../public/check-circle.svg';
import Link from 'next/link'
//import { Link } from "react-router-dom";
//import { Button } from 'react-bulma-components';
//import PropTypes from 'prop-types';


const PricingTiers = () => {
 //const openCheckout = () => {
   //window.location.href =='./pages/order-now.js';
   //}
    return (
        <div className={tierStyles["body"]} >
            <section className='flex flex-row space-x-5'>
              <h2 className='underline text-2xl text-red-900'>See our friendly prices:</h2>
              <div className={tierStyles["pricecomparison"]} className={tierStyles["pricecolumn"]}>
                <div className={tierStyles["priceheader"]}>
                <div className={tierStyles["price"]}>
                  <div className={tierStyles["dollarsign"]}>$</div>
                       15
                  <div className={tierStyles["permonth"]}>/mo</div>
                </div>
                <div className={tierStyles["planname"]}>College</div>
                </div>
                <div className={tierStyles["divider"]}></div>
                  <div className={tierStyles["feature"]}>
                    <CheckCircle />
                        Feature A
                   </div>
                 <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature B
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature C
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature D
                </div>
                
                {/*<Link to={location => ({ ...location, pathname: "/ordernow" })}>
                <button className={tierStyles["cta"]} type="button"><span>Order Now</span></button>
              </Link>
                {/*<Link href="/login">
                  <Button renderAs="button">
                   <span>Login</span>
                  </Button>
                </Link>*/}
                {/*<Button color="primary">My Bulma button</Button>*/}

                {/*<Link to="/ordernow">
                <button variant="contained">About</button>
                </Link>*/}
              </div>

              <div className={tierStyles["pricecomparison"]} className={tierStyles["pricecolumn"]}>
                <div className={tierStyles["priceheader"]}>
                <div className={tierStyles["price"]}>
                  <div className={tierStyles["dollarsign"]}>$</div>
                       20
                  <div className={tierStyles["permonth"]}>/mo</div>
                </div>
                <div className={tierStyles["planname"]}>Undergraduate</div>
                </div>
                <div className={tierStyles["divider"]}></div>
                  <div className={tierStyles["feature"]}>
                    <CheckCircle />
                        Feature A
                   </div>
                 <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature B
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature C
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature D
                </div>
                {/*<Link href='/ordernow'>
                <button className={tierStyles["cta"]} type="button" src='ordernow'><span>Order Paper</span></button>
    </Link>*/}
                
              </div>

              <div className={tierStyles["pricecomparison"]} className={tierStyles["pricecolumn"]}>
                <div className={tierStyles["priceheader"]}>
                <div className={tierStyles["price"]}>
                  <div className={tierStyles["dollarsign"]}>$</div>
                       30
                  <div className={tierStyles["permonth"]}>/mo</div>
                </div>
                <div className={tierStyles["planname"]}>Masters</div>
                </div>
                <div className={tierStyles["divider"]}></div>
                  <div className={tierStyles["feature"]}>
                    <CheckCircle />
                        Feature A
                   </div>
                 <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature B
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature C
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature D
                </div>
              </div>

              <div className={tierStyles["pricecomparison"]} className={tierStyles["pricecolumn"]}>
                <div className={tierStyles["priceheader"]}>
                <div className={tierStyles["price"]}>
                  <div className={tierStyles["dollarsign"]}>$</div>
                       50
                  <div className={tierStyles["permonth"]}>/mo</div>
                </div>
                <div className={tierStyles["planname"]}>PHD</div>
                </div>
                <div className={tierStyles["divider"]}></div>
                  <div className={tierStyles["feature"]}>
                    <CheckCircle />
                        Feature A
                   </div>
                 <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature B
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature C
                </div>
                <div className={tierStyles["feature"]}>
                   <CheckCircle />
                        Feature D
                </div>
              </div>
            </section>
        </div>
    )
}

export default PricingTiers
