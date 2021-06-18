import React from 'react'
import tierStyles from '../../styles/tierstyles.module.css'
import CheckCircle from '../../public/check-circle.svg';
import Link from 'next/link'


const PricingTiers = () => {
 //const openCheckout = () => {
   //window.location.href =='./pages/order-now.js';
   //}
    return (
        <div className={tierStyles["body"]} >
            <section className='flex flex-row space-x-5 sticky '>
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
                
                <Link href="/checkout">
                  <button className={tierStyles["cta"]}>
                   <span>Order Now</span>
                  </button>
                </Link>
                
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
                
                <Link href="/checkout">
                  <button className={tierStyles["cta"]}>
                   <span>Order Now</span>
                  </button>
                </Link>
                
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

                <Link href="/checkout">
                  <button className={tierStyles["cta"]}>
                   <span>Order Now</span>
                  </button>
                </Link>

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

                <Link href="/checkout">
                  <button className={tierStyles["cta"]}>
                   <span>Order Now</span>
                  </button>
                </Link>

              </div>
            </section>
        </div>
    )
}

export default PricingTiers
