import Link from 'next/link';
import React from 'react'

export default function ProducstColor() {



    const Color = [
        {
            "model": "M-001",
            "color": '#F5F8FD'
        },
        {
            "model": "M-002",
            "color": '#F9F6CD'
        },
        {
            "model": "M-003",
            "color": '#F8E9E4'
        },
        {
            "model": "M-004",
            "color": '#F8EDF1'
        },
        {
            "model": "M-005",
            "color": '#FEFEFE'
        },
        {
            "model": "M-006",
            "color": '#FFF9BD'
        },
        {
            "model": "M-007",
            "color": '#F5CFCF'
        },
        {
            "model": "M-008",
            "color": '#F5CBDF'
        },
        {
            "model": "M-009",
            "color": '#FCF7F4'
        },
        {
            "model": "M-010",
            "color": '#F7ECB6'
        },
        {
            "model": "M-011",
            "color": '#D5B3BB'
        },
        {
            "model": "M-012",
            "color": '#F1C2E2'
        },
    ]


    return (
        <div className='font-[Archivo] max-w-[1580px] mx-auto  md:px-30 flex justify-center items-center flex-wrap gap-4'>
            {Color.map((item, index) => {
                return (
                    <Link href={'/'}>
                        <div key={index + +new Date()}>
                            <div
                                className='min-h-[140px] min-w-[296px] rounded-2xl border border-[#DDDDDD] inset-shadow-sm inset-shadow-{item.color} '
                                style={{ backgroundColor: item.color }}></div>
                            <p className='text-center text-[20px] py-3 font-medium'>{item.model}</p>
                        </div>
                    </Link>
                );
            })}
        </div>

    )
}
