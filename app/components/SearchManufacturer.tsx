"use client"
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer, setmanufacturer}: SearchManufacturerProps) => {
    const [query, setquery] = useState('');
    const manufacturerfilter = query === "" ? manufacturers : manufacturers.filter((item) => (item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g,""))))
  
  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange ={setmanufacturer}>
            <div className="relative w-full">

                    <Combobox.Button className="absolute top-3">
                        <Image 
                        src="/Mercedes-logo.svg"
                         width={24} 
                         height={24}
                         className='ml-4 carlogo'
                         alt='Car logo'
                        />
                    </Combobox.Button>

                    < Combobox.Input
                    className="search-manufacturer__input"
                    placeholder='mercedes'
                    displayValue={(manufacturer: string) =>manufacturer}
                    onChange={e => setquery(e.target.value)}
                    />

                    <Transition
                    as={Fragment} 
                    leave='transition ease-in duration-100' 
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setquery('')}
                    >

                     <Combobox.Options>
                        {manufacturerfilter.length === 0
                         && query!== '' 
                         ? (<Combobox.Option 
                          value={query}
                        className="search-manufacturer__option">
                          Create "{query}"
                        </Combobox.Option>)
                        :(manufacturerfilter.map((item) => 
                        (<Combobox.Option
                        key={item}
                        className={({active}) =>`
                        relative search-manufacturer__option
                        ${active? 'bg-primary-blue text-white' : 'text-gray-900'}
                        `}
                        value={item}>
                          {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                        </Combobox.Option>)))
                        }
                     </Combobox.Options>
                    </Transition>
            </div>
        </Combobox>
        
    </div>
  )
}

export default SearchManufacturer