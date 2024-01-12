import React from 'react'

const Home = () => {
    return (
        <>
            <div className='bg-[#fff] h-[90vh]'>
                <div className='bg-[url(https://www.cyblance.com/portfolio/wp-content/uploads/2023/03/develop-ecommerce-blog-banner.jpg)] bg-cover h-[70vh] bg-center bg-no-repeat w-[100%]'>

                    <div className='pl-[150px] pt-[60px] pb-[50px]'>
                        <div className="bg-[#002162e4] text-[#ffffff] w-[50%] p-[20px] rounded-lg">
                            <header className='text-2xl font-[900] mb-[10px]'>Start Shopping</header>
                            <p className='leading-[1.5rem] mb-[20px] text-[18px] font-semibold text-justify'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolore itaque expedita veritatis cum voluptates iste asperiores esse doloremque blanditiis similique quis repellendus suscipit ipsum modi quas adipisci, perferendis quo!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolore itaque expedita veritatis cum voluptates iste asperiores esse doloremque blanditiis similique quis repellendus suscipit ipsum modi quas adipisci, perferendis quo!
                            </p>
                            <div className='mb-[0px]'>
                                <button className='px-[5px] py-[10px] border-2 border-[#f5c1ac] rounded-xl text-[#fff] font-extrabold hover:bg-[#ff2f66] '>Quick Shopping</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-evenly'>
                    <img src="https://banner2.cleanpng.com/20190210/arr/kisspng-clip-art-brand-logo-line-point-4-discount-stamp-png-transparent-onlygfx-com-5c604a74b7aca2.9222744515498143887523.jpg" alt="" className='w-[150px]' />
                    <img src="https://www.shutterstock.com/image-vector/fast-delivery-icon-apps-website-260nw-666403372.jpg" alt="" className='w-[150px]' />
                    <img src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png" alt="" className='w-[150px]' />
                </div>
            </div>
        </>
    )
}

export default Home