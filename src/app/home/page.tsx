import React from 'react'
import './page.css'
import Page from '../pages/page'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import ImageScroller from '@/components/image-scroller'



const page = () => {
  return (
    // {===================Hero Section===================}
    <div>
      <div className='main'>
        {/* <div className="corner-img-left">
          <img src="/Vector.png" alt="" className="rotated-image-1" width={'400px'} />
        </div>

        <div className="corner-img-right" >
          <img src="/Vector.png" alt="" width={'400px'} />
        </div>
        <div className="corner-img-bottom-left">
          <img src="/Vector.png" alt="" className="rotated-image-2" width={'400px'} />
        </div>

        <div className="corner-img-bottom-right" >
          <img src="/Vector.png" alt="" className="rotated-image-3" width={'400px'} />
        </div> */}
        <div className="center-svg" >
          <img src="/Group (1).png" alt="" />
        </div>
        <div className="tech-image" >
          <img src="/Group.svg" alt="" />
        </div>
        <div className="navbar">

          <Page />
        </div>
        <div className="hero-text">
          <h1>Cheap cpanel License: <span className='blue-txt'>Unlocking Affordable Website Management</span> </h1>
          <div className="test">
            <img src="/Group (2).svg" alt="" />
          </div>
          <p>Looking for a price range-pleasant solution for website management? Explore the sector of reasonably-priced best cPanel license, supplying price-powerful and efficient alternatives for website hosting wishes. Learn about features, benefits, and professional hints for deciding on the proper license.</p>
          <div className="button-container">
            <Button variant={'secondary'}>Click To Start</Button>
            <Button variant={'destructive'}>Click To Support</Button>

          </div>
        </div>








      </div>
      {/* ========================Scrolling Image Section========================= */}
      <div className="scroll-area">
    <ImageScroller/>

      </div>

      <div className="cheap-txt mx-12 ">
        <h1 className="text-center">Cheap cPanel License</h1>
        <p>
          In the dynamic global of net web hosting, cost-effective solutions are key to achievement. If you aim to steer your net website hosting commercial enterprise in the direction of prosperity with out breaking the bank, look no further. Our agency provides an excellent remedy – low-cost cPanel licenses tailored for VPS and committed servers, complemented with the aid of Plesk, DirectAdmin CloudLinux, Litespeed, Imunify360, and Jetbackup licenses, crucial components for powerful hosting account management.
        </p>
      </div>

      <div className="why-choose">
        {/* <div className="contents"> */}
        <h1>Why Choose Cheap cPanel license for
          Hosting Business</h1>
        <p>Unlock Savings and Enhance Your Experience with Round-the-Clock Support</p>
        {/* </div> */}

      </div>
      <div className="container mx-auto my-4 card-choose">
        <div className="grid gap-4 md:grid-cols-3 mx-12">
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-settings-2-line card-icon"></i>

            <CardContent>
              <div className="text-2xl font-bold">Unlimited Licenses</div>

            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-customer-service-line card-icon"></i>

            <CardContent>
              <div className="text-2xl font-bold">24/7/365 Live Support</div>

            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-bar-chart-grouped-fill card-icon"></i>

            <CardContent>
              <div className="text-2xl font-bold">Free WHM and cPanel</div>

            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-server-line card-icon"></i>

            <CardContent>
              <div className="text-2xl font-bold">Powerful Servers</div>

            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-exchange-funds-fill card-icon"></i>
            <CardContent>
              <div className="text-2xl font-bold">Free License Transfer</div>

            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center space-y-2">
            <i className="ri-cloud-line card-icon"></i>
            <CardContent>
              <div className="text-2xl font-bold">1-command Auto Installer</div>

            </CardContent>
          </Card>
        </div>
      </div>

      <div className="support-team-section">
        <div className="title-section">
          <h1>Start Your Free Cheap cPanel License Trial Today</h1>
          <ul className="list">
            <li>NO CREDIT CARD REQUIRED</li>
            <li>7 DAYS FREE TRIAL</li>
            <li>24/7 EXPERT SUPPORT</li>
          </ul>
        </div>
        <div className="support-btn">
          <Button variant={'destructive'}>Click To Support Team</Button>
        </div>
      </div>



      <div className="newsletter-section">


        <section className="bg-img text-center">
          <div className="container">
            <h2>
              <strong>Subscribe To Our Newsletter</strong>
            </h2>
           
            <br></br>
              <form className="form-subscribe" action="#">
                <div className="input-group">

                  <Input type="email" placeholder="Email" className="form-control input-lg" />
                  <span className="input-group-btn">
                    <Button variant={'destructive'} className="btn  btn-lg" >Subscribe</Button>
                  </span>
                </div>
              </form>
              <div className="button-group">
            <Button variant={'destructive'}  className="btn btn-lg full-width-btn">Refund Policy</Button>
            <Button variant={'destructive'} className="btn btn-lg full-width-btn">Terms & Condition</Button>
          </div>
            </div>
            </section>
            



          </div>


      </div>
      )
}

      export default page
