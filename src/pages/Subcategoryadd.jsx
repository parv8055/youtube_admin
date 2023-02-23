import React from 'react'
import Layout from '../components/shared/Layout'

const Subcategoryadd = () => {
    return (
        <Layout>
          <h1 className='text-center p-5'>Add Sub Category</h1>
            <div className="flex flex-col rounded border border-black w-full md:w-[50%] drop-shadow-lg bg-gray-200 m-auto p-5">
                    <input type="text" className="p-5 my-5" />
                    <input type="File" className="p-5 my-5"/>
                    <button className="border border-black rounded p-3 block m-auto bg-white hover:bg-black hover:text-white">
                        {' '}
                        Submit
                    </button>
            </div>
        </Layout>
    )
}

export default Subcategoryadd