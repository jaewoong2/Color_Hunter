import React from 'react'
import { copyClipBoard, getRgb } from '../../utils'
import Text from '../Text'

type ColorsProps = {
  colors: string[]
}

const Colors: React.FC<ColorsProps> = ({ colors }) => {
  return (
    <div className="min-w-3xl w-full max-w-2xl select-none p-14">
      <div className="mb-14 rounded-t-xl rounded-b-xl shadow-lg">
        {colors?.map((color, index) => (
          <div
            key={color}
            className={`w-full first:rounded-t-xl last:rounded-b-xl`}
            style={{
              backgroundColor: `${color}`,
              height: `${150 - index * 14}px`,
            }}
          />
        ))}
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-around py-5">
          {colors?.map((color) => (
            <div
              key={color}
              className=" h-8 w-8 cursor-pointer rounded-full font-mono font-light text-gray-500 shadow-sm"
              style={{ backgroundColor: `${color}` }}
            />
          ))}
        </div>
        <div className="w-full border" />
        <div className="flex w-full items-center justify-around py-5">
          {colors?.map((color) => (
            <Text
              key={color}
              size="lg"
              className="cursor-pointer select-text font-mono font-light text-gray-500"
              icon={''}
              onClick={() => copyClipBoard(color)}
            >
              {color.toUpperCase()}
            </Text>
          ))}
        </div>
        <div className="w-full border" />
        <div className="flex w-full select-text items-center justify-around py-5">
          {colors?.map((color) => (
            <Text
              key={color}
              size="sm"
              className="cursor-pointer font-mono font-light text-gray-500"
              icon={''}
              onClick={() => copyClipBoard(getRgb(color))}
            >
              {getRgb(color)}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Colors
