import React, { useState } from 'react'
import tw from 'twin.macro'
import BarChart from './barChart'
import { Data } from '../data'

export default function ChartContainer() {
  const d = new Date().toDateString()
  let day = d.substring(0, 3).toLowerCase()
  const total = Data.reduce((p, c) => p + c.amount, 0)

  const [userData, setUserData] = useState({
    labels: Data.map(item => item.day),
    datasets: [
      {
        data: Data.map(item => item.amount),
        backgroundColor: Data.map(item =>
          item.day === day ? '#76B5BC' : '#EC755D',
        ),
        hoverBackgroundColor: Data.map(item =>
          item.day === day ? '#76B5BC90' : '#EC755D90',
        ),
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  })

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          padding: 11,
        },
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'black',
        callbacks: {
          title: function (context) {
            return null
          },
          label: function (context) {
            return '$' + context.formattedValue
          },
        },
        caretSize: 0,
        displayColors: false,
        yAlign: 'bottom',
      },
    },
  }

  return (
    <div tw="bg-white rounded-xl divide-y-2 px-5 sm:px-10 ">
      <div tw="">
        <h1 tw="font-bold text-2xl py-6 sm:py-10 sm:text-3xl">
          Spending - Last 7 days
        </h1>
        {/* Chart  */}
        <div tw="h-56">
          <BarChart chartData={userData} options={options} />
        </div>
      </div>
      {/* Total info */}
      <div tw="flex flex-row justify-between py-6 sm:py-10">
        <div tw="flex flex-col">
          <p tw="text-mBrown">Total this month</p>
          <h1 tw="text-dBrown text-3xl sm:text-5xl font-bold">${total}</h1>
        </div>
        <div tw="flex flex-col justify-end items-end">
          <p tw="text-dBrown font-bold sm:text-lg">+2.4%</p>
          <p tw="text-mBrown">from last month</p>
        </div>
      </div>
    </div>
  )
}
