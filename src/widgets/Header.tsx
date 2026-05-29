"use client";
import Image from "next/image";
import phoneIcon from '@/assets/icons/eva_phone-outline.svg';
import logInIcon from '@/assets/icons/ic_sharp-log-in.svg';
import cartIcon from '@/assets/icons/bx_bx-cart.svg';
import searchIcon from '@/assets/icons/gridicons_search.svg';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="">
                <div className="container flex justify-between text-[#969696] text-xs py-[1rem]">
                    <div className="flex gap-[1rem] items-center">
                        <Link href='#' className="flex gap-[1rem] items-center grow">
                            <Image src={phoneIcon} alt='phone icon outline'/>
                            <span>8 (812) 123-45-67</span>
                        </Link>
                        <hr className='border h-[12px]'/>
                        <span className="">Работаем 7 дней в неделю</span>
                        <hr className='border h-[12px]'/>
                        <span className="">9:00 — 18:00</span>
                    </div>
                    <div className="flex gap-[1rem] items-center">
                        <Link href='#'>
                            <Image src={logInIcon} alt='log in icon'/>
                        </Link>
                        <span>
                            <Link href='#'>Войти</Link> / <Link href='#'>Регистрация</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-[#0f0f0f]">
                <div className='container flex justify-between items-center h-[80px]'>
                    <div className="">
                        <h1 className='text-[36px] --font-post-no-bills'>PORTEN</h1>
                    </div>
                    <div className='flex gap-[1rem] h-full'>
                        <nav className='flex h-full text-center'>
                            <Link className='flex items-center justify-center uppercase h-full px-[1rem] hover:bg-[#1f1f1f] duration-200' href='/'>Понравилось</Link>
                            <Link className='flex items-center justify-center uppercase h-full px-[1rem] hover:bg-[#1f1f1f] duration-200' href='/about'>Личный кабинет</Link>
                            <Link className='flex items-center justify-center uppercase h-full px-[1rem] hover:bg-[#1f1f1f] duration-200' href='/settings'>Настройки</Link>
                        </nav>
                        <div className="flex gap-[1rem] items-center">
                            <button className='bg-transparent'>
                                <Image src={cartIcon} alt='log in icon'/>
                            </button>
                            <button className='bg-transparent'>
                                <Image src={searchIcon} alt='log in icon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;