'use client'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

const SearchInput = () => {

    const [search, setSearch] = useState("")

    return (
        <>
            <div className='w-full hidden md:inline-flex flex-1 h-12 relative '>
              <div style={{ position: 'absolute', left: '2.5rem', marginTop: '3.5rem', color: 'var(--lightColor)' }}>
                <CiSearch size={24} />
              </div>
                <input type="text"
                    placeholder='Search products...'
                    className='flex-1 h-full outline-none bg-transparent placeholder-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                    {
                        search && <div onClick={() => setSearch("")} className='text-accent/50 hover:text-Secondlight hoverEffect cursor-pointer absolute right-20 top-4'><IoMdClose /></div>
                    }
                     <button className='bg-lightColor text-accentWhite absolute right-0 px-3.5 py-1.5 mr-1.5 text-sm hover:bg-darkColor hoverEffect font-medium mt-2'>Search</button>
            </div>
        </>
    )
}

export default SearchInput