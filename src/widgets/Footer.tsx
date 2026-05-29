'use client'

import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className=" h-[400px] flex items-center bg-[linear-gradient(to_bottom,#0F0F0FD9,#0F0F0FD9),url(/footer-bg.jpg)] bg-center bg-no-repeat bg-cover">
                <div className='container flex justify-between gap-[2rem]'>
                    <div className="basis-1/3">
                        <h2 className="uppercase text-[32px]">О магазинне</h2>
                        <p className="mbs-[2rem] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                    </div>
                    <div className="basis-1/3">
                        <h2 className="uppercase text-[32px]">Категории</h2>
                        <div className='flex flex-wrap gap-[1rem] mbs-[2rem]'>
                            <button className='px-[20px] py-[10px] bg-[#0f0f0f]'>часы</button>
                            <button className='px-[20px] py-[10px] bg-[#0f0f0f]'>браслеты</button>
                            <button className='px-[20px] py-[10px] bg-[#0f0f0f]'>ремни</button>
                            <button className='whitespace-nowrap px-[20px] py-[10px] bg-[#0f0f0f]'>ювелирные изделия</button>
                            <button className='px-[20px] py-[10px] bg-[#0f0f0f]'>заколки</button>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <h2 className="uppercase text-[32px]">Рассылка</h2>
                        <p className="mbs-[2rem] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#0f0f0f] text-[#D0D0D0]'>
                <div className="container flex justify-between text-xs py-[1rem]">
                    <span>© 2020 Все права защищены</span>
                    <Link href='#' className='underline'>Сделано Figma.info</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;