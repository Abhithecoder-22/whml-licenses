'use client';
// import JAButton from '@/components/atoms/ja-button/ja-button';
import React, { useContext, useEffect } from 'react';
import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { features, plans } from '../../utils';
// import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';
// import { createClient } from '../../../../../utils/supabase/client';
import { calculateDiscountPercent } from '@/components/subscription/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/atoms/ja-subscription-carousel';
import { CountryTrackContext } from '@/context/countryTrack';

interface SubscriptionCardProps {
  trackPlan: boolean;
}

/*-------  
   trackPlan=0 for monthly
   trackPlan=1 for yearly
 ---------*/
const SubscriptionCardCarousel = ({ trackPlan }: SubscriptionCardProps) => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [showRightBorder, setShowRightBorder] = React.useState([
    true,
    true,
    true,
  ]);
  const [choosePlanDialogOpen, setChoosePlanDialogOpen] = React.useState(false);
  const [choosePlan, setChoosePlan] = React.useState<any>();
  const country=useContext(CountryTrackContext)

  const changeBorder = (index: number) => {
    setSelectedCard(index);

    if (index == 0) {
      const updatedRightBorder = [...showRightBorder];
      updatedRightBorder[0] = false;
      updatedRightBorder[1] = true;
      updatedRightBorder[2] = true;
      setShowRightBorder(updatedRightBorder);
    } else if (index === 1) {
      const updatedRightBorder = [...showRightBorder];
      updatedRightBorder[0] = false;
      updatedRightBorder[1] = false;
      updatedRightBorder[2] = true;
      setShowRightBorder(updatedRightBorder);
    } else if (index == 2) {
      const updatedRightBorder = [...showRightBorder];
      updatedRightBorder[1] = false;
      updatedRightBorder[0] = true;
      updatedRightBorder[2] = false;
      setShowRightBorder(updatedRightBorder);
    } else {
      const updatedRightBorder = [...showRightBorder];
      updatedRightBorder[0] = true;
      updatedRightBorder[1] = true;
      updatedRightBorder[2] = false;
      setShowRightBorder(updatedRightBorder);
    }
  };

  useEffect(() => {
    changeBorder(0);
  }, []);

  // const increaseCountForPlan = async () => {
  //   try {
  //     await supabase.from('subscription').insert({
  //       plan: `${choosePlan.planName.toLowerCase()}`,
  //       count: 1,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const redirectToDonationPage = async () => {
  //   await increaseCountForPlan();
  //   setChoosePlanDialogOpen((prev) => !prev);
  //   window.location.href =
  //     'https://www.gofundme.com/f/justagile-meetings-magisch-meistern?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer';
  // };

  console.log(country.countryTrack);
  
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-[100%]'
      >
        <CarouselContent>
          <CarouselItem className='basis-[100%] justify-end flex-col flex'>
            <div
              className={` mt-4  flex  flex-col  justify-end h-[96%]  ${
                selectedCard === 0 ? '' : 'subscription_right_border'
              }`}
            >
              <div className='  pt-8 flex flex-col gap-3 pb-10 '>
                <div className='mt-4 flex flex-col'>
                  {features.map((feature, index) => {
                   
                    
                    return (
                      <div
                        key={`${feature} + ${index}`}
                        className='flex  items-center   px-2  border-b-[1px] border-[gray] py-2 h-[9vh] '
                      >
                        {(`features.feature${index + 1}`)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* plans-card */}
          {plans.map((plan, index) => {
            return (
              <CarouselItem
                key={`${plan} + ${index}`}
                className='basis-[100%] flex pl-4'
              >
                <div
                  key={`${plan.planName} + ${index}`}
                  className={`mt-4  cursor-pointer w-[100%] ${
                    selectedCard === index ? 'outer_subscription_card  ' : ''
                  }
            `}
                  onClick={() => {
                    changeBorder(index);
                  }}
                >
                  <div
                    className={` flex flex-col gap-3 pb-10 w-[100%]  pt-16   ${
                      selectedCard === index ? 'inner_subscription_card' : ''
                    }
                ${showRightBorder[index] ? 'subscription_right_border' : ''}
              
                `}
                  >
                    <div className='flex gap-3 items-center px-[2.7rem] justify-center'>
                      <h1 className=' text-[2rem] font-medium'>
                        {plan.planName}
                      </h1>
                      {plan.isRecommended && (
                        <Button className='rounded-full bg-slate-50 text-[0.8rem] !py-0  subscription_card_recommended_btn hover:bg-slate-50 '>
                          {('subscription_recommended')}
                        </Button>
                      )}
                    </div>
                    <div className='flex items-center justify-center gap-1 px-[2.7rem]'>
                      <h1 className='font-semibold text-[2rem]'>
                        {country.countryTrack
                          ? `₹${plan.price[1].amount}`
                          : ` €${plan.price[0].amount}`}
                      </h1>
                      <span className='text-[0.6rem] mt-3'>
                        /
                        {!trackPlan
                          ? ` ${('plan_selection_monthly')}`
                          : ` ${('plan_selection_yearly')}`}
                      </span>
                    </div>
                    {!trackPlan && (
                      <div className='px-[1.3rem] flex  items-center justify-center text-[#89d289]'>
                        <span className='text-[14px]'>
                          {('discount_description')}{' '}
                          {calculateDiscountPercent(
                            plan.price[1].amount,
                            plan.price[0].amount
                          )}
                          {'%'}
                        </span>
                      </div>
                    )}
                    <div className='px-[2rem] flex justify-center items-center'>
                      <Button
                        variant='outline'
                        className='Ja-button-Choose-Plan !text-[#89d289] '
                        onClick={() => {
                          setChoosePlanDialogOpen((prev) => !prev);
                          setChoosePlan(plan);
                        }}
                      >
                        {('choose_plan_btn')}
                      </Button>
                    </div>
                    <div className='mt-4 flex flex-col'>
                      {plan.features.map((feature, index) => {
                        return (
                          <div key={`${feature} + ${index}`}>
                            {feature.isValid ? (
                              <div className='flex justify-center items-center border-b-[1px] border-[gray] py-3 h-[9vh]'>
                                {feature.validityDuration === null ? (
                                  <CheckCircledIcon className='h-5 w-6' />
                                ) : (
                                  <span className='text-[12px]'>
                                    {`${feature.validityDuration}/${(
                                      'feature_validity_unit_monthly'
                                    )}`}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <div className='flex justify-center items-center border-b-[1px] border-[gray] py-3 h-[9vh]'>
                                <CrossCircledIcon className='h-5 w-6' />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
          <CarouselItem className='basis-[100%] '>
            <div
              className={` mt-4  flex  flex-col  cursor-pointer w-[100%] h-[96%]
           ${selectedCard === 3 ? 'outer_subscription_card' : ''}
          `}
              onClick={() => {
                changeBorder(3);
              }}
            >
              <div
                className={` pt-16 flex flex-col gap-3 pb-10  h-[100%]
          ${selectedCard === 3 ? 'inner_subscription_card' : ''}
          `}
              >
                <div className=' flex flex-col'>
                  <div className='flex gap-3 items-center justify-center px-[2.7rem]'>
                    <h1 className=' text-[2rem] font-medium'>Enterprise</h1>
                    {false && (
                      <Button className='rounded-full bg-slate-50 text-[0.5rem] !py-0  subscription_card_recommended_btn hover:bg-slate-50 '>
                        {('subscription_recommended')}
                      </Button>
                    )}
                  </div>

                  <div
                    className={`px-[2.7rem] mt-4  justify-center items-center flex ${
                      !trackPlan && 'mt-14'
                    }`}
                  >
                    <Button
                      variant='outline'
                      className='Ja-button-Choose-Plan !text-[#89d289] '
                      onClick={() => {
                        setChoosePlanDialogOpen((prev) => !prev);
                        setChoosePlan({
                          planName: 'Enterprice',
                        });
                      }}
                    >
                      {('contacts.contact_us')}
                    </Button>
                  </div>
                  <div>
                    <div className='enterprice-card mt-8 p-5 flex flex-col  text-[17px] border-[1px]  mx-[1.3rem]'>
                      <div className='flex flex-col justify-center gap-4'>
                        <span>{('contacts.email')}</span>
                        <span className='text-[#89d289]'>
                          info@just-agile.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Dialog
        open={choosePlanDialogOpen}
        onOpenChange={setChoosePlanDialogOpen}
      >
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader></DialogHeader>
          <DialogDescription className='text-md text-[#e3dddd]'>
            {('choose_plan_dialog_description')}
          </DialogDescription>
          <div className='flex justify-end mt-2'>
            <Button
              onClick={() => {
                // redirectToDonationPage();
              }}
            >
              {('support_btn')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionCardCarousel;
