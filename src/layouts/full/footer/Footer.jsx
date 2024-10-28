import { useTranslation } from 'react-i18next';
import Insta from '../../../assets/images/flags/Insta.png';
import Fb from '../../../assets/images/flags/Fb.png';
import Tiktok from '../../../assets/images/flags/Tiktok.png';
import Youtube from '../../../assets/images/flags/Youtube.png';
import Parttern from '../../../assets/images/flags/Parttern.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-footer h-fit">
            <img src={Parttern} alt='Parttern' className='w-full h-full object-cover absolute top-0 bottom-0' />
            <div className="w-full h-full bg-footer text-[32px] container">
                <div className="grid grid-cols-3 ">
                    <div className="p-4">
                        <p className='text-[32px] text-primary font-lora-regular'>Địa chỉ:</p>
                        <p className='text-[16px] font-segoeui'>Địa chỉ: CT3-2 Khu đô thị Mễ Trì Hạ,<br />
                            Nam Từ Liêm</p>
                        <p className='text-[16px] font-segoeui'>Thành phố: Hà Nội</p>
                        <p className='text-[16px] font-segoeui'>Quốc gia: Việt Nam</p>
                    </div>
                    <div className="p-4">
                        <p className='text-[32px] text-primary font-lora-regular text-center'>Tôi Đi Từ Thiện</p>
                        <p className='text-[16px] text-center font-segoeui'>“Tôi đi từ thiện” là dự án thiện nguyện do Công ty cổ phần
                            dịch vụ và truyền thông Amai khởi xướng, chủ trì, phối hợp
                            cùng Văn phòng Bộ – Bộ Lao động – Thương binh và Xã hội;
                            Ngân hàng Chính sách xã hội Việt Nam thực hiện.</p>
                        <div className='flex gap-7 justify-center mt-7'>
                            <img src={Insta} alt="Instagram" />
                            <img src={Fb} alt="Facebook" />
                            <img src={Tiktok} alt="Tiktok" />
                            <img src={Youtube} alt="Youtube" />
                        </div>

                    </div>
                    <div className="p-4 pb-[50.19px]">
                        <p className='text-[32px] text-primary font-lora-regular text-right'>Thông tin:</p>
                        <p className='text-[16px] text-right font-segoeui'>Support: info@gmail.com</p>
                        <p className='text-[16px] text-right font-segoeui'>Email: info@gmail.com</p>
                        <p className='text-[16px] text-right font-segoeui'>Sđt: +84 3345678900</p>
                    </div>
                </div>
                <hr />
                <p className='text-center font-segoeui italic text-[13px] py-[10.38px] '>Copyright © 2024 · Tôi Đi Từ Thiện · All Rights Reserved · Design by AMAI agency</p>
            </div>
        </footer>
    )
}

export default Footer;