import React from 'react';
import '../../App.css';
import './Pricing.css';

export default function Pricing() {
  return <>
            <h1 className='pricing'>PRICING</h1>
            <div class="pricing-table">

                <div class="pricing-card">
                    <h3 class="pricing-card-header">Student</h3>
                    <div class="price"><sup>$</sup>10<span>/MO</span></div>
                    <ul>
                        <li><strong>Access to all our gyms</strong></li>
                    </ul>
                    <a href="#" class="order-btn">Order Now</a>
                </div>

                <div class="pricing-card">
                    <h3 class="pricing-card-header">Student+</h3>
                    <div class="price"><sup>$</sup>15<span>/MO</span></div>
                    <ul>
                        <li><strong>Access to all our gyms</strong></li>
                        <li><strong>Access to all our classes</strong></li>

                    </ul>
                    <a href="#" class="order-btn">Order Now</a>
                </div>

                <div class="pricing-card">
                    <h3 class="pricing-card-header">Basic</h3>
                    <div class="price"><sup>$</sup>13<span>/MO</span></div>
                    <ul>
                        <li><strong>Access to all our gyms</strong></li>
                    </ul>
                    <a href="#" class="order-btn">Order Now</a>
                </div>

                <div class="pricing-card">
                    <h3 class="pricing-card-header">Pro</h3>
                    <div class="price"><sup>$</sup>18<span>/MO</span></div>
                    <ul>
                        <li><strong>Access to all our gyms</strong></li>
                        <li><strong>Access to all our classes</strong></li>

                    </ul>
                    <a href="#" class="order-btn">Order Now</a>
                </div>
            </div>
        </>;
}
