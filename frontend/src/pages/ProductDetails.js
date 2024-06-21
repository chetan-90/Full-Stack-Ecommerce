import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SummaryApi from '../common'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalf } from 'react-icons/fa6'
import displayINRCurrency from '../helpers/displayCurrency'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'
import addToCart from '../helpers/addToCart'
import Context from '../context'

const ProductDetails = () => {
    const [data , setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: "",
    })

    const  params = useParams()
    const [loading , setLoading ] = useState(true)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage, setActiveImage] = useState("")

    const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
        x : 0,
        y : 0,
    })

    const [zoomImage, setZoomImage] = useState(false);

    const { fetchUserAddToCart } = useContext(Context)
    const navigate = useNavigate()

    const fetchProductDetails = async()=>{
        setLoading(true)
        const response = await fetch(SummaryApi.productDetails.url,{
            method : SummaryApi.productDetails.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                productId : params?.id
            })
        })
        setLoading(false)

        const dataResponse =await response.json();

        setData(dataResponse?.data)
        setActiveImage(dataResponse?.data?.productImage[0])
    }
    
    const handleMouseEnterProduct = (imgURL) =>{
        setActiveImage(imgURL)
    }

    const handleZoomImage = useCallback((e) => {
        setZoomImage(true)
        const {left , top, width, height } = e.target.getBoundingClientRect();

        const  x = (e.clientX - left )/ width
        const  y = (e.clientY - top )/ height
        console.log();
        

        setZoomImageCoordinate({x, y})
    

    },[zoomImageCoordinate])

    const handleLeaveImageZoom = () => {
        setZoomImage(false)
    }

    useEffect(()=>{
        fetchProductDetails()
    },[params])

    const handleAddToCart = async(e,id) => {
        await addToCart(e,id)
        fetchUserAddToCart()
    }

    const handleBuyProduct = async(e,id)=>{
        await addToCart(e,id)
        fetchUserAddToCart()
        navigate("/cart")
    }
    
  return (
    <div className='container mx-auto p-4'>
        <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
            {/**product Image */}
            <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
                <div className='h-[300px] w-[300px] lg:h-96 bg-slate-200 relative p-2'>
                   <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' alt='img' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom}/>

                   {/**product zoom */}
                   {zoomImage&& (
                    
                        <div className='hidden lg:block absolute min-w-[500px] overflow-hidden bg-slate-200 p-1 -right-[510px] top-0' >
                    <div
                        className='w-full h-full min-h-[500px] min-w-[400px]mix-blend-multiply scale-150'
                        
                        style={{
                            backgroundImage : `url(${activeImage})`,
                            backgroundRepeat : "no-repeat",
                            backgroundPosition : `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`
                        }}
                    >

                    </div>
                    </div>
                   )}
                   
                </div>
                <div className='h-full'>
                {
                    loading ? (
                        <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                            {
                                productImageListLoading.map((e1,index)=>{
                                    return(
                                        <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"+index}>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    ):(
                        <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                            {
                               data?.productImage?.map((imgURL, index)=>{
                                    return(
                                        <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                                            <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' alt='small img' onMouseEnter={()=>handleMouseEnterProduct(imgURL)} onClick={()=>handleMouseEnterProduct(imgURL)}/>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                }

                </div>
            </div>

            {/**product Details */}
            {
                loading ? (
                    <div className='grid gap-1 w-full'>
                        <p className='bg-slate-200 animate-pulse h-6 lg:h-8 w-full rounded-full inline-block'></p>
                        <p className='text-2xl lg:text-4xl font-medium bg-slate-200 animate-pulse h-6 lg:h-8 w-full'></p>
                        <p className='capitalize text-slate-400 bg-slate-200 animate-pulse h-6 lg:h-8 min-w-[100px] w-full'></p>

                        <div className='flex bg-slate-200 animate-pulse h-6 lg:h-8 items-center gap-1 w-full'>
                           
                        </div>

                        <div className='flex items-center gap-2 text-2xl font-medium  animate-pulse h-6 lg:h-8  w-full'>
                            <p className='bg-slate-200 w-full'></p>
                            <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
                        </div>

                        <div className='flex items-center gap-3 my-2 w-full'>
                            <button className='bg-slate-200 animate-pulse h-6 lg:h-8 rounded w-full'></button>
                            <button className='bg-slate-200 animate-pulse h-6 lg:h-8 rounded w-full'></button>
                        </div>

                        <div className='w-full'>
                            <p className='text-slate-600 font-medium my-1 bg-slate-200 animate-pulse h-6 lg:h-8 rounded w-full'></p>
                            <p className='bg-slate-200 animate-pulse h-10 lg:h-12 rounded w-full '></p>
                        </div>

                    </div>
                ):(
                    <div className='flex flex-col gap-1'>
                        <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{ data?.brandName}</p>
                        <p className='text-2xl lg:text-4xl font-medium'>{data?.productName}</p>
                        <p className='capitalize text-slate-400'>{data?.category}</p>

                        <div className='flex text-red-600 items-center gap-1'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStarHalf/>
                        </div>

                        <div className='flex items-center gap-2 text-2xl font-medium'>
                            <p className='text-red-600'>{displayINRCurrency(data?.sellingPrice)}</p>
                            <p className='text-slate-400 line-through'>{displayINRCurrency(data?.price)}</p>
                        </div>

                        <div className='flex items-center gap-3 my-2'>
                            <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600  font-medium hover:bg-red-600 hover:text-white' onClick={(e)=>handleBuyProduct(e,data?._id)}>Buy</button>
                            <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium bg-red-600 text-white hover:text-red-600 hover:bg-white' onClick={(e)=>handleAddToCart(e,data?._id)}>Add To Cart</button>
                        </div>

                        <div>
                            <p className='text-slate-600 font-medium my-1'>Description : </p>
                            <p>{data?.description}</p>
                        </div>

                    </div>
                )
            }
      
        </div>
        {
            data.category && (
                 <CategoryWiseProductDisplay category={data?.category} heading={"recommended product"}/>
            )
        }
    </div>
  )
}

export default ProductDetails
