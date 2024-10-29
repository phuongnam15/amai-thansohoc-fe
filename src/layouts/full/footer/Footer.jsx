import { useTranslation } from 'react-i18next';
import Insta from '../../../assets/images/logos/Insta.png';
import Fb from '../../../assets/images/logos/Fb.png';
import Tiktok from '../../../assets/images/logos/Tiktok.png';
import Youtube from '../../../assets/images/logos/Youtube.png';
import Parttern from '../../../assets/images/backgrounds/Parttern.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-footer h-fit relative overflow-hidden xl:w-full xl:bg-footer xl:h-fit xl:relative xl:overflow-hidden">
            <img src={Parttern} alt='Parttern' className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2' />


            <div className="w-full h-full pt-[20px] container relative xl:text-[32px] xl:pt-[120px] ">
                <div className="block col-span-2 xl:hidden xl:p-4 ">
                    <p className='text-[20px] text-primary font-lora-regular text-center mb-1 xl:text-[40px] xl:mb-[12.39px]'>Tôi Đi Từ Thiện</p>
                    <p className='text-[10px] text-center font-segoeui xl:text-[16px]'>“Tôi đi từ thiện” là dự án thiện nguyện do Công ty cổ phần
                        dịch vụ <br /> và truyền thông Amai khởi xướng, chủ trì, phối hợp
                        cùng Văn<br />phòng Bộ - Bộ Lao động - Thương binh và Xã hội;
                        Ngân hàng<br /> Chính sách xã hội Việt Nam thực hiện.</p>
                    <div className='flex justify-center mt-[16.5px] gap-2 xl:gap-7  xl:mt-7'>
                        <img src={Insta} alt="Instagram" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                        <img src={Fb} alt="Facebook" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                        <img src={Tiktok} alt="Tiktok" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                        <img src={Youtube} alt="Youtube" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                    </div>
                </div>
                <div className="grid grid-cols-6 ">
                    <div className="col-span-3 xl:col-span-2 xl:p-4">
                        <p className='text-[16px] text-primary font-lora-regular mb-[5px] xl:text-[32px] xl:mb-[12.39px]'>Địa chỉ:</p>
                        <p className='text-[10px] font-segoeui mb-[5px] xl:text-[16px] xl:mb-2'>Địa chỉ: CT3-2 Khu đô thị Mễ Trì Hạ,<br />
                            Nam Từ Liêm</p>
                        <p className='text-[10px] font-segoeui mb-[5px] xl:text-[16px] xl:mb-2'>Thành phố: Hà Nội</p>
                        <p className='text-[10px] font-segoeui xl:text-[16px]'>Quốc gia: Việt Nam</p>
                    </div>
                    <div className="hidden col-span-2 xl:p-4 xl:block">
                        <p className='text-[20px] text-primary font-lora-regular text-center mb-1 xl:text-[40px] xl:mb-[12.39px]'>Tôi Đi Từ Thiện</p>
                        <p className='text-[10px] text-center font-segoeui xl:text-[16px]'>“Tôi đi từ thiện” là dự án thiện nguyện do Công ty cổ phần
                            dịch vụ và truyền thông Amai khởi xướng, chủ trì, phối hợp
                            cùng Văn phòng Bộ - Bộ Lao động - Thương binh và Xã hội;
                            Ngân hàng Chính sách xã hội Việt Nam thực hiện.</p>
                        <div className='flex justify-center mt-[16.5px] gap-2 xl:gap-7 xl:mt-7'>
                            <img src={Insta} alt="Instagram" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                            <img src={Fb} alt="Facebook" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                            <img src={Tiktok} alt="Tiktok" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                            <img src={Youtube} alt="Youtube" className='w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]' />
                        </div>
                    </div>
                    <div className="col-span-3 xl:col-span-2 xl:p-4 xl:pb-[50.19px]">
                        <p className=' text-[16px] text-primary font-lora-regular text-right mb-[5px] xl:text-[32px] xl:mb-[12.39px]'>Thông tin:</p>
                        <p className='text-[10px] text-right font-segoeui mb-[5px] xl:text-[16px] xl:mb-2'>Support: info@gmail.com</p>
                        <p className='text-[10px] text-right font-segoeui mb-[5px] xl:text-[16px] xl:mb-[11px]'>Email: info@gmail.com</p>
                        <p className='text-[10px] text-right font-segoeui xl:text-[16px]'>Sđt: +84 3345678900</p>
                    </div>
                </div>
                <p className='text-center text-[8px] py-1 font-segoeui italic xl:text-[13px] xl:py-[10.38px] border-[#C89400] border-t-[0.5px]'>Copyright © 2024 · Tôi Đi Từ Thiện · All Rights Reserved · Design by AMAI agency</p>
            </div>
        </footer>
    )
}

export default Footer;