import Image from "next/image";
// import Page from "./header/page";
import { Button } from "@/components/ui/button";
import ImageScroller from "@/components/image-scroller";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";
import Page from "./pages/page";
import Component from "./header/page";
import Hero from "./hero/page";
// import App from "./header/page";

export default function Home() {
  return (
    <div>
      <div className='main'>
      <div className="navbar">
{/* <Page/> */}
          <Component />
        </div>
        {/* <div className="center-svg" >
          <img src="/Group (1).png" alt="" />
        </div>
        <div className="tech-image" >
          <img src="/Group.svg" alt="" />
        </div> */}
        <Hero/>

        {/* <div className="hero-text">
          <h1>Cheap cpanel License: <span className='blue-txt'>Unlocking Affordable Website Management</span> </h1>
          <div className="test">
            <img src="/Group (2).svg" alt="" />
          </div>
          <p>Looking for a price range-pleasant solution for website management? Explore the sector of reasonably-priced best cPanel license, supplying price-powerful and efficient alternatives for website hosting wishes. Learn about features, benefits, and professional hints for deciding on the proper license.</p>
          <div className="button-container">
            <Button variant={'secondary'}>Click To Start</Button>
            <Button variant={'destructive'}>Click To Support</Button>

          </div>
        </div> */}








      </div>
      {/* ========================Scrolling Image Section========================= */}
      <div className="scroll-area">
    {/* <ImageScroller/> */}

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
      <div className="container mx-auto my-4 card-choose p-0">
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


      {/* ==================Card detail section ================ */}

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-400 flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
           <i className="ri-server-line card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Elevate Your Hosting Experience</h3>
          <p className="py-4 text-sm text-gray-400">
          Say goodbye to barriers for your hosting capabilities. Our Cheap cPanel License allows you to create a vast quantity of money owed, providing you with the freedom to enlarge your on-line presence with out constraints.</p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>

    {/* Repeat this block for each card */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
          <i className="ri-bar-chart-grouped-fill card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Streamlined Account Management</h3>
          <p className="py-4 text-sm text-gray-400">
Experience the ease of dealing with several payments seamlessly. With our Cheap cPanel License, you may navigate via several debts effects, streamlining your administrative duties. From e mail configurations to document management.

</p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
           <i className="ri-cloud-line card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Stay Ahead with Cutting-Edge Features</h3>
          <p className="py-4 text-sm text-gray-400">
          In the virtual realm, staying current is fundamental to achievement. Our Cheap cPanel License now not handiest gives limitless debts however also grants you get admission to the ultra-modern version of cPanel.  </p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
           <i className="ri-cloud-line card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Lightning-Fast Performance</h3>
          <p className="py-4 text-sm text-gray-400">
          Speed is of the essence inside the online world, and our Cheap cPanel License with the latest model guarantees just that. Experience lightning-speedy overall performance as you navigate via the manage panel.</p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
           <i className="ri-cloud-line card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Responsive and Reliable Support</h3>
          <p className="py-4 text-sm text-gray-400">
          We recognize that your internet site&apos;s achievement is based on activate and reliable support. Our CheapcPanel License comes with fast and responsive customer service, making sure that your queries and issues are addressed directly. </p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
        <div className="w-1/3 pt-6 flex justify-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentColor"></path>
          </svg> */}
           <i className="ri-cloud-line card-icon"></i>
        </div>
        <div className="w-full pt-9 pr-4">
          <h3 className="font-bold text-pink-700">Multiple Payment Options for Your Convenience</h3>
          <p className="py-4 text-sm text-gray-400">
          Flexibility is at the middle of our provider. Choose from a whole lot of price alternatives tailor-made to fit your alternatives. Whether you decide upon month-to-month subscriptions or annual plans.</p>
        </div>
      </div>
      {/* <div className="p-4 flex space-x-4">
        <a href="#" className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
        <a href="#" className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete Feelings</a>
      </div> */}
    </div>



  </div>
</div>




      {/* ==================Footer Section========================== */}

    <div className="footer-section">
      <Footer/>
    </div>


      </div>
  );
}
