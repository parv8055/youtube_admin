import React from 'react'
import Layout from '../components/shared/Layout'
import Switch from '@mui/material/Switch'
import { useNavigate } from 'react-router-dom'

const Subcategory = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="py-3 bg-gray-200">
                <button
                    className="border border-black rounded p-3 block m-auto bg-white hover:bg-black hover:text-white"
                    onClick={() => navigate('/subcategoryadd')}
                >
                    Add Sub Category
                </button>
            </div>
            <div className="px-4">
            <h1 className='my-4'>Sub Categories</h1>
            <div className="rounded h-32 flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                    <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className="flex gap-4 pt-3">
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>

                <div className="rounded h-32 flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                        <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className="flex gap-4 pt-3">
                           
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>

                <div className="rounded h-32 flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                    <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className="flex gap-4 pt-3">
                           
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Subcategory